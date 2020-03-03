import styled from 'styled-components'

const Input = styled.input.attrs(props => ({
    type: "password",
    size: props.size || "1em",
  }))`
    margin: ${props => props.size};
    padding: ${props => props.size};
    color:${props=> props.inputColor || "palevioletred"};
    background: papayawhip;
    border: none;
    border-radius: 3px;
`

export default Input;