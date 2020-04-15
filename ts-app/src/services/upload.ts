import { post } from "../http";
import { AxiosRequestConfig } from "axios";

export const uploadImage = (files: FileList, onUploadProgress: AxiosRequestConfig['onUploadProgress']) => {
    const config = {
        onUploadProgress: onUploadProgress
    }
    const data = new FormData()
    for (let i = 0; i< files.length; i++) {
        data.append('files[]', files[i])
    }

    return post<{data: string[]}>('/upload', data, config)
}