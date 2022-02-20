import React from 'react'
import "./Navbar.scss"
import {Elements} from "../Material/ELements";
import {Icons} from "../Material/Icons";
import {Navbarcss} from "../Material/Style";
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux';
const Navbar = () => {
  const qty=useSelector(state=>state.cart.qty);
  const classes=Navbarcss();
  return<Elements.Navbar container position='static' color="secondary">

      <Elements.Tool className={classes.Nav} >
        <Elements.Heading variant="h5" component={'h4'}>
          <Link to="/">FoodPay</Link>
        </Elements.Heading>
        <div className="search-container">
          <input type="text" placeholder='search your item' />
          <Icons.SearchIcon
          style={{display:"flex",position:"absolute",fontSize:"28px",top:"20%",color:"black"
        ,right:"15px"}}
          />
        </div>
        <Elements.Div className='navbar-menu'>
          <Elements.Heading className="menu-item">
            <Link to="/signup">Signup</Link>
          </Elements.Heading>
          <Elements.Heading className="menu-item">
            <Link to="/login">Login</Link>
          </Elements.Heading>
          <Elements.Img style={{width:"35px",height:"35px"}}/>
         <Link to="/cart">
         <Elements.Badge badgeContent={qty>0?qty:0} color="primary">
            <Icons.Cart/>
          </Elements.Badge>
         </Link>
        </Elements.Div>
      </Elements.Tool>
  </Elements.Navbar>
}

export default Navbar