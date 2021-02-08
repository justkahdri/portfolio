import React from 'react';

import './styles/homehero.css';
import arrow from '../assets/images/down-arrow.png';
import background from '../assets/images/desktop.jpg';

const HomeHero = (props) => {
    return (
        <main id="hero" className="container-fluid text-center bg-light">
                <img className="img-fluid" src={background}/>

                <div className="overlay">
                        <section id="hero--top">
                            <h1>{props.title}</h1>
                            <h3>{props.subtitle}</h3>
                            <p id="about" className="d-none d-md-block">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                            </p>
                        </section>

                        <section id="hero--middle" className="row justify-content-center">
                            <div className="col col-md-4">
                                <button className="btn btn-block btn-primary">Placeholder</button>
                            </div>
                            <div className="col col-md-4">
                                <button className="btn btn-block btn-secondary">Placeholder</button>
                            </div>
                        </section>

                        <figure id="hero--bottom">
                            <img id="arrow" src={arrow} alt="To next section" />
                        </figure>
                </div>
        </main>
    );
}
export default HomeHero;