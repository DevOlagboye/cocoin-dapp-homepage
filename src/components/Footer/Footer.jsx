import React from 'react'
import { FaInstagram, FaTwitter, FaTelegram, FaFacebook,FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='social-text'>
            <div className='social-icons'>
                    <a href="##"><FaInstagram/></a>
                    <a href='##'><FaTwitter/></a>
                    <a href="##"><FaTelegram/></a>
                    <a href="##"><FaFacebook/></a>
            </div>
            <div className='footer-text'>
                <h3>Join our community</h3>
            </div>
        </div>
        <div className='footer-details'>
            <div className='footer-quote-location'>
                <h5>“The one who owns the information — <br/>owns the world!”</h5>
                <a href="##"><FaMapMarkerAlt/> <span>Los Angeles, Lamen St. 45, 23-000</span></a>
                <a href="##"><FaPhoneAlt/> <span>+8-567-283-9983</span></a>
                <a href='##'><FaEnvelope/> <span>cucoin@gmail.com</span></a>
            </div>
            <div className='footer-form'>
                <form>
                <div className='input-name'>
                    <input type="text" name="" id="" placeholder='Name'/>
                    <input type="text" name="" id="" placeholder='Surname'/>
                </div>
                <input type="email" name="" id="" placeholder='Email' className='input-email'/>
                <button type='submit'>Sign up</button>
                </form>
            </div>
        </div>
        <p className='footer-copyright'>Cucoin © Copyright {new Date().getFullYear()}. All rights reserved</p>
    </div>
  )
}

export default Footer