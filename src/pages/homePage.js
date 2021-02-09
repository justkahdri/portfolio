import React from 'react';

import HomeHero from '../sections/homeHero';
import SkillsContainer from '../sections/skillsContainer';
import ButtonGroup from '../sections/buttonGroup';

function HomePage() {
    const state = {
        firstSection: {
            title: "Joaquín Montes",
            subtitle: "Software Developer",
        }
    }
    return (
        <div id="homepage">
            <HomeHero {...state.firstSection}/>
            <SkillsContainer />
            <ButtonGroup />
        </div>
    )
}

export default HomePage;