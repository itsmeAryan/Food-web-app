import {createSlice} from "@reduxjs/toolkit";
const Cart=createSlice({
    name:"cart",
    initialState:{
        loading:false,
        err:false,cart:JSON.parse(localStorage.getItem("mycart")) || [],
        total:JSON.parse(localStorage.getItem("t"))|| 0,
        qty:JSON.parse(localStorage.getItem("q"))|| 0
    },reducers:{
        startLoading:(state)=>{
            state.loading=true;
        },
    startSucces:(state,action)=>{
        state.total+=action.payload.price[0]*action.payload.order;
        state.qty+=1;
        state.loading=false;
        state.err=false;
        state.cart.push(action.payload);
        localStorage.setItem("mycart",JSON.stringify(state.cart));
        localStorage.setItem("t",JSON.stringify(state.total));
        localStorage.setItem("q",JSON.stringify(state.qty));

    },
    startErr:(state)=>{
        state.loading=false;
        state.err=true;
    }
    }
});
export const {startErr,startLoading,startSucces}=Cart.actions;
export default Cart.reducer;