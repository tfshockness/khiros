import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import { Provider } from 'react-redux';

import App from './App';
import HomePage from '.views/home/HomePage';
import AboutPage from '.views/about/AboutPage';
import BlogPage from '.views/blog/BlogPage';

const routers = () => (
    <BrowserRouter>
        <App>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/sobre-a-khiros" component={AboutPage} />
                <Route patch="/blog" component={BlogPage} /> 
            </Switch>
        </App>
    </BrowserRouter>
);

export default routers