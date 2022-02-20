import React from 'react'
import "./Card.scss"
const Card = ({data}) => {
  return <div className="left">
  <div className="item">
      <h3 className="title md">product</h3>
      <img src={data.img} alt="hello" />
    </div>
    
    <div className="item">
      <h3 className="title">name</h3>
      <p className="text">{data.title}</p>
    </div>

    <div className="item size">
      <h3 className="title">size</h3>
      <p className="text">{data.size}</p>
    </div>
    <div className="item">
      <h3 className="title">price</h3>
      <p className="text">{data.price[0]}</p>
    </div>
    <div className="item">
      <h3 className="title">Quantity</h3>
      <p className="text">{data.order}</p>
    </div>
    <div className="item total">
      <h3 className="title">total</h3>
      <p className="text">{data.price[0]*data.order}</p>
    </div>
    
  </div>
}

export default Card