import React from 'react'
import SectionHead from '../Major/SectionHead'
import '../../Assets/css/sectionthree.css'
import ShopAll from '../Buttons/ShopAll'
import Bottle from '../../Assets/images/bottle.png'
import Kalabash from '../../Assets/images/calabash.png'
import { useState } from 'react'
import ProductItem from '../ProductItem'

// import CircleColors from '../Major/CircleColors'

const SectionThree = () => {
  const [cartItem, setCartItem] = useState([
    {
      id: 1,
      name: 'Aroma Diffuser',
      desc: 'Original products comes in three styles of color, usb charger',
      price: '$20',
      image: Kalabash
    },
    {
      id: 2,
      name: 'Aroma Diffuser',
      desc: 'Original products comes in three styles of color, usb charger',
      price: '$20',
      image: Bottle
    },
  ])

  const cartItems = localStorage.getItem('cartItems') || []
  // localStorage.setItem('cartItems', [1, 'item 1', 20])

  const handleCart = (item) => {
    // e.preventDefault();

    if (cartItems.length > 0) {
      updateCart(item);
      return;
    }

    console.log(item);

    let data = {
      id: item.id,
      name: item.name,
      qty: 1,
      price: item.price
    }

    cartItems.push(data)
    localStorage.setItem('cartItems', cartItems)

    console.log('Item added')
  }

  function updateCart() { }
  // const [cartIndex, setCartIndex] = useState(1)

  // console.log (Array.from({length: 3}));
  return (
    <div className='sectn-3 bgd'>
      <div className="row auto">
        <div className="col-4">
          <SectionHead title='Bestsellers' />
          <ShopAll />
        </div>
        <div className="col-5 colum flex">
          {cartItem.map(item => (<ProductItem key={item.id} item={item} addCart={handleCart} />))}

        </div>

      </div>
      {/* <div className="container-dots">
        {Array.from({length: 3}).map((item, index) => (
          <div className="dots">
            onclick={() => moveDot(index  + 1)} 
            className={cartIndex === index + 1 ? "dot active": "dot"}
          </div>
        ))}
      </div> */}

    </div>
  )
}

export default SectionThree
