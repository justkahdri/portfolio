import React from 'react';
import {Link, useLocation} from 'react-router-dom';

import './styles/header.css';

const Header = () => {
    const sections = {
        Projects: '/projects',
        Blog: '/blog',
        Contact: '/contact',
    };
    const usePagePath = () => {
        let location = useLocation();
        return location.pathname;
    };
    const getTheme = path => {
      if(path === '/contact' || path.startsWith('/projects/')) {
        return 'navbar-light lighten';
      } else if (path === '/blog') {
        return 'navbar-dark';
      } else {
        return 'navbar-dark opacity';
      }
    }

    // FIXME Use Midnight and make dynamic header
    return (
        <header id="header" className={"navbar navbar-expand-lg fixed-top justify-content-between " + getTheme(usePagePath())}>
            <div />
            <div className="container">
                {usePagePath() === '/' ||
                <Link className="navbar-brand" to={"/"}>
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
                                <Link className="nav-link" to={route}>{section}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
