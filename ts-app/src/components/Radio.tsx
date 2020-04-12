import React, { ChangeEvent } from 'react'

interface RadioInterface{
    id:string,
    name: string,
    label: string,
    value: string,
    checked: boolean,
    onChange:  (e: ChangeEvent<HTMLInputElement>) => void,
}

function Radio( props: RadioInterface){
    return(
        <div className="form__radio--group">
            <input type='radio' className="form__radio-input"
                     value={props.value} id={props.id} 
                     name="toggle" 
                     checked={props.checked}
                     onChange={props.onChange}
            />
            <label htmlFor={props.id} className="form__radio-label">
                {props.label}
            </label>
        </div>
    )
}

export default Radio;