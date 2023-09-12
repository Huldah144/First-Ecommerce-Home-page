import React from 'react'

const AddCart = ({item, addToCart}) => {
  return (
    <>
      <button className='btn btn-add' onClick={() => addToCart(item)}>Add to cart</button>
    </>
  )
}

export default AddCart
