import React from 'react';

import './styles/sidearticle.css';

const SideArticle = props => (
  <article id="description-container"
    className="align-self-stretch col-12 col-md offset-lg-2 order-md-2 my-4 mb-md-0 py-3 rounded shadow text-md-right text-light">
    <h1>{props.title}</h1>
    <h4 className="pt-4 pl-md-5">{props.content}</h4>
    <h5 className='pt-4'>{props.cta}</h5>
    <h5>{props.salute}</h5>
  </article>
);

export default SideArticle;
