import styled from 'styled-components'

const Box = styled.div({
    background: 'palevioletred',
    height: '50px',
    width: '50px'
});
  
// Adapting based on props
const PropsBox = styled.div(props => ({
    background: props.background,
    height: '50px',
    width: '50px'
}));

export { Box, PropsBox};