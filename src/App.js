import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import Layout from "./components/layout";
import HomePage from "./pages/homePage";
import NotFound from './pages/notFound';


function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/contact' component={undefined} />
                    <Route exact path='/projects' component={undefined} />
                    <Route exact path='/projects/:projectId' component={undefined} />
                    <Route exact path='/blog' component={undefined} />
                    <Route exact path='/blog/:postId' component={undefined} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App;
