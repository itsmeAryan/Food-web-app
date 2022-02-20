import {createSlice} from "@reduxjs/toolkit";
const Auth=createSlice({
    name:"Auth",
    initialState:{
        loading:false,data:null,
    err:false    },
    reducers:{
        startLoading:(state)=>{
            state.loading=true;
        }
        ,
        startsucces:(state,action)=>{
            state.loading=false;
            state.data=action.payload;
            state.err=false;
        },
        starterr:(state)=>{
            state.loading=false;
            state.err=true;
            
        }
    }
})
export const {startLoading,starterr,startsucces}=Auth.actions;
export default Auth.reducer;