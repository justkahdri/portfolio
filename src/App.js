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
    return (
        <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path='/' component={HomePage} />
                        <Route exact path='/contact' component={ContactPage} />
                        <Route exact path='/projects' component={ProjectsPage} />
                        <Route exact path='/projects/:projectId' component={DetailsPage} />
                        <Route exact path='/blog' component={ComingSoon} />
                        <Route exact path='/blog/:postId' component={ComingSoon} />
                        <Route component={NotFound} />
                    </Switch>
                </Layout>
        </BrowserRouter>
    )
}

export default App;
