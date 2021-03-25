import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import Layout from "./components/templates/Layout";
import HomePage from "./components/pages/homePage";
import ProjectsPage from "./components/pages/projectsPage";
import DetailsPage from './components/pages/detailsPage';
import ContactPage from './components/pages/contactPage';
import ComingSoon from "./components/pages/comingSoon";
import NotFound from './components/pages/notFound';

function App() {
    // TODO use Hooks (History & useParams)

    const fullUrl = path => {return (process.env.REACT_APP_PUBLIC_URL + path)};
    return (
        <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path={fullUrl('/')} component={HomePage} />
                        <Route exact path={fullUrl('/contact')} component={ContactPage} />
                        <Route exact path={fullUrl('/projects')} component={ProjectsPage} />
                        <Route exact path={fullUrl('/projects/:projectId')} component={DetailsPage} />
                        <Route exact path={fullUrl('/blog')} component={ComingSoon} />
                        <Route exact path={fullUrl('/blog/:postId')} component={ComingSoon} />
                        <Route component={NotFound} />
                    </Switch>
                </Layout>
        </BrowserRouter>
    )
}

export default App;
