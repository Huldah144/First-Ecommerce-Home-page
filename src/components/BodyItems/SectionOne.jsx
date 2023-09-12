import React from 'react'
import Oils from '../../Assets/images/oil.png'
import Cosmetics from '../../Assets/images/cosmetic.png'
import Diffusers from '../../Assets/images/diffuser.png'
import Aromaths from '../../Assets/images/aromath.png'
import '../../Assets/css/sectionone.css'


const SectionOne = () => {
  return (
    <div className='sectn-1'>
        <div className="Frame flex">
            {/* <div className='Frameees flex'> */}
             <div className="card hov">
                 <img src={Oils} alt="" />
                 <p className='frame-list'>Essential Oils</p>
                </div>
                <div className="card hov">
                <img src={Cosmetics} alt="" />
                <p className='frame-list'>Natural Cosmetic</p>
                </div>
                <div className="card hov">
                <img src={Diffusers} alt="" />
                <p className='frame-list'>Diffusers</p>
                </div>
                <div className="card hov">
                <img src={Aromaths} alt="" />
                <p className='frame-list'>Aromatherapy</p>
                </div>
            {/* </div> */}
        </div>

    </div>
  )
}

export default SectionOne

