import React from "react";

import StyledButtons from "./StyledButtons";

const MainArticle = props => (
    <article id="main--article" className="row">
        <figure className="col-6">
            <img src={props.image} className="img-fluid" alt="Project Cover" />
        </figure>
        <div className="col-6 text-right">
            <h2>{props.title}</h2>
            <p className="text-muted">{props.subtitle}</p>
            {props.text.map((paragraph, idx) =>
                <p key={idx} className="text-justify">{paragraph}</p>
            )}
            <StyledButtons buttons={props.buttons}/>
        </div>
    </article>
);

export default MainArticle;