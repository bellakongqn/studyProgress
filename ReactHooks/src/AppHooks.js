import React , { useRef } from 'react'
import './App.css'
import useDocumentTitle from './components/Hooks/useDocumentTitle'
import useWindowSize from './components/Hooks/useWindowSize'
import useComponentSize from './components/Hooks/useComponentSize'
import useInputValue from './components/Hooks/useInputValue'
function App() {
  useDocumentTitle("test hooks");
  const windowSize = useWindowSize()
  const ref = useRef(null);
  const componentSize = useComponentSize(ref);
  let name = useInputValue("Jamie");
  console.log(name.value,'name')
  return (
    <>
       <ul>
         <li>useDocumentTitle()</li>
         <li>useWindowSize()-{windowSize.innerWidth}</li>
         <li>useComponentSize()-{componentSize.width}<textArea ref={ref} /></li>
         <li>useInputValue()-<input {...name} /></li>
       </ul>
    </>
  );
}

export default App;
