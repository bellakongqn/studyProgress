import React from 'react';
import Login from './pages/login'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const Home = () =>{
    return(
        <div>Scsdc</div>
    )
}


const BasicRoute = () => (
    <>
    <BrowserRouter>
        
        <Switch>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/login" component={Login}/>
        </Switch>
        
    </BrowserRouter>
    </>
);


export default BasicRoute;