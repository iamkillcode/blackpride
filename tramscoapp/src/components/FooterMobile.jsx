import React from 'react'
import './Footer.css'
import { FiFacebook, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { FaInstagram, } from 'react-icons/fa'
import { AiOutlineRight } from 'react-icons/ai'
import { BiChevronRight, BiMap } from 'react-icons/bi'

const FooterMobile = () => {
  return (
    <div className='footerMobile' >

<div className="address" >
      <h3>
        Get In Touch
      </h3>
      <p className="office-address"> <BiMap className='form-icons' />
      Tema Comm 1, Accra-Ghana
      </p>
      <p className="phone-number">(631) 729 0745</p>
      <p className="email">contact@tramscoshipping.com</p>

      <div className="social-icons">
              <FiFacebook className='icns' />
              <FiLinkedin className='icns' />
              <FaInstagram className='icns' />
              <FiTwitter className='icns' />
            </div>
      </div>

      


<div className="newsletter-mob">
          <h2>Subscribe to our Newsletter</h2>
          <p>Never miss any updates and promotions on our deals and quotes.</p>
          
            <div className="form-outline">
              <input type="email  " id="form1" className="form-control" />

            
            <button type="button" className="btn">
              <i><BiChevronRight /> </i>
            </button>
            </div >
          
        </div>
    </div>
  )
}

export default FooterMobile