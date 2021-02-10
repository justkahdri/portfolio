import React from 'react';

import HomeHero from '../sections/homeHero';
import SkillsContainer from '../sections/skillsContainer';
import ButtonGroup from '../sections/buttonGroup';
import Header from "../components/header";

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
        }
    }

    return (
        <div id="homepage">
            <Header currentPath={props.location.pathname}/>
            <HomeHero {...state.firstSection}/>
            <SkillsContainer {...state.secondSection}/>
            <hr className="featurette-divider container"/>
            <ButtonGroup />
        </div>
    )
}

export default HomePage;