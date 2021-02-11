import React from 'react';

import './styles/skillsContainer.css';

const SkillsContainer = (props) => (
        <section id="skills" className="container py-5">
            <h2>{props.title}</h2>
            <article id="skills-gallery" className="text-center">
                <div className="row">
                    {props.children}
                </div>
            </article>
        </section>
);

export default SkillsContainer;