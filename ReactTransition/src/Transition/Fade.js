import React from 'react'
import { Transition } from 'react-transition-group';

const duration = 3000;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

// const classMap = {
//   entering: 'fade-transition-entering',
//   entered: 'fade-transition-entered',
//   exiting: 'fade-transition-exiting', 
//   exited: 'fade-transition-exited',
// }


const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};

const Fade = ({ in: inProp }) => (
  <Transition in={inProp} timeout={duration}>
    {state => (
      <div 
        // className={classMap[state]}
        style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
        I'm a fade Transition!
      </div>
    )}
  </Transition>
);

export default Fade;