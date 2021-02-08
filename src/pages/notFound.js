import React from 'react';
import not_found from '../assets/images/404.svg';

function NotFound() {
    return (
        <React.Fragment>
            <img src={not_found} alt="404: Page Not Found"/>
            <a href="https://storyset.com/web">Illustration by Freepik Storyset</a>
        </React.Fragment>
    )
}

export default NotFound;