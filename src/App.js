import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import Layout from "./components/templates/Layout";
import HomePage from "./components/pages/homePage";
import ContactPage from "./components/pages/contactPage";
import ProjectsPage from "./components/pages/projectsPage";
import DetailsPage from './components/pages/detailsPage';
import BlogPage from "./components/pages/blogPage";
import NotFound from './components/pages/notFound';

function App() {
    // TODO use Hooks (History & useParams)
    return (
        <BrowserRouter>
            <React.Suspense fallback={'Loading...'}>
                <Layout>
                    <Switch>
                        <Route exact path='/' component={HomePage} />
                        <Route exact path='/contact' component={ContactPage} />
                        <Route exact path='/projects' component={ProjectsPage} />
                        <Route exact path='/projects/:projectId' component={DetailsPage} />
                        <Route exact path='/blog' component={BlogPage} />
                        <Route exact path='/blog/:postId' component={undefined} />
                        <Route component={NotFound} />
                    </Switch>
                </Layout>
            </React.Suspense>
        </BrowserRouter>
    )
}

export default App;
