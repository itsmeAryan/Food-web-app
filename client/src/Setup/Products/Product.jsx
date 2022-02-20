import React,{useEffect,useState} from 'react'
import { Elements } from '../Material/ELements'
import "./Product.scss"
import {useDispatch,useSelector} from "react-redux"
import {fetchData} from "../Redux/fetchApi"
import ProductItem from "./ProductItem"
const Product = () => {
    const data=useSelector(state=>state.data.data);
    const Dis =useDispatch()
    const [items,setitems]=useState([]);
    useEffect(()=>{
       fetchData(Dis)
       setitems(data)
    },[data.length]);
  return <div className="product">
      <Elements.Heading variant="h4" style={{textAlign:"center",marginBottom:"20px"}} color="primary">
          Our Categories
      </Elements.Heading>
      <div className="product-container">
         {items.length>0?items.map(x=>(
          <ProductItem key={x._id} data={x}/>

         )):<h1 style={{textAlign:"center",color:"blue",margin:"10px"}}>loading.....</h1>}
        

      </div>
  </div>
}

export default Product