import { useCallback, useRef } from "react"



export const useDebounceFn = (fn:()=>void, ms:number): () => void =>{
    const timeoutId = useRef<null | number>(null)

    const debouncedFn = useCallback(() => {
        if (timeoutId.current !== null) {
            clearTimeout(timeoutId.current)
        }

        timeoutId.current = window.setTimeout(() => {
            fn();
            timeoutId.current = null
        }, ms)
    }, [fn, ms])


    return debouncedFn
}
