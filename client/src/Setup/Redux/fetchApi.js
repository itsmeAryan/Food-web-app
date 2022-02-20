import {baseUlrs,baseUlr,DecodeData} from "../Axios";
import {startSuccess,starterr,StartLoading} from "./OrderSlice"
import { startErr,startLoading,startSucces } from "./Cart"
import {startLoading as AuthLoad,starterr as Autherr,startsucces as Authsuccess} from "./Auth"
import axios from "axios";
// lets fetch all data;
export const fetchData=async(dis)=>{
    dis(StartLoading());
    try {
        const {data}=await baseUlr.get("/food/sync");
        dis(startSuccess(DecodeData(data)));
    } catch (error) {
        dis(starterr())
        
    }

};
export const addCart=(dis,data)=>{
    dis(startLoading());
    try {
        dis(startSucces(data))
    } catch (error) {
        dis(startErr())
    }
}

// signup and login 
    // food/user/login
export const SatrtAuth=async(Dis,obj)=>{

Dis(AuthLoad());
try {
    const pink=obj.user?"/food/user/signup":"/food/user/login"
    const {data}=await baseUlrs.post(pink,obj);
    Dis(Authsuccess(data))
} catch (error) {
    Dis(Autherr());
}
}