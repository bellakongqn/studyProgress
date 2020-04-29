import { useEffect } from "react"

export const useDebounce = (fn:()=>void, ms:number) =>{

    useEffect(()=>{
        const handler = setTimeout(() => {
            fn();
        }, ms);
        return () => {
            clearTimeout(handler);
        };
    },[fn, ms])
}
