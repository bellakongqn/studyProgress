import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Button} from './components/Theming'
import NormaiP from './components/NormaiP'
import ContextP from './components/ContextP'

const theme = {
    fg: "palevioletred",
    bg: "white"
};

const invertTheme  = ({ fg, bg }) => ({
    fg: bg,
    bg: fg,
})

function AppTheming (){
    return(
        <div>
            <ThemeProvider theme={theme}>
                <ContextP />
                <NormaiP />
                <Button>Theming</Button>
                <ThemeProvider theme={invertTheme}>
                    <Button>invertTheme</Button>
                </ThemeProvider>
            </ThemeProvider>
            <Button theme={{ fg: "royalblue" }}>Simple</Button>
        </div>
    )
}

export default AppTheming ;