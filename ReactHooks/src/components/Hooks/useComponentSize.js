import { useState, useLayoutEffect } from "react";

function getSize(el) {
    if (!el) {
      return {};
    }
  
    return {
      width: el.offsetWidth,
      height: el.offsetHeight
    };
}

function useComponentSize (ref){
    const [ componentSize, setComponentSize ] = useState(getSize(ref.current));

    function handleResize(){
        if(ref && ref.current){
            setComponentSize(getSize(ref.current))
        }
    }

    useLayoutEffect(()=>{
        let resizeObserver = new ResizeObserver(() => handleResize());
        resizeObserver.observe(ref.current);
        return () => {
            resizeObserver.disconnect(ref.current);
            resizeObserver = null;
        };
    },[])

    return componentSize;
}

export default useComponentSize;