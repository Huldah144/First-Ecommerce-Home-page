import React from 'react'
import Basket from '../../Assets/images/basket.png'
import Soap from '../../Assets/images/soap.png'
import ShopAll from '../Buttons/ShopAll'
import '../../Assets/css/sectionfive.css'

// import SectionThree from './SectionThree'

const SectionFive = () => {
  return (
    <div className='sectn-5 bgd'>
      <div className="row">
            <div className="col-4">
            <h2 className='best'>Trends</h2>
                <ShopAll/>
             {/* <button className='btn btn-shop'>Shop all</button> */}
            </div>
            <div className="col-6 flex">
                <div className="cart">
                <button className=' btn btn-add flex'> Add to cart</button>
                    <img src={Basket} alt="" className='cart-image'/>
                    <h2 className='head-cap'> <em>Basket Inner Beauty</em> </h2>
                    <p className='body-cap'>Luminiscent nutritive serum, rose petal hydrosol, mist and nourish mud cleanser.</p>
                    <p className='money'>$64,95</p>
                </div>
                <div className="cart">
                    <button className='btn btn-add'>Add to cart</button>
                    <img src={Soap} alt="" className='cart-image'/>
                    <h2 className='head-cap'> <em>Uplifted Handcrafted Bar Soap</em> </h2>
                    <p className='body-cap'>Is a peaceful and balancing with calendula, dried rose petals and lavender. </p>
                    <p className='money'>$7</p>
                </div>
            </div>
        </div>
      {/* <SectionThree/> */}
    </div>
  )
}

export default SectionFive
