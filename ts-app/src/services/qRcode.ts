import { get } from "../http"

type QrCodeResponse = {
    code:Number,
    url: string,
    uuid:string,
}

type scanStatus = {
    isScan: boolean,
}

export const getQrCode = () =>{
    return get<QrCodeResponse>('/getQrcode')
}

export const getScanStatus = () =>{
    return get<scanStatus>('/getScanStaus')
}