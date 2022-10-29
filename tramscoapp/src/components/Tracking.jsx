import React from 'react'
import wwwicon from '../images/Iconfeatherglobe.png'
import planeicon from '../images/airplane.png'
import shipicon from '../images/cargo-ship.png'
import '../components/Tracking.css'
import ContactCard from './ContactCard'



const Tracking = () => {
  return (
    <div>

    <div class="parent">
        <div class="div1"> 
            <div className='container-1'>
                    <h1 className='fcolor'>Easily Track Your Shipment</h1>
            </div>
        </div>

            
            <div class="div2"> 
                <img src={wwwicon} alt='wwwicon' className='flt1'>
                </img>
                <div className='flt2'>
                <p className='htag'>5+</p>
                <p>countries</p>
                </div>
            </div>

            <div class="div3"> 
                <img src={shipicon} alt='shipicon' className='flt1'>
                </img>
                
                <div className='flt2'>
                <p className='htag'>10+</p>
                <p>vessels</p>
                </div>
            </div>

            <div class="div4"> 
                <img src={planeicon} alt='planeicon' className='flt1'>
                </img>
                <div className='flt2'>
                <p className='htag'>5+</p>
                <p>plane</p>
                </div>
            </div>
            

            <div class="div5"> 
            
            </div>

            <div class="div6">
                <p>
                    We take great pride in integrating local knowledge
                    with automated global services.
                    Phone us now for any inquiries.
                </p>
                
            </div>

            <div class="div7">
                <button onClick={alert} className="cntbutton">Contact Us</button>
            
            </div>

            <div class="div8"> 
            
            </div>

            <div class="div9">
            <div className='container-2'>
                    <ContactCard />
                    
                </div>
            
            </div>
    </div>

    </div>
  )
}

export default Tracking