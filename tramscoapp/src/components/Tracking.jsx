import React from 'react'
import wwwicon from '../images/Iconfeatherglobe.png'
import planeicon from '../images/airplane.png'
import shipicon from '../images/cargo-ship.png'
import '../components/Tracking.css'


const Tracking = () => {
  return (
    <div>
        <div className='container-1'>
            <h2>Easily Track Your Shipment</h2>
            <div>
                <img src={wwwicon} alt='wwwicon'>
                </img>
                <p>5+</p>
                <p>countries</p>
            </div>

            <div>
                <img src={shipicon} alt='shipicon'>
                </img>
                <p>10+</p>
                <p>vessels</p>
            </div>

            <div>
                <img src={planeicon} alt='planeicon'>
                </img>
                <p>5+</p>
                <p>plane</p>
            </div>

        </div>
        
        <div className='container-2'>

        </div>
    </div>
  )
}

export default Tracking