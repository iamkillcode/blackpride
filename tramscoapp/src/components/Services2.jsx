import React from 'react'
import './Services2.css'
import {services} from '../data'

const Services2 = () => {
  return (

<div class="CSSgal">

<s id="s1"></s> 
<s id="s2"></s>
<s id="s3"></s>
<s id="s4"></s>
<s id="s5"></s>

<div class="slider">

  <div class="background">
  <div>
  <p className='tagline mq'>Extraordinary
            Services.<br/> Extraordinary Excellence. 
            </p>
        </div>
  <div class="div2a d__box" id="s1">
                    <section className='position__top'>
                    <img src={services[0].icon} alt="shipicon" className='o__icon'/>
                    <h3 className='o__icon'>{services[0].title} 
                    <span className='lfarrow'>{services[0].arrow}</span>
                    </h3>
                <div> {services[0].content} </div>  
                </section>  
                </div>
          
                <div class="div7a"> 
                <p className='service-text'>In order to meet your demands, we provide the greatest standards on the market together with the most practical shipping options.<br /> 
                            </p><p className='service-text'>We give you the best of the best when it comes to shipping.</p>
                <button className='cntbutton2'>Contact Us</button>
                </div>
      </div>

  <div class="background">
        <div>
        <p className='tagline mq'>Extraordinary
            Services.<br/> Extraordinary Excellence. 
            </p>
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
      </div>


  <div class="background">
        <div>
        <p className='tagline mq'>Extraordinary
            Services.<br/> Extraordinary Excellence. 
            </p>
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
      </div>


  <div class="background">
        <div>
        <p className='tagline mq'>Extraordinary
            Services.<br/> Extraordinary Excellence. 
            </p>
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
      </div>

      <div class="background">
            <div>
            <p className='tagline mq'>Extraordinary
            Services.<br/> Extraordinary Excellence. 
            </p>
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
      </div>
</div>

<div class="prevNext">
<div><a href="#s5"> </a><a href="#s2">  </a></div>
  <div><a href="#s1"> </a><a href="#s3"> </a></div>
  <div><a href="#s2"> </a><a href="#s4"> </a></div>
  <div><a href="#s3"> </a><a href="#s5"> </a></div>
  <div><a href="#s4"> </a><a href="#s1">  </a></div>
</div>

<div class="bullets">
  <a href="#s1"> </a>
  <a href="#s2"> </a>
  <a href="#s3"> </a>
  <a href="#s4"> </a>
  <a href="#s5"> </a>

</div>

</div>

    
  )
}

export default Services2