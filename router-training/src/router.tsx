import React, { CSSProperties } from 'react'
import { BrowserRouter as Router, Link, Switch, Route, NavLink } from 'react-router-dom'
import { ProtectedPage } from './pages/ProtectedPage'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Users } from './pages/Users'
import { Topics } from './pages/Topics'
import { LoginPage } from './pages/Login'
import { AuthRoute } from './pages/AuthRoute'
import { Form } from './pages/Form'
import { NotFound } from './pages/NotFound'

const activeStyle: CSSProperties = {
    color: '#ffa5d8'
}

export const RouterPage = () =>{

    return(
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        {/* <Link to="/about">About</Link> */}
                        {/* <NavLink to="/about" activeClassName="hurray">About</NavLink> */}
                        <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                    <li>
                        <Link to="/topics">Topics</Link>
                    </li>
                    <li>
                        <Link to="/private">private</Link>
                    </li>
                    <li>
                        <Link to="/form">Form</Link>
                    </li>
                </ul>
            </nav>

            <Switch>
                <Route  path="/about"  component={About}/>
                <Route  path="/users" component={Users}/>
                <Route  path="/topics"  component={Topics} />
                <Route path="/login" component={LoginPage} /> 
                <Route path="/form" component={Form} /> 
                <AuthRoute path="/private" component={ProtectedPage}/>
                {/* 
                    A route with path="/" will *always* match
                    the URL because all URLs begin with a /. So that's
                    why we put this one last of all 
                */}
                <Route  path="/" exact  component={Home}/> 
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
    )
    
}