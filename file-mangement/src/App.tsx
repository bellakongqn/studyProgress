import React, { useRef, useCallback, useEffect } from 'react';
import './index.scss'

function App() {

  const inputRef = useRef<HTMLInputElement>(null)
  const canvasref = useRef<HTMLCanvasElement>(null)

  const handleDownload = useCallback(() => {
    // 下载文件
    // const downloadTxt = `
    //   我和我的祖国，
    //   一刻也不能分割。
    // `
    // // const stringbuffer = new Buffer(downloadTxt, 'utf-8')
    // const blob = new Blob([downloadTxt], {type: 'text/plain'})

    // const urlLink = window.URL.createObjectURL(blob);

    // const alink = document.createElement('a')

    // alink.href = urlLink
    // alink.download = '我和我的祖国.txt'
    // alink.click()


    // // Reader

    // const reader = new FileReader()

    // reader.onloadend = () => {
    //   // reader.result
    // }

    // const ctx = canvasref.current!.getContext('2d')!

    const urllink = canvasref.current!.toDataURL('image/png').replace(
      'image/png',
      'image/octet-stream'
    )
    // reader.readAsDataURL(blob)
    // const imagedata = ctx.getImageData(0, 0, 200, 200);
    // const reader = new FileReader()

    // reader.onloadend = () => {
    //   const url = reader.result as string;
      const a = document.createElement('a');
      a.download = '测试下载.png'
      a.href = urllink;
      a.click();
    // }

    // reader.readAsDataURL(new Blob([imagedata.data], {type: 'image/png'}))
    
  }, [])

  const handleInput = () => {
    inputRef.current?.click()
  }

  useEffect(() => {
    const img = document.querySelector<HTMLImageElement>('#testimg')
    if (canvasref.current) {
      const ctx = canvasref.current.getContext('2d');
      if (img && ctx) {
        img.onload = () => {
          ctx.drawImage(img, 0, 0)
          
        }
      }
    }
  }, [])


  return (
    <div className="box">
      <input className="input" type="file" ref={ inputRef } />
      <div className="plus" onClick={ handleInput}>
        <img src={require('./img/upload.png')} alt="upload-icon" />
        <img id="testimg" style={{opacity: 0}} src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1575169827,1075519102&fm=26&gp=0.jpg" crossOrigin="anonymous" alt=""/>
        <canvas width={200} height={200} ref={canvasref} />
      </div>
      <main className="content">
        <div className="file-item">
            <span>upload.png</span>
            <div className="operation">
              <div className="operation-item">
                <img src={require('./img/preview.png')} alt="preview-icon"/>
              </div>
              <div className="operation-item" onClick={handleDownload}>
                <img src={require('./img/download.png')} alt="download-icon"/>
              </div>
              <div className="operation-item">
                <img src={require('./img/delete.png')} alt="delete-icon"/>
              </div>
            </div>
        </div>
      </main>
      <div className="footer">
        pagination
      </div>
    </div>
  );
}

export default App;
