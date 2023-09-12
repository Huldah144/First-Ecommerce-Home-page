import React from 'react'

import banner from '../../Assets/images/banner.png'
import '../../Assets/css/sectionfour.css'
// import Button from '../Buttons/Button'

const SectionFour = () => {
  return (
    <div className='sectn-4'>
        <div className="row">
            <div className="col-6 green">
               <h1 className='lux-title'> Our luxary soaps are 100% natural providing nourishing benefits for your skin.</h1>
              <button className='btn btn-lux'> shop all</button>
            </div>
            {/* <Button text='hello'/> */}
            
            <div className="col-6">
              <img src={banner} alt="" />
            </div>
        </div>
      
    </div>
  )
}

export default SectionFour
