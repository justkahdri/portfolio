import React from 'react';

import Footer from '../components/footer';

const Layout = ({children}) => {
    return (
        <div id="layout" className="cover-container bg-light">
            {children}
            <Footer />
        </div>
    )
}

export default Layout;