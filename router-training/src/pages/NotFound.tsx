import React from 'react'
import { useLocation } from 'react-router-dom';

export const NotFound = () =>{
    let location = useLocation();
    
    return(
    <div>404 {location.pathname}</div>
    )
}