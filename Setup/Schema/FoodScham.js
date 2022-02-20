import mongoose from "mongoose";
const Schema=mongoose.Schema({
    title:String,
    desc:String,
    img:String,
    price:Array,

})
export const model= mongoose.model("food",Schema);
