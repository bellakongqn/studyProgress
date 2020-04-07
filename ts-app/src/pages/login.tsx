import React, { useState, useCallback, useMemo } from 'react'
import { get } from '../http'
import { useHistory } from 'react-router-dom'

interface submitResponse {
    status: number,
    code: number,
    data: string
}

function Login(){

    const [toggle, setToggle] = useState<boolean>(true)
    const [username , setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const history = useHistory()

    const params = useMemo(() => ({
        username,
        password,
    }), [username, password])

    const handleSubmit = useCallback(async (e:any) =>{
        e.preventDefault();
        const res = await get<submitResponse>('/signUp', params)
        console.log(res)
        window.localStorage.setItem('token',res.data)

        history.push('/home')

    }, [history, params])

    return(
        <div className="login">
            <div className="login__content">
                <form className="form">
                    <div className="form__group u-margin-bottom-small">
                        <div className="form__radio--group">
                            <input type='radio' className="form__radio-input" id="loginIn" name="toggle" checked={toggle} onChange={()=>setToggle(true)}/>
                            <label htmlFor="loginIn" className="form__radio-label">
                                Login In
                            </label>
                        </div>

                        <div className="form__radio--group">
                            <input type='radio' className="form__radio-input" id="SignUp" name="toggle" checked={!toggle} onChange={()=>setToggle(false)}/>
                            <label htmlFor="SignUp" className="form__radio-label">
                                Sign Up
                            </label>
                        </div>
                    </div>

                    <div className="form__group">
                        <input type="text" className="form__input" id="userName" placeholder="your name" required
                            onChange={(e)=>setUsername(e.target.value)}/>
                        <label htmlFor="userName" className="form__label">Your Name</label>
                    </div>

                    <div className="form__group">
                        <input type="password" className="form__input" id="password" placeholder="your password" required
                            onChange={(e)=>setPassword(e.target.value)}/>
                        <label htmlFor="password" className="form__label">Your Password</label>
                    </div>

                    <button type="submit" className="btn btn--green u-margin-top-small" onClick={handleSubmit}>Submit &rarr;</button>

                </form>
            </div>
        </div>
    )
}

export default Login;