import React from "react";
import { useRouteMatch, Link, Switch, Route } from "react-router-dom";
import { Topic } from "./Topic";

/* useRouteMatch()
        path: "/topics"
        url: "/topics"
        isExact: true
        params: {}
*/

export const Topics = () =>{
    const { path, url } = useRouteMatch();
    return (
        <>
            <div>Topics</div>
            <ul>
                <li>
                    <Link to={`${url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${url}/props-v-state`}> Props v. State </Link>
                </li>
            </ul>
            <Switch>
                <Route path={`${path}/:topicId`}  component={Topic}/> 
                <Route path={path}>
                    <h3>Please select a topic.</h3>
                </Route>
            </Switch>
        </>
    )
}