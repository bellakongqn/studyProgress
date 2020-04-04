import React, { useState } from 'react'
import {get, post} from './http'

export default function App(){
    const [list, setList] = useState([])
    const [msg, setMsg] = useState(null)
    const params = {
        id: 1,
        name:'haha'
    }
    const getData = async () =>{
        const response = await get('/api/names',params)
        setList(response.data)
    }

    const postData = async () => {
        const response = await post('/api/update',params)
        setMsg(response.msg)
    }

    return(
        <div>
            <button onClick={getData}> get </button>
            {
                list.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))
            }
            <br/>
            <button onClick={postData}>post</button>
            {msg}
        </div>
    )
}
