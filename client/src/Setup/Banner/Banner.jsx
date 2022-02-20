import React from 'react'
import "./Banner.scss"
import {Elements} from "../Material/ELements";
import Product from "../Products/Product"
import Im from "./wel.png"
const Banner = () => {
  return <>
  <div className="Banner">
      <div className="back-space">
          <div className="special"><img src={Im} alt="" /></div>
          <h2>Order Healthy And Fresh Food Any Time</h2>
          <div className="div">
              <Elements.Btn size='large'  variant='contained' color="primary">Order Now</Elements.Btn>
          </div>
      </div>
  </div>
  <Product/>
  </>
}

export default Banner