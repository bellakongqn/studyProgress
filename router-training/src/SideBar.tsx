import React from 'react'
import { Home } from './pages/Home';
import { BrowserRouter as Router, Link, Switch, Route, } from 'react-router-dom';

const routes = [
    {
        path: "/",
        exact: true,
        component: () => <Home />
    },
    {
        path: "/bubblegum",
        component: () => <h2>Bubblegum</h2>
    },
    {
        path: "/shoelaces",
        component: () => <h2>Shoelaces</h2>
    }
];

export const SideBar = () =>{
    return (
        <Router>
            <div style={{ display: "flex" }}>
                <div
                    style={{
                        padding: "10px",
                        width: "40%",
                        background: "#f0f0f0"
                }}
            >
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                        {/* {
                            routes.map((item) =>(
                                <li>
                                    <Link key={item.linkName} to={item.path}></Link>
                                </li>
                            ))
                        } */}
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/bubblegum">Bubblegum</Link>
                        </li>
                        <li>
                            <Link to="/shoelaces">Shoelaces</Link>
                        </li>
                    </ul>
                </div>
        
                <div style={{ flex: 1, padding: "10px" }}>
                    <Switch>
                        {routes.map((route, index) => (
                        // Render more <Route>s with the same paths as
                        // above, but different components this time.
                        <Route
                            key={route.path}
                            path={route.path}
                            exact={route.exact}
                            component={route.component}
                        />
                        ))}
                    </Switch>
                </div>
            </div>
        </Router>
    );
}