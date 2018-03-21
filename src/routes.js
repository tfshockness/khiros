import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
//import { Provider } from 'react-redux';

import App from './App';
import HomePage from './views/home/HomePage';
import AboutPage from './views/about/AboutPage';
import BlogPage from './views/blog/BlogPage';
import newPost from './views/admin/blog/newPost';
import NotFound from './views/common/404';

let isLoggin = false;
const PrivateRoute = ({component: Component, ...rest}) =>(
    <Route {...rest} render={(props) =>(
        isLoggin    ? <Component {...props} />
                    : <Redirect exact to="/" />
    )} />
);

const routers = () => (
    <BrowserRouter>
        <App>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/sobre-a-khiros" component={AboutPage} />
                <Route path="/blog" component={BlogPage} />
                <PrivateRoute path="/admin/new-blog-post" component={newPost} />
                <Route component={NotFound} />
            </Switch>
        </App>
    </BrowserRouter>
);

export default routers