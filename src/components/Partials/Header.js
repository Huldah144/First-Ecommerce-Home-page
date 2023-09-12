import React from 'react'
import '../../Assets/css/header.css'
import Navbar from '../Navbar'
import Banner from '../Banner'


const Header = () => {
  return (
    <div className='main-header'>
      <Navbar/>
      <Banner/>
    </div>
  )
}

export default Header
