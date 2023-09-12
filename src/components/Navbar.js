import React, { useState } from 'react'
import logo from '../Assets/images/logoverdeclaro-1.png'
import search from '../Assets/images/icons/search.png'
import heart from '../Assets/images/icons/heart.png'
import user from '../Assets/images/icons/user.png'
import cart from '../Assets/images/icons/cart.png'

import '../Assets/css/navbar.css'
import TypeSearch from './Categories/TypeSearch'
import Login from './Categories/Login'


const Navbar = () => {
  const[show, setShow] = useState(false);
  const [toggle, setToggle] = useState(false);

  const showTypeSearch = () => {
    // console.log(show)
    setShow(!show)
  }

  const toggleLogin = () => {
    // console.log(toggle)
    setToggle(!toggle)
  }
  return (
    <div className='container'>
      <nav className='navbar justify-between items-center py-3'>
        {/* Logo */}
        <a href="#" className="navbar-brand">
          <img src={logo} alt="" />
        </a>

        <div className="collapse">
          <ul className="navbar-nav">
            <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link">About us</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Shop</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
            <button className='btn-clear' onClick={showTypeSearch}><li className="nav-item"><a href="#" className="nav-link"><img src={search} /></a></li></button>
            <li className="nav-item"><a href="#" className="nav-link"><img src={heart} /></a></li>
            <button className='btn-clear' onClick={toggleLogin}><li className="nav-item"><a href="#" className="nav-link"><img src={user} /></a></li></button>
            <li className="nav-item"><a href="" className="nav-link"><img src={cart} /></a></li>
          </ul>
        </div>

        
        {/* <button onclick={showTypeSearch}> <li className="nav-item"><a href="#" className="nav-link"><img src={search} /></a></li></button> */}
        {/* Navbar */}
      </nav>
      {show ? <TypeSearch/> : ''}
      {toggle ? <Login/> : ''}

      
    </div>
  )
}

export default Navbar
