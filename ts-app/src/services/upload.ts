import { post } from "../http";

export const uploadImage = (files: FileList) => {
    const data = new FormData()
    for (let i = 0; i< files.length; i++) {
        data.append('files[]', files[i])
    }

    return post<{data: string[]}>('/upload', data)
}