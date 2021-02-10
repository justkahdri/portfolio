import React from 'react';

import Header from "../components/header";

function BlogPage(props) {
    return (
        <div id="contact-page">
            <Header currentPath={props.location.pathname}/>
            <h1>Blog Page</h1>
        </div>
    )
}

export default BlogPage;