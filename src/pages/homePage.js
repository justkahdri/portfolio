import React from 'react';

import HomeHero from '../components/homeHero';
import SkillsContainer from '../components/skillsContainer';
import ButtonGroup from '../components/buttonGroup';

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