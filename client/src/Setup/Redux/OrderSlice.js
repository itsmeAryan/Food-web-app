import {createSlice} from "@reduxjs/toolkit";

const reducer=createSlice({
    name:"data",
    initialState:{
        loading:false,
        er:false,
        data:[]
    }
    ,
    reducers:{
        StartLoading:(state)=>{
            state.loading=true;
        },
        startSuccess:(state,action)=>{
            state.loading=false;
            state.data=[...action.payload];
            state.err=false;
        },
        starterr:(state)=>{
            state.loading=false;
            state.er=true;
            state.data=[];
        }
    }
});
export const {startSuccess,starterr,StartLoading}=reducer.actions;
export default reducer.reducer;