import React from 'react'
import './OurServices.css'
import { LuChefHat } from "react-icons/lu";
import { PiCookingPot } from "react-icons/pi";
import courseIconOne from '../../images/course-icon1.png'
import courseIconTwo from '../../images/course-icon2.png'

function OurServices() {
  return (
    <div className='services-container'>
        <div className='services-title-banner'>OUR SERVICES</div>
        <div className='top-courses-banner'>TOP COURSES</div>
        <div className='top-courses-container'>
            <div className='top-courses-icons-container'>
                <div className='top-courses-icon'>
                    <div style={{
                        width: '348px',
                        height: '50vh',
                        backgroundSize: 'cover',
                        backgroundImage: `url(${courseIconOne})`,
                        borderRadius: '40px',
                        filter: 'brightness(50%)'
                    }}></div>
                    <div className='top-courses-icon-header'>
                        <h3>Chef Skills</h3>
                        <LuChefHat className='top-courses-img' />
                    </div>
                    <p>Master the skills and techniques that will take your culinary abilities to the next level and help you excel in the food industry.</p>
                </div>
                <div className='top-courses-icon'>
                    <div style={{
                        width: '348px',
                        height: '50vh',
                        backgroundSize: 'cover',
                        backgroundImage: `url(${courseIconTwo})`,
                        borderRadius: '40px',
                        filter: 'brightness(50%)'
                    }}></div>
                    <div className='top-courses-icon-header'>
                        <h3>Cooking Essentials</h3>
                        <PiCookingPot className='top-courses-img' />
                    </div>
                    <p>Learn the essential skills and techniques that will lead to a lifetime of restaurant-quality cooking.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurServices