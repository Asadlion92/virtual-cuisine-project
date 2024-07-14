import React from 'react'
import './Contact.css'
import contactBanner from '../../images/contact.png'
import getInTouchPic from '../../images/get-in-touch.png'
import { MdOutlineMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import sound from '../../assets/button-click.wav'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

function Contact() {

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(e)
  }

  const play = () => {
    new Audio(sound).play()
  }

  return (
    <div className='contact-container'>
      <div className="contact-banner-container">
          <LazyLoadImage
          className='contact-slide-background'
          effect="blur"
          src={contactBanner}
          width="100%"
          height="100%"
          />
        <div className='contact-text-container'>
          <h1 className='contact-text-header'>CONTACT US</h1>
        </div>
      </div>
      <div className='contact-title-banner'>GET IN TOUCH</div>
      <div className='contact-items-container'>
        <form className='contact-form-container' onSubmit={handleSearch}>
          <h2>HAVE QUESTIONS?</h2>
          <br />
          <input className='form-name' type="text" placeholder='Full Name' required />
          <br />
          <input className='form-email' type='email' placeholder='Email' required/>
          <br />
          <textarea className='form-message' placeholder='Message...' required></textarea>
          <br />
          <br />
          <input className='form-submit' type="submit" value="Submit" onClick={play} />
        </form>
        <LazyLoadImage
          className='contact-pic'
          effect="blur"
          src={getInTouchPic}
          />
      </div>
      <div className="contact-info-container">
        <div className='contact-email-container'>
          <MdOutlineMail className='contact-email'/>
          <div>support@virtualcusine.com</div>
        </div>
        <div className='contact-phone-container'>
          <FaPhone className='contact-phone'/>
          <div>1-800-555-5555</div>
        </div>
      </div>
    </div>
  )
}

export default Contact