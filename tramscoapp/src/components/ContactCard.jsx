import React from 'react'
import './ContactCard.css'
import './ContactCardMq.css'
import contactHeader from '../images/Group1.png'
import logo from '../logo.png'
const ContactCard = () => {
  return (
    <div className='container__main mx-auto'>
      <img src={contactHeader} alt='headerimage' className='contactcard__image'/>
      <div className='text__area'>
        <h4 className="para__title">Track Your Shipment</h4>
        <p className="para__sub">Enter your B/L Number to search your containment</p>
        <input placeholder='Search for BL number here' className='input__field'/>
        <button className='cntbutton'>Search</button>
      </div>
      <div className='lg'>
      <img src={logo} alt='logo-cnt' className='logo-cnt'></img>
      </div>
 
    </div>
  )
}

export default ContactCard