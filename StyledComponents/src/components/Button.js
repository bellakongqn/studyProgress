import styled from 'styled-components'

const Button = styled.button`
    color: ${props => props.theme.fg};
    border: 2px solid ${props => props.theme.fg};
    background: ${props => props.theme.bg};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
    outline: none;
    cursor: pointer;
`

Button.defaultProps = {
  theme: {
    fg: "palevioletred",
    bg: "white"
  }
}

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

export  {Button,TomatoButton};