import React, { useMemo } from 'react';
import { RouteProps, Redirect, Route } from 'react-router-dom';

/**
 * 授权路由，需要token才能访问
 * @param props RouteProps
 */
export const AuthRoute = (props: RouteProps) => {
    const token = useMemo(() => localStorage.getItem('token'), [])
    if(!token) {
        return <Redirect to="/login" />
    } else {
        return <Route {...props} />
    }
}