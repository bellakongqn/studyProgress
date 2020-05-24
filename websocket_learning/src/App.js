import React, { useRef, useEffect, useCallback, useState } from 'react';
import './App.css';

function App() {
  const ws = useRef()
  const input = useRef()

  const [msges, setMsges] = useState([])

  const handleOnMessage = useCallback((event) => {
    console.log(event.data)
    if (typeof event.data !== 'string') return;
    const obj = JSON.parse(event.data)
    setMsges(list => list.concat(obj))
  }, [])



  const handleSendMessage = useCallback(() => {
    if (ws.current) {
      const msg = input.current ? input.current.value : ''
      // 发送消息
      ws.current.send(msg)
      setMsges(list => list.concat({me: true, content: msg}))
      input.current.value = ''
    }
  }, [])


  const handleKeyUp = useCallback(e => {
    if (e.keyCode === 13) {
      handleSendMessage()
    }
  }, [handleSendMessage])



  useEffect(() => {
    const wssocket = new WebSocket('ws://localhost:4000/chat')

    // wssocket.addEventListener('open', handleOnMessage)
    wssocket.addEventListener('message', handleOnMessage)

    ws.current = wssocket;

    return () => {
      // 断开链接
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])




  return (
    <div className="App">
      <main>
        {
          msges.map((m, index) => (
            <div className="msg" key={index + 'm'}>
              <span>{m.me ? '我' : '其他人'}</span>
              <p>{ m.content}</p>
            </div>
          ))
        }
      </main>
      <footer>
        <input ref={input} placeholder="请输入消息" onKeyUp={handleKeyUp} />
        <button onClick={handleSendMessage}>send</button>
      </footer>
    </div>
  );
}

export default App;
