import React from 'react'
import "./ProductItem.scss"
import {Link} from "react-router-dom"
const ProductItem = ({data}) => {
  return <div className="ProductItem">
  <div className="img">
    <img src={data.img} alt="all itmes" />
  </div>
  <div className="product-detials">
    <h4 className="title">{data.title}</h4>
    <p className="desc">{data.desc}</p>
    <span className='price'>₹{data.price[0]}</span>
<Link to={`/place-order/${data._id}`}>
<span className="btn">Add Order</span>
</Link>
  </div>
  </div>
}

export default ProductItem