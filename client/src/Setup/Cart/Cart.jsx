import React,{useState,useEffect} from 'react'
import Card from './Card'
import "./Cart.scss"
import {useCookies} from "react-cookie"
import {useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
const Cart = () => {
  const data=useSelector(state=>state.cart.cart);
  const total=useSelector(state=>state.cart.total);
  const [isactive,setisactive]=useState(false);
  const [tip,settip]=useState(0);
  const Navi=useNavigate();
  const [cookie,setcookie]=useCookies()
  
  const [order,setorder]=useState([...data]);
  useEffect(()=>{
    if(cookie.uuser){
      setisactive(true);
    }
  },[data.length,cookie])
  const PayMoney=()=>{
    if(!isactive){
      alert("please fill your details before you pay");
      setTimeout(() => {
        Navi("/login")
      }, 5000);
    }else{
      alert("congrats you have clear all things")
      localStorage.clear();
      // if user then create user and store details in localstrog
    }
  }
  return <div className="Cart">
      <div className="left-card">
     {order.length>0?order.map(x=>(
       <Card data={x} key={x._id}/>
     )):<h1>cart is empty try to buy something for you</h1>}
      </div>
      <div className="right">
        <div className="addme">
          <h2>Cart Total</h2>
          <div className="place-cart">
            <span>subtotal</span><span>₹{parseInt(parseInt(total)+parseInt(tip===''?0:tip))}</span>
          </div>
          <div className="place-cart">
            <span>packing charge</span><span>₹50</span>
          </div>
          <div className="place-cart">
            <span>discount</span><span>₹-50</span>
          </div>
          <div className="tip place-cart">
            <h4>Like our service?</h4>
            <div className="dpay ">
              <span className='pr'>give Tip</span>
              <input value={tip} onChange={(e)=>{
                
                settip(e.target.value)
                }} type="number" min={0}  />
            </div>
          </div>
          <div className="place-cart total">
            <span>total</span><span>₹{parseInt(parseInt(total)+parseInt(tip===''?0:tip))}</span>
          </div>
          <div className="checkout">
            <div className="span" onClick={PayMoney}>pay for order</div>
          </div>
        </div>
      </div>
  </div>
}

export default Cart