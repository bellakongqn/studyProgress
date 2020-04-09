import React, { CSSProperties } from 'react'
import { NavLink, Switch, Route } from 'react-router-dom'
import { Fruit } from './fruits'
import { Vegetable } from './vegetable'

const activeStyle: CSSProperties = {
    color: '#ffa5d8'
}

export const HomePage = () => {


    return (
        <div style={{width: '70vw', margin: '20px auto 0'}}>
            <h2>Welcome Homepage!</h2>
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