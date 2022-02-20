import React from 'react'
import Banner from './Setup/Banner/Banner'
import Navbar from './Setup/Navbar/Navbar'
import {Routes as Switcher ,Route} from "react-router-dom"
import SingleItem from './Setup/SingleItem/SingleItem'
import Cart from './Setup/Cart/Cart'
import Signup from './Setup/Auth/Signup'
import Login from './Setup/Auth/Login'
const App = () => {
  return (
    <div>
      <Navbar/>
     <Switcher>
     <Route path="/" element={<Banner/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/signup" element={<Signup/>}/>
     <Route path="/cart" element={<Cart/>}/>
     <Route path="/place-order/:id" element={<SingleItem/>}/>
     </Switcher>
    </div>
  )
}

export default App