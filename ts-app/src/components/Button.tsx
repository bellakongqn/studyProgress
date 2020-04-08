import React from 'react'

interface ButtonInterface {
    handleSubmit?: (e: any) => Promise<void>,
    type: "button" | "submit" | "reset" | undefined,
    children: string,
    className?: string,
}

function Button(props: ButtonInterface){
    return(
        <button type={props.type} className={`btn ${props.className}`} onClick={props.handleSubmit}>
            {props.children}
        </button>
    )
}

export default Button;