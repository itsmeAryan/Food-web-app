import {app,startServer,StartDb} from "./Setup/index.js";
import express from "express";
import path from "path";
import foodRouter from "./Setup/Food/Controller.js"
import Cor from "cors"
startServer();
StartDb();
app.use(Cor())
app.use("/api/v1/food",foodRouter)


if(process.env.NODE_ENV=='production'){
    app.use(express.static("client/build"));
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"client",'build','index.html'));
    })
}
else{
    app.get("/",(Req,res)=>{
    res.send('hello')
});
}