import React from 'react'
import HeadCap from './Major/HeadCap'
import BodyCap from './Major/BodyCap'
import Money from './Major/Money'
import AddCart from './Buttons/AddCart'


const ProductItem = ({item, addCart}) => {
    return (
        <div className="cart">
            <AddCart addToCart={addCart} item={item}/>
            <img src={item.image} alt="" className='cart-image' />
            <HeadCap title={item.name} />
            <BodyCap title={item.desc}/>
            {/* <div className="color-money"> */}
            {/* <CircleColors/> */}

            <Money name={item.prices} />
            {/* </div> */}
        </div>
    )
}

export default ProductItem
