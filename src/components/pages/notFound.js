import React from 'react';

import not_found from '../../assets/images/404.svg';
import Attributions from "../UI/atoms/Attributions";

function NotFound() {
    return (
        <div className="container-fluid">
            <img src={not_found} alt="404: Page Not Found"/>
            <Attributions content={[["Illustration by Freepik Storyset", "https://storyset.com/web"]]}/>
        </div>
    )
}

export default NotFound;