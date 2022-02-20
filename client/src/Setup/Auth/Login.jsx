import React,{useState,useEffect} from 'react'
import "./Auth.scss"
import {Link,useNavigate} from "react-router-dom"
import {Elements} from "../Material/ELements"
import {useDispatch,useSelector} from "react-redux"
import {SatrtAuth} from "../Redux/fetchApi"
import {DecodeData} from "../Axios"
import {useCookies} from "react-cookie"
const Login = () => {
    const [email,setemail]=useState('');
    const [pass,setpass]=useState('');
    const [cookie,setcooki]=useCookies();
    const Navi=useNavigate();
    const data=useSelector(state=>state.auth);
    const Dis=useDispatch();
   
    useEffect(()=>{
        if(data.data){
            const encoded=DecodeData(data.data);
            setcooki("uuid",encoded.id,{maxAge:1000*60*60*24,sameSite:"lax"})
            setcooki("uuser",encoded.name,{maxAge:1000*60*60*24,sameSite:"lax"})
   
        }
        if(cookie.uuid){
         Navi("/")
        }
    },[data.data,cookie])
    const AuthBtn=()=>{
        const obj={email,password:pass};
        SatrtAuth(Dis,obj)
    }
  return <div className="Auth">
      <div className="logger">
          <h2 className='auth-title'>Login</h2>
          <div className="auth-container">
              <div className="items">
                    <span className="tag">Email</span>
                    <input type="email" onChange={(e)=>setemail(e.target.value)} value={email} placeholder="Enter Your Email" />
              </div>
              <div className="items">
                    <span className="tag">Password</span>
                    <input type="Password" onChange={(e)=>setpass(e.target.value)} value={pass} placeholder="Enter Your Password" />
              </div>
              <div className="item-alreayd">
                  <span className="all">
                      Don't have an Account?
                  </span>
                  <Link style={{color:"blue",fontSize:"17px"}} to="/signup">signup</Link>
              </div>
              <div className="btns">
                  <Elements.Btn size='large' variant="outlined" color="primary" onClick={AuthBtn}>
                      Login
                  </Elements.Btn>
              </div>

          </div>
      </div>
  </div>
}

export default Login