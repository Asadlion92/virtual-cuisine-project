import React from 'react'
import './About.css'
import aboutBanner from '../../images/about-banner.png'
import aboutIcon1 from '../../images/about-icon1.png'

function About() {
  return (
    <div className='about-container'>
      <div className="about-banner-container">
        <div style={{
            width: '100%',
            height: '50vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(${aboutBanner})`,
            filter: 'brightness(40%)',
          }}></div>
        <div className='about-text-container'>
          <h1 className='about-text-header'>ABOUT</h1>
        </div>
      </div>
      <div className='our-mission-container'>
          <div className="our-mission-header">
            <h2>OUR MISSION</h2>
          </div>
          <div className="our-mission-items">
            <img src={aboutIcon1} className='about-icon'/>
            <p className='our-mission-text'>At Virtual Cuisine, we believe that cooking is not just a necessity but a delightful journey of exploration and creativity. Our mission is to empower individuals worldwide to unleash their culinary potential, one recipe at a time. Through our online cooking courses and curated collection of recipes, we aim to inspire, educate, and instill confidence in every aspiring chef.</p>
          </div>
      </div>
    </div>
  )
}

export default About