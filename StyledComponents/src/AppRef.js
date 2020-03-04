import React, { useRef } from 'react'
import InputRef from './components/InputRef'

function AppRef(){
    const inputRef = useRef(null)
    return(
        <div>
            <InputRef ref={inputRef}
                    placeholder="Hover to focus!"
                    onMouseEnter={() => {
                        inputRef.current.focus()
                    }}
            />
        </div>
    )
}

export default AppRef;