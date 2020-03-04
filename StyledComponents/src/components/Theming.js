import styled from 'styled-components'

const Button = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;

    color: ${ props => props.theme.fg};
    background: ${props => props.theme.bg};
    border: 1px solid ${ props => props.theme.fg};
`

Button.defaultProps = {
    theme: {
        main: 'palevioletred',
    }
}

export {Button} ;