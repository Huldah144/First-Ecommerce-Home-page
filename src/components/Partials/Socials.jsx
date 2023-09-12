import React from 'react'
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import '../../Assets/css/socials.css'

const Socials = () => {
  return (
    <div className="div">
        <div className='socials flex'>
        <p className='copyrite'>&copy; 2022 Toutem All Right Reserved. <strong>| Terms And Conditions |</strong> Return Policy.</p>
        <div className="social-icons">
            <li className='social-list'><FaTelegram/></li>
            <li className='social-list' ><FaInstagram/></li>
            <li className='social-list'><FaTwitter/></li>
            <li className='social-list'><FaFacebookF/></li>
            <li className='social-list'><FaPinterest/></li>
        </div>
        
    </div>
    </div>

   
  )
}

export default Socials
