import axio from "axios";
const URL="/api/v1";
const token="83hiuda8973--ih8d"
export const baseUlr=axio.create({
    baseURL:URL,
    headers:{
        "Content-Type":"aplication/json",
        auth:`Bearer ${token}`
    }
})
export const baseUlrs=axio.create({
    baseURL:URL,
  
})
export const DecodeData=(data)=>{
    return JSON.parse(decodeURIComponent(data));
}