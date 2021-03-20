import React from 'react';

import logo from '../../../assets/images/logo.png';
import './styles/loader.css';

const Loader = () => (
    <div className="container-fluid align-content-center align-items-center" id="loader">
        <div className="row align-items-center justify-content-center h-100">
            <img className="loader--logo blink" src={logo} alt="Justkahdri Logo" />
        </div>
    </div>
);

export default Loader;
