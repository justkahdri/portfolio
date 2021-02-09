import React from 'react';

import './styles/homehero.css';
import background from '../assets/images/studio.jpg';

import Arrow from '../components/arrowAnimation';

const HomeHero = (props) => {
    return (
        <main id="hero" className="container-fluid text-center bg-light">
                <img className="img-fluid" src={background} alt="Hero Background"/>

                <div className="overlay">
                        <section id="hero--top">
                            <h1>{props.title}</h1>
                            <h3>{props.subtitle}</h3>
                            <p id="about" className="d-none d-md-block">
                                I'm a self-taught Software Engineer looking for a job where I can collaborate
                                within a team as a Junior Developer. My main objective is to accelerate my
                                learning path across technology.
                            </p>
                        </section>

                        <section id="hero--middle" className="row justify-content-center">
                            <div className="col col-md-4">
                                <button className="btn hvr-outline-out btn-block btn-secondary">Contact</button>
                            </div>
                            <div className="col col-md-4">
                                <button className="btn hvr-outline-out btn-block btn-primary">View Projects</button>
                            </div>
                        </section>


                        <section id="hero--bottom">
                            <a href="#skills">
                                <Arrow />
                            </a>
                        </section>
                </div>
        </main>
    );
}
export default HomeHero;