import React, { InputHTMLAttributes } from 'react'

type InputFileProps =   {
} & InputHTMLAttributes<HTMLInputElement>

export const InputFile = (props:InputFileProps) =>{
    return(
        <div>
            <input type="file" accept="image/*" multiple {...props}/>
        </div>
    )
}
