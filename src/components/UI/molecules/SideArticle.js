import React from 'react';

import './styles/sidearticle.css';

const SideArticle = props => (
  <article id="description-container"
    className="align-self-stretch col-12 col-md offset-lg-2 order-md-2 my-4 mb-md-0 py-3 rounded shadow text-md-right text-light">
    <h1>Get in Touch</h1>
    <h4 className="pt-4 pl-md-5">Maybe your're looking for a profile like mine, or perhaps something you saw here caught your attention...</h4>
    <h5 className='pt-4'>Let me know!</h5>
    <h5>I'd love to hear from you.</h5>
  </article>
);

export default SideArticle;
