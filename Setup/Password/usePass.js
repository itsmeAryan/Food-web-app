import crypto from "crypto-js";
export const Encrypt= (password)=>{
    return crypto.AES.encrypt(password,"secretkey").toString();
}
export const Decrypt=(encodedPass,password)=>{
    const hash=crypto.AES.decrypt(encodedPass,"secretkey").toString(crypto.enc.Utf8);
    return hash===password;
}