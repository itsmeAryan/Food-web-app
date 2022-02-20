import express from "express";
import {model} from "../Schema/FoodScham.js"
import {EncodData} from "../Data/Ecoder.js"
import keys from "../Configure/Keys.js";
const {auth}=keys()
import {Encrypt,Decrypt} from "../Password/usePass.js"
import {user} from "../Schema/USer.js"
const Router=express.Router();
Router.route("/sync")
.get(middle,async(req,res)=>{
try {
 const data=await model.find({});
 res.status(200).json(EncodData(data));
} catch (error) {
}
})

// singup user
Router.route("/user/signup")
.post(async(req,res)=>{
    if(req.body.email===undefined || req.body.password===undefined || req.body.email===''|| req.body.password==''){
        res.status(400).json("fields cant be empty")

    }else{
        try {
            const pass=Encrypt(req.body.password)
            const data=await user.create({...req.body,password:pass});
            const obj={name:data.user,id:data._id};
            res.status(200).json(EncodData(obj));
        } catch (error) {
            res.status(400).json("error occur")
        }
    }
})
// login
Router.route("/user/login")
.post(async(req,res)=>{
    const {email}=req.body;
    const data=await user.findOne({email:email});
    if(data){
            const obj={name:data.user,id:data._id};
            res.status(200).json(EncodData(obj));
        
    }else{
        res.status(400).json("error occur")

    }
  
})

function middle(req,res,next){
    if(req.headers.auth){
        const authS=req.headers.auth.split(" ")[1].trim();
        if(auth==authS){
            next()
        }
        else{res.status(404).json("bad credentials...")}
    }else{
        res.status(404).json("you don't have permission to access the key")
    }
}
export default Router;