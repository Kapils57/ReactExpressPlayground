import React,{useState} from 'react'
import '../css/Navbar.css';
import {Link, NavLink} from 'react-router-dom'
function navbar() {
  const [isLoggedIn, setLoggedIn]= useState(true)
  return (
    <div className="a">
        <h3>GalaxyRider</h3>
        <div className="b">
          <NavLink style={({isActive}) => ({color: isActive?'cadetblue':'white', borderBottom: isActive?'1px solid cadetblue':'white' }) }  to="/">Home</NavLink>
          <NavLink style={({isActive}) => ({color: isActive?'cadetblue':'white', borderBottom: isActive?'1px solid cadetblue':'white' }) }  to="/About">About</NavLink>
          {//agar tum {jsx/return} ke ander conditional rendering krr rhe ho to ternary operator ka use krna ho
            isLoggedIn ? <button  style={{backgroundColor:"rgb(50,125,100)",
              borderRadius:"5px",
              padding:"10px",
              color:"white",
              border:"none",
              cursor: "pointer"
            }} onClick={()=>setLoggedIn(false)}>Logout</button> 
            : <button  style={{backgroundColor:"rgb(50,125,100)",
              borderRadius:"5px",
              padding:"10px",
              color:"white",
              border:"none",
              cursor: "pointer"
            }} onClick={()=>setLoggedIn(true)}>Login</button>  
          }
        </div>
    </div>
  )
}

export default navbar