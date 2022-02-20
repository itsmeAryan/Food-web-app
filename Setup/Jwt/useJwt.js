import jwt from "jsonwebtoken";

export const CreatToken=(obj)=>{
    return jwt.sign(obj,"creator",{expiresIn:"1d"});
}
export const verifyToken=(Token)=>{
    try {
      const check=  jwt.verify(Token,"creator",{expiresIn:"1d"});
      return check?check:null;
    } catch (error) {
        return null;
    }
}