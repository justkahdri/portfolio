import React from 'react';

import StyledButtons from "./StyledButtons";
import CenteredTitle from "../atoms/CenteredTitle";

import './styles/landinghero.css';

const LandingHero = props => (
    <section id="landing--hero" className="container-fluid text-light">
        <article className="container py-5 justify-content-center">
            <CenteredTitle title={props.title}/>
            <div className="row py-5">
                <div className={props.text_custom}>
                    <h4 className="text-center">{props.text}</h4>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-8 offset-2">
                    <StyledButtons buttons={[props.cta]}/>
                </div>
            </div>
        </article>
    </section>
);

export default LandingHero;