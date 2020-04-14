import React, { useState, HtmlHTMLAttributes } from 'react'
import { InputFile } from '../../components/InputFile'

type imageProps =  {
    thumb:string,
} & HtmlHTMLAttributes<HTMLInputElement>

export const UploadPage = () =>{

    const [files, setFiles] = useState<Array<imageProps>>([])

    const handleChange = (e:any) =>{
        e.preventDefault()
        let filesCurr = e.target.files
        for (let i = 0; i < filesCurr.length; i++) {
            filesCurr[i].thumb = URL.createObjectURL(filesCurr[i])
        }
        filesCurr = Array.prototype.slice.call(filesCurr, 0)
        setFiles([...files, ...filesCurr])
    }

    return(
        <div>
            <InputFile onChange={handleChange}/>
            {
                files.map(( item, idx)=>(
                    <img key={idx} src={item.thumb} alt=""/>
                ))
            }
        </div>
    )
}
