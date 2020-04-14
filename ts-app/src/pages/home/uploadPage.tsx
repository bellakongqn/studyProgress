import React, { useState, HtmlHTMLAttributes, useCallback, ChangeEvent, useRef } from 'react'
import { InputFile } from '../../components/InputFile'
import { uploadImage } from '../../services/upload'

type ImageProps =  {
    thumb:string,
}

export const UploadPage = () =>{

    const [files, setFiles] = useState<ImageProps[]>([])
    const inputRef = useRef<HTMLInputElement>(null)

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) =>{
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
            uploadImage(filesCurr)
                .then(res => {
                    console.log(res)
                    if (inputRef.current) {
                        inputRef.current.value = ''
                    }
                    setFiles([...files, ...res.data.map(s => ({thumb: s}))])
                })
        }
    }, [])

    return(
        <div>
            <div className="upload__main">
                {
                    files.map(( item, idx)=>(
                        <img key={idx} src={item.thumb} alt="" className="upload__img"/>
                    ))
                }
                <InputFile ref={inputRef} onChange={handleChange}/>
            </div>
            
        </div>
    )
}
