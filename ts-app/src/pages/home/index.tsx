import React, { CSSProperties } from 'react'
import { NavLink, Switch, Route, useHistory } from 'react-router-dom'
import { Fruit } from './fruits'
import { Vegetable } from './vegetable'

const activeStyle: CSSProperties = {
    color: '#ffa5d8'
}

export const HomePage = () => {

    const history = useHistory()

    const loginOut = () =>{
        window.localStorage.removeItem('token')
        history.push('/login')
    }

    return (
        <div style={{width: '80vw', margin: '20px auto 0'}}>
            <h2>Welcome Homepage!</h2>
            <button onClick={loginOut}>登出</button>
            <nav>
                <NavLink activeStyle={activeStyle} style={{marginLeft: 15, color: '#92ddea'}} to="/home/fruit">fruit</NavLink>
                <NavLink activeStyle={activeStyle} style={{marginLeft: 15, color: '#92ddea'}} to="/home/vegetable/🥬">vegetable</NavLink>
            </nav>

            <div style={{border: '2px solid green', padding: 20}}>
                <Switch>
                    <Route path="/home/fruit" component={Fruit} />
                    <Route path="/home/vegetable/:kind" component={Vegetable} />
                </Switch>
            </div>

        </div>
    )
}