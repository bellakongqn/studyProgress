import React from "react"
import { useParams } from "react-router-dom"

// :kind
export const Vegetable = () => {
    const { kind } = useParams()
    return (
        <div>
            <h3 style={{fontSize: '30px'}}>这是你要的蔬菜：{kind}</h3>
        </div>
    )
}