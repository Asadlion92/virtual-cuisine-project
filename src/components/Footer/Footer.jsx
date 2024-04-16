import React from 'react'
import './Footer.css'
import { BiSolidDish } from 'react-icons/bi'
import { MdOutlineMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-logo'>
            <BiSolidDish className='footer-logo-img' />
            <div className='footer-text'>Virtual Cuisine</div>
        </div>
        <div className="footer-content-container">
            <div className="footer-left-content">
                <h3>Start Exploring</h3>
                <p>Browse our course offerings, discover new recipes, and join our community of passionate food lovers. The kitchen awaits - let's start cooking!</p>
            </div>
            <div className="footer-right-content">
                <div className="footer-browse">
                    <h3>Browse</h3>
                    <Link to='/'>Home</Link>
                    <Link to='/courses'>Courses</Link>
                    <Link to='/about'>About Us</Link>
                    <Link to='/recipes'>Recipes</Link>
                    <Link to='/contact'>Contact Us</Link>
                </div>
                <div className="footer-courses">
                    <h3>Courses</h3>
                    <a href="">Chef Skills</a>
                    <a href="">Cooking Essentials</a>
                    <a href="">Nutrition In Cooking</a>
                    <a href="">Plant-Based Cooking</a>
                    <a href="">Teen's Kitchen</a>
                    <a href="">International Cuisine</a>
                </div>
                <div className="footer-contact">
                    <h3>Contact Us</h3>
                    <div className='email-container'>
                        <MdOutlineMail className='email'/>
                        <div>support@virtualcusine.com</div>
                    </div>
                    <div className='phone-container'>
                        <FaPhone className='phone'/>
                        <div>1-800-555-5555</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-copyright-container">
            <div className='copyright'>
                <FaRegCopyright />
                <div className='copyright-content'>Copyright 2024</div>
            </div>
            <div className='privacy'>Privacy Policy</div>
        </div>
    </div>
  )
}

export default Footer