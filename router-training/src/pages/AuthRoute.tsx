import React, { useMemo } from "react"
import { RouteProps, Redirect, Route } from "react-router-dom"

export const AuthRoute = (props: RouteProps) => {
    const token = useMemo(() => localStorage.getItem('token'), [])
    if(!token) {
        return <Redirect to="/login" />
    } else {
        return <Route {...props} />
    }
}