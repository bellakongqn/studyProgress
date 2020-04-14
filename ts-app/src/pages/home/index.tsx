import React, { CSSProperties } from 'react'
import { NavLink, Switch, Route, useHistory } from 'react-router-dom'
import { Fruit } from './fruits'
import { Vegetable } from './vegetable'
import { MemoCallbackTest } from './useMemo&useCallback'
import { UploadPage } from './uploadPage'

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
        <div className="home">
            <h2>Welcome Homepage!</h2>
            <button onClick={loginOut}>登出</button>
            <div className="home__main">
                <nav className="home__nav">
                    <NavLink activeStyle={activeStyle} style={{marginLeft: 15, color: '#92ddea'}} to="/home/fruit">fruit</NavLink>
                    <NavLink activeStyle={activeStyle} style={{marginLeft: 15, color: '#92ddea'}} to="/home/vegetable/🥬">vegetable</NavLink>
                    <NavLink activeStyle={activeStyle} style={{marginLeft: 15, color: '#92ddea'}} to="/home/useHooks">useMemo & useCallback</NavLink>
                    <NavLink activeStyle={activeStyle} style={{marginLeft: 15, color: '#92ddea'}} to="/home/upload">upload</NavLink>
                </nav>

                <div className="home__content">
                    <Switch>
                        <Route path="/home/fruit" component={Fruit} />
                        <Route path="/home/vegetable/:kind" component={Vegetable} />
                        <Route path="/home/useHooks" component={MemoCallbackTest} />
                        <Route path="/home/upload" component={UploadPage} />
                    </Switch>
                </div>
            </div>
            

        </div>
    )
}