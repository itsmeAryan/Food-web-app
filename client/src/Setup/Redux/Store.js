import {configureStore} from "@reduxjs/toolkit"
import Reducer from "./OrderSlice";
import CartReducer from "./Cart"
import Auth from "./Auth"
export default configureStore({
reducer:{
    data:Reducer,
    cart:CartReducer,
    auth:Auth
}
})