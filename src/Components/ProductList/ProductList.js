import React,{useState} from 'react'
import products from  '../../api/product.json'
import BeforeCart from './CartButtons/BeforeCart'
import AfterCart from './CartButtons/AfterCart'
import './ProductList.css'
import {useSelector} from 'react-redux'
const ProductList = () => {
  const cart =useSelector((state)=>
    state.cart
  )
  console.log(cart)
  const [count, setCount] = useState(0);

  const addToCart = () => {
    setCount(count + 1)
   
  }
  return (
   <section className='container'>
{products.map((products,key)=>(
    <div className='product-container' key={key}>
      <img src={products?.image} alt="" />
      <h3>{products?.title}</h3>
      {count >0 ?   <AfterCart/>:<BeforeCart addToCart={addToCart}/>}
    
   
    </div>
))}
   </section>
  )
}

export default ProductList