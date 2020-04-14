import React, { InputHTMLAttributes } from 'react'

type InputFileProps =   {
} & InputHTMLAttributes<HTMLInputElement>

export const InputFile = (props:InputFileProps) =>{
    return(
        <div className="upload__file">
            <div className="upload__label">
                <img src={require("../img/add-icon.png")} alt="add-icon"/>
            </div>
            <input type="file" accept="image/*" multiple {...props} className="upload__input"/>
        </div>
    )
}
