import React from 'react';
import _ from 'lodash';

import Header from "../UI/organisms/Header";
import ProjectsGallery from "../UI/organisms/projectsGallery";
import ProjectCard from "../UI/molecules/ProjectCard";
import ProjectDetails from "../UI/organisms/projectsDetails";

import projectsList from '../../assets/projects/data.json';

function ProjectsPage(props) {
    const state = {
        gallery: {
            title: "My Personal Projects",

        },
        thumbnail_ctx: require.context('../../assets/projects', true),
        sub_path: props.location.pathname.split('/').slice(-1).pop(),

    }
    return (
        <React.Fragment>
            <Header currentPath={props.location.pathname}/>
            {state.sub_path === "projects" ?
            // RETURNS Main Page
                <main role="main" id="projects--page">
                    <ProjectsGallery {...state.gallery}>
                        {Object.entries(projectsList).map(([name, values], idx) => (
                            <ProjectCard key={idx} id={name} data={values} ctx={state.thumbnail_ctx}/>
                        ))}
                    </ProjectsGallery>
                </main>
            :
            // RETURNS Project Details
                <main role="main" id="details--page">
                    <ProjectDetails content={_.get(projectsList, state.sub_path)} ctx={state.thumbnail_ctx}/>
                </main>}
        </React.Fragment>
    )
}

export default ProjectsPage;