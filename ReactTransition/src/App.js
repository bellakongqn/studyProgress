import React,{useState} from 'react'
import Fade from './Transition/Fade'
import TransitionGroup from './Transition/TransitionGroup'
import { CSSTransition,SwitchTransition} from 'react-transition-group'
import './App.css'

function App() {
    const [inProp, setInProp] = useState(false);
    const [state, setState] = useState(false);
    return (
      <div>
        <Fade  in={inProp} timeout={500} />
        <CSSTransition in={inProp} timeout={200} classNames="my-node">
            <div>
            {"I'll receive my-node-* classes"}
            </div>
        </CSSTransition>
        <TransitionGroup />
        {/* <SwitchTransition>
            <Fade key={state ? "Goodbye, world!" : "Hello, world!"}
            addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
            classNames='fade' >
            <button onClick={() => setState(state => !state)}>
                {state ? "Goodbye, world!" : "Hello, world!"}
            </button>
            </Fade>
        </SwitchTransition> */}
        <button onClick={() => setInProp(true)}>
          Click to Enter
        </button>
      </div>
    );
  }

  export default App;