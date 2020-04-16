import React, { useState, useCallback, ChangeEvent, useRef } from 'react'
import { InputFile } from '../../components/InputFile'
import { uploadImage } from '../../services/upload'

type ImageProps = {
    thumb: string,
}

export const UploadPage = () => {
    const [files, setFiles] = useState<ImageProps[]>([])
    const [uploadPercent, setUploadPercent] = useState<Number>(0)
    const inputRef = useRef<HTMLInputElement>(null)
    const handleUploadProgress = useCallback(
        (progressEvent: { loaded: number; total: number; }) => {
            let percent = Math.round((progressEvent.loaded * 100) / progressEvent.total)
            console.log(percent)

            if(percent<100){
                setUploadPercent(percent);
            }
        },
        [])

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const filesCurr = e.target.files
        if (filesCurr !== null) {
            // const newList: ImageProps[] = []
            // for (let i = 0; i < filesCurr.length; i++) {
            //     newList.push({
            //         thumb: URL.createObjectURL(filesCurr[i])
            //     })
            // }
            // setFiles([...files, ...newList])

            /*上传成功之前展示 本地thumb
                成功后更换为接口值
            */

            uploadImage(filesCurr, handleUploadProgress)
                .then(res => {
                    if (inputRef.current) {
                        inputRef.current.value = ''
                    }
                    setFiles([...files, ...res.data.map(s => ({ thumb: s }))])
                    setUploadPercent(100)
                })
        }
    }, [files, handleUploadProgress])

    const handleDelete = (key: Object) => {
        setFiles([...files.filter(item => item !== key)])
    }

    const hanldePreview = () => {
        console.log('preview')
    }

    return (
        <div>
            <div className="upload__main">
                {
                    files.map((item, idx) => (
                        <div className="upload__content" key={idx}>
                            {/* 进度 <  时 */}
                            {
                                ( uploadPercent > 0 && uploadPercent!==100 )  && (
                                    <div className="upload__content-progress">
                                        {uploadPercent + '%'}
                                    </div>
                                )
                            }
                            {/* 上传成功时 展示操作按钮 */}
                            {
                                uploadPercent===100 && (
                                    <div className="upload__content-operation">
                                        <img src={require('../../img/delete-icon.png')} alt="delete-icon" onClick={() => handleDelete(item)} />
                                        <img src={require('../../img/preview-icon.png')} alt="perview-icon" onClick={() => hanldePreview()} />
                                    </div>
                                )
                            }
                            <img key={idx} src={item.thumb} alt="" className="upload__content-img" />
                        </div>
                    ))
                }
                <InputFile ref={inputRef} onChange={handleChange} />
            </div>

        </div>
    )
}
