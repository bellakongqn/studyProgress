import React from 'react'

interface RadioInterface{
    id:string,
    name: string,
    label: string,
    value: string,
    defaultChecked?:boolean
    onChange:  (e:any) => void,
}

function Radio( props: RadioInterface){
    return(
        <div className="form__radio--group">
            <input type='radio' className="form__radio-input" value={props.value} id={props.id} name="toggle" defaultChecked={props.defaultChecked}/>
            <label htmlFor={props.id} className="form__radio-label">
                {props.label}
            </label>
        </div>
    )
}

export default Radio;