import React from 'react'
import { BiMap } from 'react-icons/bi'


const ContactForm = () => {
  return (
    <div>

<div className="get-in-touch">
      <div className="contact-map">
        <iframe title='contact map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.519700481653!2d-0.0028429860384274227!3d5.637666834392208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf87781991231b%3A0x3d136e96ab99f5b7!2sTramsco%20Shipping%20Agency!5e0!3m2!1sen!2sgh!4v1668240996650!5m2!1sen!2sgh" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    <div className='text_group1'>
      <div className="address" >
      <h3>
        Get In Touch
      </h3>
      <p className="office-address"> <BiMap className='form-icons' />
      Tema Comm 1, Accra-Ghana
      </p>
      <p className="phone-number">(631) 729 0745</p>
      <p className="email">contact@tramscoshipping.com</p>
      </div>

      <div className="input-group2">
            <div className="form_items">
              <input type="text" placeholder='Name' id="form1" className="form-text2" />
              <input type="email" placeholder='Email' id="form2" className="form-email" />
              <textarea size="14" type="text-area" placeholder='Write your message here' id="form3" className="form-area" />

            </div >
            <button type="submit" className="btn btn_pos">
              <a href='/' >Send</a>
            </button>
          </div>
          </div>

      </div>

    </div>
  )
}

export default ContactForm