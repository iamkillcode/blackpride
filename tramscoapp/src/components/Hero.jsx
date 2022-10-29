import React from 'react'
import './Hero.css'
import shpcontainerimg from '../images/shpcontainerimg.png'
const Hero = () => {
  return (
    <div className='container'>
        <img src={shpcontainerimg} alt='container-images' className='container-img'></img>
        <div className='descr-one'>
          <h1>No.1 Shipping Service in West Africa</h1>
          <p>Our staff is prepared to streamline your 
            procedures, whether it be shipping, tracking, or 
            consignment from Ghana to any place around 
            the globe.
            
          </p>

          <button onClick={alert} className='meeting-schedule'>Schedule a Meeting</button>

        </div>
    </div>
  )
}

export default Hero