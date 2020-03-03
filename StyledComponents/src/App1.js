import React from 'react'
import { ThemeProvider} from 'styled-components'
import Title from './components/Title'
import Wrapper from './components/Wrapper'
import {Button, TomatoButton} from './components/Button'
import Input from './components/Input'
import Thing from './components/Thing'
import Rotate from './components/Rotate'

const ReversedButton = props => <Button {...props} children={props.children.split('').reverse()} />
const theme = {
    fg: "palevioletred",
    bg: "white"
};

const invertTheme = ({ fg, bg }) => ({
    fg: bg,
    bg: fg
});
  

function App(){
    return(
        <div>
            <Wrapper>
                <Title>
                    Hello World!
                </Title>
            </Wrapper>
            <Button>Normal</Button>
            <ThemeProvider theme={theme}>
                <div>
                <Button>Default Theme</Button>
                <ThemeProvider theme={invertTheme}>
                    <Button>Inverted Theme</Button>
                </ThemeProvider>
                </div>
            </ThemeProvider>
            <Button primary>Primary</Button>
            <Button as={ReversedButton}>Custom Button with Normal Button styles</Button>
            <TomatoButton as="a" href="/">Tomato Button</TomatoButton>
            <Input defaultValue="@probablyup" type="text" />
            <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />
            <Thing>Hello world!</Thing>

            <Thing>How ya doing?</Thing>

            <Thing className="something">The sun is shining...</Thing>

            <div>Pretty nice day today.</div>

            <Thing>Don't you think?</Thing>

            <div className="something-else">
                <Thing>Splendid.</Thing>
            </div>
            <Input placeholder="A small text input" />
            <br />
            <Input placeholder="A bigger text input" size="2em" />

            <Rotate>&lt; 💅 &gt;</Rotate>

        </div>
    )
}

export default App;