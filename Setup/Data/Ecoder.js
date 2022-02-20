export const EncodData=(data)=>{
    return encodeURIComponent(JSON.stringify(data));
}
export const DecodeData=(data)=>{
    return JSON.parse(decodeURIComponent(data));
}