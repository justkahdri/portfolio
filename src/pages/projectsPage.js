import React from 'react';

import Header from "../components/header";
import ProjectsGallery from "../sections/projectsGallery";
import Project from "../components/project";

import projectsList from '../assets/projects/data.json';

function ProjectsPage(props) {
    const state = {
        gallery: {
            title: "My Personal Projects",

        },
        thumbnail_ctx: require.context('../assets/projects'),
    }
    return (
        <React.Fragment>
            <Header currentPath={props.location.pathname}/>
            <main role="main" id="projects-page">
                <ProjectsGallery {...state.gallery}>
                    {Object.entries(projectsList).map(([name, values], idx) => (
                        <Project key={idx} id={name} {...values} ctx={state.thumbnail_ctx}/>
                    ))}
                </ProjectsGallery>
            </main>
        </React.Fragment>
    )
}

export default ProjectsPage;