import React from 'react'

interface InputInterface {
    id: string,
    name: string,
    value: string,
    type: string,
    placeholder: string,
    onChange: (e:any) => void,

    error?:string,
}

function Input(props:InputInterface){
    return(
            <div className="form__group">
                <label htmlFor={props.id} className="form__label">{props.placeholder}:</label>
                <input type={props.type} className="form__input" id={props.id} placeholder={props.placeholder}
                    onChange={props.onChange}/>
                <div className="form__errMsg">
                    {props.error}
                </div>
            </div>
    )
}

export default Input;