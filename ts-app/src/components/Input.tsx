import React, { InputHTMLAttributes } from 'react'

type InputProps = {
    error?:string,
} & InputHTMLAttributes<HTMLInputElement>

function Input(props:InputProps){
    return(
            <div className="form__group">
                <label htmlFor={props.id} className="form__label">{props.placeholder}:</label>
                <input {...props} className={"form__input" + (props.className ? ` ${props.className}` : '')}/>
                <div className="form__errMsg">
                    {props.error}
                </div>
            </div>
    )
}

export default Input;