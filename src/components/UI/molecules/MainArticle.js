import React from "react";

import StyledButtons from "./StyledButtons";

import './styles/mainarticle.css'

const MainArticle = props => (
    <article id="main--article" className="row bg-light rounded overflow-hidden my-5 shadow offset-lg-4">
        <figure className="col-md-6 px-0 pr-md-2 mb-0">
            <img src={props.image} className="side-image" alt="Project Cover" />
        </figure>
        <div className="col-md-6 text-right py-2">
            <h2 className="m-0">{props.title}</h2>
            <p className="text-muted">{props.subtitle}</p>
            {props.text.map((paragraph, idx) =>
                <p key={idx} className="text-justify">{paragraph}</p>
            )}
            <hr className="d-none my-4 d-lg-block"/>
            <StyledButtons buttons={props.buttons}/>
        </div>
    </article>
);

export default MainArticle;