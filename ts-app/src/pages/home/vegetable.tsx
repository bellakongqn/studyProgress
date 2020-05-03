import React from "react"
import { useParams } from "react-router-dom"
import { useDebounceFn } from "../../hooks/useDebounce"

// :kind
export const Vegetable = () => {
    const { kind } = useParams()
    const alertMe = useDebounceFn(() => {
        alert('时间到')
    }, 100)
    return (
        <div>
            <h3 style={{fontSize: '30px'}}>这是你要的蔬菜：{kind}</h3>
            <button onClick={alertMe}>1s 后提醒我</button>
        </div>
    )
}