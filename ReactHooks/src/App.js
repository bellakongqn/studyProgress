import React, { useState, useMemo } from 'react';
import Modal from './components/Modal/Modal'
import './App.css'

function App() {
  const [show,setShow] = useState(true);
  const handleCanel = useMemo(() => () => setShow(false), [])

  // const handleCancelInner = () => setShow(false)

  return (
    <>
      <button  onClick={()=>setShow(!show)}>点击</button >

      <Modal show={show} // 是否展示弹窗
             title="Title"  // title
            //  width="30%"  // Modal宽度
            //  footer={false}  // 是否展示底部按钮
             maskClosable={true} // 点击蒙层关闭
             onCancle={handleCanel}  // 取消事件
             onConfirm={handleCanel} // 确定事件
      >  
        <div>'sdvjsdhflrjkt'</div>
      </Modal>
    </>
  );
}

export default App;
