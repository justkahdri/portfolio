import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import Layout from "./components/layout";
import HomePage from "./pages/homePage";
import ContactPage from "./pages/contactPage";
import ProjectsPage from "./pages/projectsPage";
import BlogPage from "./pages/blogPage";
import NotFound from './pages/notFound';


function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/contact' component={ContactPage} />
                    <Route exact path='/projects' component={ProjectsPage} />
                    <Route exact path='/projects/:projectId' component={undefined} />
                    <Route exact path='/blog' component={BlogPage} />
                    <Route exact path='/blog/:postId' component={undefined} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App;
