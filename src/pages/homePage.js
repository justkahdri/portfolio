import React from 'react';

import HomeHero from '../sections/homeHero';
import SkillsContainer from '../sections/skillsContainer';
import ButtonGroup from '../sections/buttonGroup';
import Header from "../components/header";
import skillsList from "../assets/badges/data.json";
import Skill from "../components/skill";

function HomePage(props) {
    const state = {
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
            skillCtx: require.context('../assets/badges'),
        },
        thirdSection: {
            buttons: [
                {
                    title: "Github",
                    icon: "fab fa-github",
                    btn: "btn-github",
                    href: "https://github.com/justkahdri"
                },
                {
                    title: "LinkedIn",
                    icon: "fab fa-linkedin-in",
                    btn: "btn-linkedin",
                    href: "https://www.linkedin.com/in/joaquin-montes/"
                },
                {
                    title: "Blog",
                    icon: "fas fa-paragraph",
                    btn: "btn-green",
                    href: "/blog"
                }
            ]
        }
    }

    return (
        <React.Fragment>
            <Header currentPath={props.location.pathname}/>
            <main role="main" id="homepage">
                <HomeHero {...state.firstSection}/>
                <SkillsContainer {...state.secondSection}>
                    {Object.entries(skillsList).map(([name, path], idx) => (
                        <Skill index={idx} name={name} path={path} ctx={state.secondSection.skillCtx} />
                    ))}
                </SkillsContainer>
                <hr className="featurette-divider w-75" />
                <ButtonGroup {...state.thirdSection}/>
            </main>
        </React.Fragment>
    )
}

export default HomePage;