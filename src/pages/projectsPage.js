import React from 'react';

import Header from "../components/header";

function ProjectsPage(props) {
    return (
        <div id="contact-page">
            <Header currentPath={props.location.pathname}/>
            <h1>Projects Page</h1>
        </div>
    )
}

export default ProjectsPage;