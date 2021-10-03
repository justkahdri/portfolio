import React from 'react';

import LandingHero from "../UI/molecules/LandingHero";
import './styles/comingsoon.css';

function ComingSoon() {
    const state = {
        title: "Oops! This page is not finished yet!",
        text: "I'm currently working on this! While you wait, would you want to see my projects?",
        text_custom: "col-10 offset-1",
        cta: {
            custom: "btn-primary",
            href: "/projects",
            title: "Portfolio",
        }
    }
    // Coming Soon <a href='https://www.freepik.es/vectores/diseno'>Vector de Diseño creado por stories - www.freepik.es</a>
    return (
        <main id="coming-soon">
            <LandingHero {...state} />
        </main>
    )
}

export default ComingSoon;
