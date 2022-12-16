import './Services.css'
import {services} from '../data'
import React from 'react'

const Services = () => {
  return (
    <div className='services__wrapper'>

        <div class="parent2">
            <div className='flex-in-grid'>
                <div class="div1a"> 
                    <section>
                        <h2 className='tagline bs'>Extraordinary<br/> Services.<br/> Extraordinary<br/> Excellence. 
                            </h2>
                    </section>
                </div>
                <div class="div2a d__box" >
                    <section className='position__top'>
                    <img src={services[0].icon} alt="shipicon" className='o__icon'/>
                    <h3 className='o__icon'>{services[0].title} 
                    <span className='lfarrow'>{services[0].arrow}</span>
                    </h3>
                <div> {services[0].content} </div>  
                </section>  
                </div>

                <div class="div3a d__box"> 
                <section className='position__top'>
                    <img src={services[1].icon} alt="shipicon" className='o__icon'/>
                    <h3 className='o__icon'>{services[1].title} 
                    <span className='lfarrow'>{services[1].arrow}</span>
                    </h3>
                <div> {services[1].content} </div>  
                </section>
                </div>

                <div class="div4a d__box"> 
                <section className='position__top'>
                    <img src={services[2].icon} alt="shipicon" className='o__icon'/>
                    <h3 className='o__icon'>{services[2].title} 
                    <span className='lfarrow'>{services[2].arrow}</span>
                    </h3>
                <div> {services[2].content} </div>  
                </section>
                </div>
                
                <div class="div5a d__box"> 
                <section className='position__top'>
                    <img src={services[3].icon} alt="shipicon" className='o__icon'/>
                    <h3 className='o__icon'>{services[3].title} 
                    <span className='lfarrow'>{services[3].arrow}</span>
                    </h3>
                <div> {services[3].content} </div>  
                </section>
                </div>

                <div class="div6a d__box"> 
                <section className='position__top'>
                    <img src={services[4].icon} alt="shipicon" className='o__icon'/>
                    <h3 className='o__icon'>{services[4].title} 
                    <span className='lfarrow'>{services[4].arrow}</span>
                    </h3>
                <div> {services[4].content} </div>  
                </section>
                </div>

                <div class="div7a"> 
                <p className='service-text'>In order to meet your demands, we provide the greatest standards on the market together with the most practical shipping options.<br /> 
                            </p><p className='service-text'>We give you the best of the best when it comes to shipping.</p>
                <button className='cntbutton2'>Contact Us</button>
                </div>
        
        </div>
        </div>
       
    </div>
  )
}

export default Services