import React, { useState } from 'react';
import {get, post} from './http'

function App() {

  const [list, setList] = useState<Array<string>>([])
  const [msg, setMsg] = useState<string>('')
  const params = {
      id: 1,
      name:'haha'
  }
  const getData = async () =>{
      const response = await get('/names',params)
      setList(response.data)
  }

  const postData = async () => {
      const response = await post('/update',params)
      setMsg(response.data)
  }

  return (
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
  );
}

export default App;
