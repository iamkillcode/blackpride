import React from 'react'
import './Footer.css'
import logo from '../logo.png'
import { FiFacebook, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { FaInstagram, } from 'react-icons/fa'
import { AiOutlineRight } from 'react-icons/ai'
import { BiChevronRight } from 'react-icons/bi'
import ContactForm from './ContactForm'


const Footer = () => {
  return (
    <div className='footer_wrapper'>
      <div className='sec-footer' >
        <div className='footer_container'>

          <div className="sec1">
            <img src={logo} className="logo2" alt='logo'></img>
            <p>
              Our staff is prepared to streamline your procedures,
              whether it be shipping, tracking, or consignment
              from Ghana to any place around the globe.
            </p>

            <div className="social-icons">
              <FiFacebook className='icns' />
              <FiLinkedin className='icns' />
              <FaInstagram className='icns' />
              <FiTwitter className='icns' />
            </div>

          </div>


          <div className="sec2">
            <h2>Services</h2>
            <ul className="our-services-footer">
              <li><a href='/' ><AiOutlineRight /> Track Shipment </a></li>
              <li><a href='/' ><AiOutlineRight /> Sea Freight </a></li>
              <li><a href='/' ><AiOutlineRight /> Air Freight </a></li>
              <li><a href='/' ><AiOutlineRight /> Land Freight </a></li>
              <li><a href='/' ><AiOutlineRight /> Warehousing </a></li>
              <li><a href='/' ><AiOutlineRight /> Shipping Services </a></li>
            </ul>
          </div>


          <div className='sec3'>
            <h2>Our Company</h2>
            <ul className="our-company-footer">
              <li> <a href='/' > <AiOutlineRight /> Leadership & Excellence </a> </li>
              <li> <a href='/' > <AiOutlineRight /> Competetive Pricing </a> </li>
              <li> <a href='/' > <AiOutlineRight /> Client Favourite </a> </li>
            </ul>
          </div>

        </div>

        <div className="newsletter">
          <h2>Subscribe to our Newsletter</h2>
          <p>Never miss any updates and promotions on our deals and quotes.</p>
          <div className="input-group">
            <div className="form-outline">
              <input type="email  " id="form1" className="form-control" />

            </div >
            <button type="button" className="btn">
              <i><BiChevronRight /> </i>
            </button>
          </div>
        </div>
      </div>
      <ContactForm />

    
    </div>
  )
}

export default Footer