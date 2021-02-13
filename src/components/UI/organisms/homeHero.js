import React from 'react';
import { Link } from 'react-router-dom';

import './styles/homehero.css';
import background from '../../../assets/images/studio.jpg';

import ArrowAnimated from '../atoms/ArrowAnimated';
import StyledButtons from "../molecules/StyledButtons";

const HomeHero = (props) => {
    const middle_buttons = [
        {
            name: "Contact",
            importance: "btn-outline-light",
            to_path: "/contact"
        },
        {
            name: "View Projects",
            importance: "btn-primary",
            to_path: "/projects"
        }
    ];

    return (
        <section id="hero" className="container-fluid text-center bg-light">
            <img className="bg-cover" src={background} alt="Hero Background"/>

            <div className="overlay">
                <article id="hero--top">
                    <h3>{props.subtitle}</h3>
                    <h1>{props.title}</h1>
                    <p id="about" className="d-none d-md-block">{props.description}</p>
                </article>

                <StyledButtons buttons={middle_buttons} custom={"col-md-4"}/>

                <div id="hero--bottom">
                    <a href="#skills">
                        <ArrowAnimated />
                    </a>
                </div>
            </div>
        </section>
    );
}
export default HomeHero;