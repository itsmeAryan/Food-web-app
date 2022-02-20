import React,{useEffect,useState} from 'react'
import "./SingleItem.scss"
import {Elements} from "../Material/ELements"
import {useParams,useNavigate} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"
import {addCart} from "../Redux/fetchApi"

const SingleItem = () => {
    const {id}=useParams();
    const data=useSelector(state=>state.data.data.filter(x=>x._id===id));
    const [oneitem,setoneitem]=useState([]);
    const [order,setorder]=useState(1);
    const Dis =useDispatch()
    const [size,setsize]=useState("sm");
    const PlaceOrder=(e)=>{
   const obj={...data[0],order,size};
   addCart(Dis,obj);
  
    }
    const History=useNavigate()
    useEffect(()=>{

        if(id===undefined || data.length==0){
            History("/")

        }
        if(data.length>0){
            setoneitem([...data])
        }
    },[data.length])
   

  return <>
  
  {oneitem.length>0?oneitem.map(x=>(
    <div className="SingleItem" key={x._id}>
    <div className="left">
        <img src={x.img} alt="single item" />
    </div>
    <div className="right">
        <Elements.Heading className='title'>₹{x.price[0]}</Elements.Heading>
        <Elements.Heading className='desc'>{x.title}</Elements.Heading>
        <Elements.Heading className='desc'>{x.desc}</Elements.Heading>

      <div className="item">
          <Elements.Heading className='option'>Choose the size</Elements.Heading>
           <select value={size} onChange={(e)=>{setsize(e.target.value)}} name="size" id="">
               <option value="">Choose the size</option>
           <option value="sm">Small Size</option>
           <option value="l">Large Size</option>
           </select>
      </div>
      <div className="add">
          <input min={1} type={"number"} value={order} onChange={(e)=>{
                setorder(e.target.value)
              }
              } className='num'/>
          <Elements.Btn variant="outlined" color="primary" onClick={PlaceOrder}>Add to Cart</Elements.Btn>
      </div>
    </div>
</div>
  )):<h1>Loading</h1>}
  </>
}

export default SingleItem