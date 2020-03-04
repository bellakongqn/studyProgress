import React from 'react'
import Div from './components/Div'
import Complex from './components/Complex'
import { Box , PropsBox} from './components/Box'
import './components/Div.css'

function ExistingCss(){
    return(
        <div>
            <Div className="red-bg">smhgdksr</Div>
            <Complex />
            <Box />
            <PropsBox background="blue" />
        </div>
    )
}

export default ExistingCss;