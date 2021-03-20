import React from "react";

import './styles/centeredtitle.css';

const CenteredTitle = ({title, custom}) => (
    <article id="centered--title" className={"row text-center my-5 py-2 " + custom}>
        <h1 className="col">{title}</h1>
    </article>
);

export default CenteredTitle;