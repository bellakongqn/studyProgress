import React from 'react'
import {get, post} from './http'

export default function App(){
    const params = {id:1,name:'hha'}
    const getData =() =>{
        get('/',params)
    }

    const postData =() =>{
        post('/',params)
    }

    return(
        <div>
            <button onClick={getData}> get </button>
            <br/>
            <button onClick={postData}>post</button>
        </div>
    )
}
