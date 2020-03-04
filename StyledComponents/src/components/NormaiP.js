import React from 'react'
import { withTheme } from 'styled-components'


function NormaiP(props){
    return(
        <div>
            <p style={{color:props.theme.fg}}>dmvjsdfvdjf</p>
        </div>
    )
}


export default withTheme(NormaiP)