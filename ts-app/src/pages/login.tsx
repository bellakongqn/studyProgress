import React, { useState } from 'react'
import { put } from '../http'

interface submitResponse {
    status: Number,
    code: Number,
    data?: string
}

function Login(){

    const [toggle, setToggle] = useState<boolean>(true)

    const handleSubmit = async () =>{
        let res:submitResponse
        if( toggle ){
            res = await put('/loginIn','111')
        }else{
            res = await put('/signUp','111')
        }

        res.code === 200 ? console.log('成功'):console.log('失败')

    }

    return(
        <div className="login">
            <div className="login__content">
                <form action="#" className="form">
                    <div className="form__group u-margin-bottom-small">
                        <div className="form__radio--group">
                            <input type='radio' className="form__radio-input" id="loginIn" name="toggle" checked={toggle} onClick={()=>setToggle(true)}/>
                            <label htmlFor="loginIn" className="form__radio-label">
                                Login In
                            </label>
                        </div>

                        <div className="form__radio--group">
                            <input type='radio' className="form__radio-input" id="SignUp" name="toggle" checked={!toggle} onClick={()=>setToggle(false)}/>
                            <label htmlFor="SignUp" className="form__radio-label">
                                Sign Up
                            </label>
                        </div>
                    </div>

                    <div className="form__group">
                        <input type="text" className="form__input" id="userName" placeholder="your name" required/>
                        <label htmlFor="userName" className="form__label">Your Name</label>
                    </div>

                    <div className="form__group">
                        <input type="password" className="form__input" id="password" placeholder="your password" required/>
                        <label htmlFor="password" className="form__label">Your Password</label>
                    </div>

                    <button className="btn btn--green u-margin-top-small" onClick={handleSubmit}>Submit &rarr;</button>

                </form>
            </div>
        </div>
    )
}

export default Login;