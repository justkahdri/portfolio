import React from "react";

const ArticleListing = props => (
    <article className="row my-5">
        <div className="col col-md-8 col-lg-6 bg-light rounded shadow overflow-hidden text-justify">
            <h2 className="row py-2 px-3 bg-warning">{props.title}</h2>
            {props.text.map((paragraph, idx) => <p key={idx}>{paragraph}</p>)}
            <ul>
                {props.list.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
        </div>
    </article>
);

export default ArticleListing;