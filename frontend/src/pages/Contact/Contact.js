import React from 'react';
import './contact.scss';
import Header from '../../components/Header/Header';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaMailBulk, FaMapMarkerAlt, FaMobileAlt, FaPinterestSquare, FaTwitterSquare } from 'react-icons/fa';

function Contact() {
  return (
    <>
      <Header pageTitle={"contact"} />
      <div className="contact-wrapper" >

        <h2>Get in touch with us !</h2>

        <div className='contact-header'>
          <div className='contact-header-phone'>
            <FaMobileAlt className='header-icon' />
            <p className='header-title'>PHONE</p>
            <p> +387 63 831 458 </p>
            <p> +387 63 831 458 </p>
          </div>
          <div className='contact-header-phone'>
            <FaMapMarkerAlt className='header-icon' />
            <p className='header-title'>ADDRESS</p>
            <p> 8 Mediteranskih Igara 2, 21000 </p>
            <p> Split, Hrvatska </p>
          </div>
          <div className='contact-header-phone'>
            <FaMailBulk className='header-icon' />
            <p className='header-title'>EMAIL</p>
            <p> kazimir.bekavac995@gmail.com </p>
            <p> kazimir.bekavac995@gmail.com </p>
          </div>
        </div>

        <div className='contact-main'>
          <p> if you got any questions </p>
          <p> please do not hesitate to send us a message </p>
          <form className='contact-main-form'>
            <label htmlFor="clientName">Your Name</label>
            <input  className="contact-main-form-input"
                    id="clientName" 
                    type ="text"
                    name="clientName" 
            />

            <label htmlFor="clientEmail">Your Email</label>
            <input  className="contact-main-form-input"
                    id="clientEmail" 
                    type ="email"
                    name="clientEmail" 
            />

            <label htmlFor="clientSubject">Subject</label>
            <input  className="contact-main-form-input"
                    id="clientSubject" 
                    type ="text"
                    name="clientSubject" 
            />

            <label htmlFor="clientMessage">Message</label>
            <textarea  className="contact-main-form-input"
                    id="clientMessage" 
                    name="clientMessage" 
                    rows="5" cols="50"
            >
            </textarea>

            <button type='submit'>
              Send message
            </button>

          </form>
        </div>

        <div className='contact-footer'>
          <h2> Connect with us !</h2>
          <div className='contact-footer-social'>
            <FaFacebookSquare  />
            <FaTwitterSquare />
            <FaPinterestSquare />
            <FaInstagramSquare />
            <FaLinkedin />
          </div>
        </div>

      </div>
    </>
  )
}

export default Contact;