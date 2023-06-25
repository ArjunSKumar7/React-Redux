import React from 'react'
import './CartButtons.css'
const BeforeCart = ({addToCart}) => {
  return (
    <div className='before-cart'>
        <button className='add-cart-button' onClick={addToCart}>Add to cart</button>
    </div>
  )
}

export default BeforeCart