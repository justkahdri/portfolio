import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';

import HomeHero from '../UI/organisms/HomeHero';
import SkillsContainer from '../UI/organisms/skillsContainer';
import IconButtons from '../UI/molecules/IconButtons';
import Skill from "../UI/molecules/Skill";
import Loader from "../UI/atoms/Loader";
import Alert from '../UI/atoms/Alert';

function HomePage() {
    const [state, setState] = useState({
        loading: true,
        error: null,
        firstSection: {
            title: "Joaquín Montes",
            subtitle: "Software Developer",
            description:
                "I'm a self-taught Developer from Buenos Aires, Argentina. " +
                "During my personal projects I worked with Frontend, Data Analysis and Databases. " +
                "Now I'm diving into Backend learning Node and client-server communication. " +
                "My main objective is to become a professional in tech. Maybe you can help me achieve it!",
        },
        secondSection: {
            title: "Skills and Tools",
            skillCtx: require.context('../../assets/badges'),
        },
        thirdSection: {
            buttons: [
                {
                    title: "Github",
                    icon: "fab fa-github",
                    custom: "btn-icon btn-github",
                    href: "https://github.com/justkahdri"
                },
                {
                    title: "LinkedIn",
                    icon: "fab fa-linkedin-in",
                    custom: "btn-icon btn-linkedin",
                    href: "https://www.linkedin.com/in/joaquin-montes/"
                },
                {
                    title: "Blog",
                    icon: "fas fa-paragraph",
                    custom: "btn-icon btn-green",
                    href: "/blog"
                }
            ]
        },
        success_alert: {
          importance: 'primary',
          strong: 'All done!',
          message: 'Your message was sent succesfully!'
        }
    })

    const [ skillsList, setSkillsList ] = useState([]);
    let location = useLocation()


    useEffect(() => {
        let isMounted = true;
        const getData = async () => {
          try {
              const response = await fetch(
                  process.env.REACT_APP_SKILLS,
                  {headers: {
                      'Content-Type': 'application/json',
                      'Accept': 'application/json'
                  }}
              );
              if (isMounted) {
                const dataJson = await response.json();
                setSkillsList(dataJson);
                setState({...state, loading: false, error:null});
              }
          } catch (err) {
              setState({...state, loading: false, error:err});
          }
        }


        getData();
        return () => {
          isMounted = false;
        };
    }, [state])

    return (
        state.loading ? <Loader/> :
            <main role="main" id="homepage">
              <HomeHero {...state.firstSection}/>
              {location.search === '?sent=success' && <Alert {...state.success_alert}/>}
              {state.error && <Alert/>}
              <SkillsContainer {...state.secondSection}>
                  {Object.entries(skillsList).map(([name, path], idx) => (
                      <Skill key={idx} name={name} path={path} ctx={state.secondSection.skillCtx} />
                  ))}
              </SkillsContainer>
              <hr className="featurette-divider w-75 mb-5" />
              <IconButtons {...state.thirdSection}/>
            </main>
    )
}

export default HomePage;
