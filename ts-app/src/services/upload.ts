import { post } from "../http";

export const uploadImage = (files: FileList) => {
    const config = {
        onUploadProgress: function(progressEvent: { loaded: number; total: number; }) {
            var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
            console.log(percentCompleted)
        }
    }
    const data = new FormData()
    for (let i = 0; i< files.length; i++) {
        data.append('files[]', files[i])
    }

    return post<{data: string[]}>('/upload', data, config)
}