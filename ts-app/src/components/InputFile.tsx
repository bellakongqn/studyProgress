import React, { InputHTMLAttributes } from 'react'

type InputFileProps =   {
} & InputHTMLAttributes<HTMLInputElement>

export const InputFile = React.forwardRef<HTMLInputElement, InputFileProps>((props, ref) =>{
    return(
        <div className="upload__file">
            <div className="upload__label">
                <img src={require("../img/add-icon.png")} alt="add-icon"/>
            </div>
            <input ref={ref} type="file" accept="image/*" multiple {...props} className="upload__input"/>
        </div>
    )
})
