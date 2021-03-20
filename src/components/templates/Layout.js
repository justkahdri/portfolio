import React from 'react';

import Header from '../UI/organisms/Header';
import Footer from '../UI/organisms/Footer';

const Layout = ({children}) => {
    return (
        <div id="layout" className="cover-container bg-light">
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout;