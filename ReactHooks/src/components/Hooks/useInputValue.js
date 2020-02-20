import { useState, useCallback } from "react";

function useInputValue(initialValue){

    const [ value, setValue ] = useState(initialValue)
    let onChange = useCallback(function(event) {
        setValue(event.currentTarget.value);
    }, []);

    // 组件的回调一般不需要销毁监听，而且仅需监听一次
    // 这与 DOM 监听不同，因此大部分场景，我们需要利用 useCallback 包裹
    // 并传一个空数组，来保证永远只监听一次，而且不需要在组件销毁时注销这个 callback。

    return {
        value,
        onChange
    };

}

export default useInputValue;