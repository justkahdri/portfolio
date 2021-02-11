import React from 'react';
import { Link } from 'react-router-dom';

import './styles/homehero.css';
import background from '../assets/images/studio.jpg';

import Arrow from '../components/arrowAnimation';

const HomeHero = (props) => {
    const cta = {
        default_style: "btn btn-large hvr-outline-out btn-block ",
        buttons: [
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
        ]

    }
    return (
        <section id="hero" className="container-fluid text-center bg-light">
            <img className="bg-cover" src={background} alt="Hero Background"/>

            <div className="overlay">
                    <article id="hero--top">
                        <h3>{props.subtitle}</h3>
                        <h1>{props.title}</h1>
                        <p id="about" className="d-none d-md-block">{props.description}</p>
                    </article>

                    <article id="hero--middle" className="row justify-content-center">
                        {cta.buttons.map(btn => (
                            <div key={btn.name} className="col col-md-4">
                                <Link to={btn.to_path} className="no-underline">
                                    <button className={cta.default_style + btn.importance}>{btn.name}</button>
                                </Link>
                            </div>
                            ))}
                    </article>

                    <div id="hero--bottom">
                        <a href="#skills">
                            <Arrow />
                        </a>
                    </div>
                </div>
        </section>
    );
}
export default HomeHero;