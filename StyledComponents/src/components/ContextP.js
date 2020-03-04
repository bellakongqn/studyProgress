import React ,{ useContext } from 'react'
import { ThemeContext } from 'styled-components'


function NormaiP(){
    const themeContext = useContext(ThemeContext);
    console.log('Current theme: ', themeContext)

    return(
        <div>
            <p style={{color:themeContext.fg}}>dmvjsdfvdjf</p>
        </div>
    )
}


export default NormaiP;