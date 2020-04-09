import React from 'react';
import Login from './pages/login'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import { AuthRoute } from './components/AuthRoute';
import { NotFoundPage } from './pages/notFound';
import { HomePage } from './pages/home';

const BasicRoute = () => (
    <>
    <BrowserRouter>
        
        <Switch>
            <Route path="/" exact component={() => <Redirect to="/home" />} />
            <AuthRoute path="/home" component={HomePage}/>
            <Route exact path="/login" component={Login}/>
            <Route path="*" component={NotFoundPage} />
        </Switch>
        
    </BrowserRouter>
    </>
);


export default BasicRoute;