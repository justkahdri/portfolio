import React from 'react';

import './styles/skillsContainer.css';
import skillsList from '../assets/badges/data.json';

const SkillsContainer = (props) => {
    const skillContext = require.context('../assets/badges');

    return (
        <div id="skills" className="container py-5">
            <h2>{props.title}</h2>
            <section id="skills-gallery" className="text-center">
                <div className="row">
                    {Object.entries(skillsList).map(([name, path], idx) => (
                        <div key={idx} className="col-6 col-md-4 col-lg-2">
                            <div className="badge container">
                                <img width="140" height="140"
                                     src={skillContext(path).default} alt={name} />
                                <h5>{name}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default SkillsContainer;