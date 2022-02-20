import mongoose from "mongoose";
const Schmea=mongoose.Schema({
    user:String,
    email:String,
    password:String,

},{timestamps:true});
export const user =mongoose.model("fooduser",Schmea);