import express from "express";
import {ConectDb} from "./DB/Conecctor.js"
import getkeys  from "./Configure/Keys.js"
import {Encrypt,Decrypt} from "./Password/usePass.js";
import {CreatToken,verifyToken} from "./Jwt/useJwt.js"
import {EncodData,DecodeData} from "./Data/Ecoder.js"
const {PORT,MongoUrl}=getkeys();
export const app=express();
app.use(express.json())

export const startServer=(Your_Port_Number)=>{
    if(Your_Port_Number!==undefined){
        app.listen(Your_Port_Number,()=>{
            console.log(`server started at http://localhost:${Your_Port_Number}`);
        })
    }else{
        app.listen(PORT,()=>{
            console.log(`server started at http://localhost:${PORT}`);
        })
    }
}
export const StartDb=()=>{
    ConectDb(MongoUrl);
}
export const Create=CreatToken;
export const verify=verifyToken;
export const Encode=Encrypt;
export const Decodet=Decrypt;
export const dataEncoder=EncodData;
export const dataDecoder=DecodeData;





