import React from 'react';

import './styles/projectsgallery.css';

const ProjectsGallery = (props) => {
    return (
        <section id="projects--gallery" className="container-fluid">
            <article id="gallery--title" className="row py-2 my-5 justify-content-center">
                <h1 className="text-center text-light">{props.title}</h1>
            </article>
            <article id="gallery--container" className="container">
                <div className="row">
                    {props.children}
                </div>
            </article>
        </section>
    );
}

export default ProjectsGallery;