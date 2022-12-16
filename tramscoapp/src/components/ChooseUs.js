import React from 'react'
import AboutSlider from './AboutSlider'
import './ChooseUs.css'
import picone from '../images/MaskGroup6.png';
// import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'


const ChooseUs = () => {
  return (
    <div className='chwrapper'>
      <div className='choose_us-wrapper'>
      <h1 className='h_title'> Why Choose Us ?</h1>
        <AboutSlider/>
      </div>

      <div class="CSSgal2">

  <s id="ss1"></s> 
  <s id="ss2"></s>
  <s id="ss3"></s>
  <s id="ss4"></s>

  <div class="slider2">
    <div class="background" >
    <div className='d-block'> 
        <img
          className="dblock"
          src={picone}
          alt="First slide"
        />
        
        <div className='pl-5'>
          <p className='ledex_text'>With over 20 years of experience in planning transport operations,
            clearing customs, projectingforwarding, break haulage, warehousing,
            and export of any commodity, we are the professionals.
            We provide thorough and affordable freight forwarding that aids our
            clients with their various and varying transportation requirements and put 
            smiles on their faces. We take a lot of time speaking with each client one-on-one 
            to understand and handle their shipping needs. 

          </p>
        </div>
        
      </div>
			
		</div>
    <div class="background" >
			<h2>Slide 2</h2>
		</div>
    <div class="background" >
			<h2>Slide 3</h2>
		</div>
    <div class="background" >
			<h2>Slide 4</h2>
		</div>
  </div>
  
  <div class="prevNext2">
    <div><a href="#ss4"> </a><a href="#ss2"> </a></div>
    <div><a href="#ss1"> </a><a href="#ss3"> </a></div>
    <div><a href="#ss2"> </a><a href="#ss4"> </a></div>
    <div><a href="#s3s"> </a><a href="#ss1"> </a></div>
  </div>

  <div class="bullets2">
    <a href="#ss1"> </a>
    <a href="#ss2"> </a>
    <a href="#ss3"> </a>
    <a href="#ss4"> </a>
  </div>

</div>
        
    </div>
  )
}

export default ChooseUs