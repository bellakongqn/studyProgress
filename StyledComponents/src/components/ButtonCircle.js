import styled from 'styled-components'

const ButtonCircle = styled.button`
    border: 1px solid steelblue;
    outline: none;
    cursor: pointer;
    color: steelblue;
    text-align: center;
    padding: 0.2em;
    width: 100px;
    display: block;
    transition: 0.3s ease-in;

    height: ${ props=> props.circle ? "100px" : '30px'};
    border-radius: ${props => props.circle?  '50%' : '2px'};

    &:hover{
        height: 100px;
        width: 100px;
        border-radius: 50px;
        transition: 0.3s ease-in;
    }

    & > .header {
        color: white;
    }


`

export default ButtonCircle