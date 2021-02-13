import React from 'react';

import CenteredTitle from "../atoms/CenteredTitle";

import './styles/projectsgallery.css';

const ProjectsGallery = (props) => {
    return (
        <section id="projects--gallery" className="container-fluid">
            <CenteredTitle title={props.title} custom="text-light py-2" />
            <article id="gallery--container" className="container">
                <div className="row">
                    {props.children}
                </div>
            </article>
        </section>
    );
}

export default ProjectsGallery;