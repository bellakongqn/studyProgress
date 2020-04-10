import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

interface Props{
    activeOnlyWhenExact:boolean,
    to: string,
    label: string,
}

export const CustomLink = (props:Props) =>{
    let match = useRouteMatch({
        path: props.to,
        exact: props.activeOnlyWhenExact,
    });
    console.log(match,'safvsf')
    
    return(
        <div className={match ? "active" : ""}>
            {match && "> "}
            <Link to={props.to}>{props.label}</Link>
        </div>
    )
}