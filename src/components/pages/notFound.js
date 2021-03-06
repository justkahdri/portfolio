import React from 'react';

import LandingHero from "../UI/molecules/LandingHero";
import './styles/notfound.css';

function NotFound() {
    const state = {
        title: "This is not the page you are looking for...",
        text: "That's impossible! Perhaps the archives are incomplete.",
        cta: {
            custom: "btn-primary",
            href: "/",
            title: "Move Along (Home)",
        }
    }
    // Coming Soon <a href='https://www.freepik.es/vectores/diseno'>Vector de Diseño creado por stories - www.freepik.es</a>
    return (
        <main id="not-found">
            <LandingHero {...state} />
        </main>
    )
}

export default NotFound;