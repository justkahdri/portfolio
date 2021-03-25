import React from 'react';
import {Link, useLocation} from 'react-router-dom';

import './styles/header.css';

const Header = () => {
    const sections = {
        Projects: '/portfolio/projects',
        Blog: '/portfolio/blog',
        Contact: '/portfolio/contact',
    };
    const usePagePath = () => {
        let location = useLocation();
        return location.pathname;
    };
    const getTheme = path => {
      if(path === '/portfolio/contact' || path.startsWith('/portfolio/projects/')) {
        return 'navbar-light lighten';
      } else if (path === '/portfolio/blog') {
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
                {usePagePath() === '/portfolio/' ||
                <Link className="navbar-brand" to={process.env.REACT_APP_PUBLIC_URL + "/"}>
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
