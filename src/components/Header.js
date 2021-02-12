import React from 'react';
import {Link} from 'react-router-dom';

const Header = ({currentPath}) => {
    const sections = {
        Projects: '/projects',
        Blog: '/blog',
        Contact: '/contact',
    };

    return (
        <header id="header" className="navbar navbar-expand-lg navbar-dark fixed-top justify-content-between">
            <div />
            <div className="container">
                {currentPath === '/' ||
                <Link className="navbar-brand" to="/">
                    Joaquín Montes
                </Link>
                }
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        {Object.entries(sections).map(([section, route]) => (
                            <li key={section} className="nav-item">
                                <a className="nav-link" href={route}>{section}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;