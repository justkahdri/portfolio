import React from 'react';

import Header from "../components/header";

function ContactPage(props) {
    return (
        <div id="contact-page">
            <Header currentPath={props.location.pathname}/>
            <h1>Contact Page</h1>
        </div>
    )
}

export default ContactPage;