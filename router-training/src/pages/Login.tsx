import React from "react";
import { useHistory } from "react-router-dom";

export const LoginPage = () =>{
    let history = useHistory()

    const login = () =>{
        window.localStorage.setItem('token', 'savcfd')
        history.push('/private')
    }

    return (
        <div>
            <button onClick={login}>Log in</button>
        </div>
    );
}