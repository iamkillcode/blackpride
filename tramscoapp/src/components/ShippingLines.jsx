import React from 'react'
import lineimage1 from '../images/Group 109.png'
import lineimage2 from '../images/Group 108.png'
import './ShippingLines.css'

const ShippingLines = () => {
  return (
    <div className='line_container'>
       <h1 className='line_head'>Our Shipping Lines</h1>
        <section className='line_images'>
        
        <img className='line_image1' src={lineimage1} alt='shipping line images'/>
        <img className='line_image2' src={lineimage2} alt='shipping line images'/>
        </section>
    </div>
  )
}

export default ShippingLines