import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';

const Layout = ({children}) => {
    return (
        <div id="layout" className="cover-container bg-warning">
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout;