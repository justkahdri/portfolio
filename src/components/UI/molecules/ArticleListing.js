import React from "react";

const ArticleListing = props => (
    <article className="row">
        <div className="col-8">
            <h2>{props.title}</h2>
            {props.text.map((paragraph, idx) => <p key={idx}>{paragraph}</p>)}
            <ul>
                {props.list.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
        </div>
    </article>
);

export default ArticleListing;