import React from 'react'
import Logo from '../../Assets/images/logoverdeclaro-1.png'
import '../../Assets/css/footer.css'
import Socials from './Socials'


const Footer = () => {
  return (
    <div>
      <div className='wrapper flex'>
      <div className="col-4">
      <div className="foot">
        <img src={Logo} alt="" className='foot-image'/>
        <p className='foot-title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Arcu, sit risus mattis erat fermentum.</p>
      </div>
      </div>
      <div className="col-6 flex">
      <ul>
        <p className='foot-list'>Customer support</p>
        <li className='foot-items'><a href="#">Shipping</a></li>
        <li className='foot-items'><a href="#">Free Returns</a></li>
        <li className='foot-items'><a href="#">Track Your Order</a></li>
        <li className='foot-items'><a href="#">Gifts Card</a></li>
      </ul>
      <ul>
        <p className='foot-list'>About Us</p>
        <li className='foot-items'><a href="#">Our Values</a></li>
        <li className='foot-items'><a href="#">Sustainability</a></li>
        <li className='foot-items'><a href="#">Brand Ambassadors</a></li>
        <li className='foot-items'><a href="#">Fitness Professionals</a></li>
        <li className='foot-items'><a href="#">Gap Inc.Sustainability</a></li>
      </ul>
      <ul>
        <p className='foot-list'>Customer Service</p>
        <li className='foot-items'><a href="#">Help</a></li>
        <li className='foot-items'><a href="#">Leader Support</a></li>
        <li className='foot-items'><a href="#">Pleasant Grove Product Center</a></li>
        <li className='foot-items'><a href="#">Recall-Important Safety Information.</a></li>
      </ul>
      </div>
     </div>
     <Socials/>
    </div>
     
  )
}

export default Footer
