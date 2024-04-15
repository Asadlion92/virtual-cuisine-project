import React from 'react'
import './About.css'
import aboutBanner from '../../images/about-banner.png'
import aboutIcon1 from '../../images/about-icon1.png'
import aboutIcon2 from '../../images/about-icon2.png'
import aboutIcon3 from '../../images/about-icon3.png'
import aboutIcon4 from '../../images/about-icon4.png'
import aboutIcon5 from '../../images/about-icon5.png'

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
      <div className="what-we-offer-container">
        <div className="our-mission-header">
          <h2>WHAT WE OFFER</h2>
        </div>
        <div className="what-we-offer-items">
          <div className="what-we-offer-item1">
            <div className="what-we-offer-content">
              <h3>Online Cooking Courses</h3>
              <p>Dive into our comprehensive range of online cooking courses designed to cater to various skill levels and interests. From mastering the fundamentals of knife skills to exploring the intricacies of gourmet cuisine, our courses are crafted by expert chefs to ensure an enriching and immersive learning experience.</p>
            </div>
            <img src={aboutIcon2} className='offer-icon'/>
          </div>
          <div className="what-we-offer-item2">
            <img src={aboutIcon3} className='offer-icon'/>
            <div className="what-we-offer-content">
              <h3>Recipe Library</h3>
              <p>Explore our extensive library of recipes spanning across different cuisines, dietary preferences, and occasions. Whether you're craving comforting classics, exotic flavors, or healthy alternatives, you'll find a diverse selection of mouthwatering recipes to tantalize your taste buds.</p>
            </div>
          </div>
          <div className="what-we-offer-item1">
            <div className="what-we-offer-content">
              <h3>Interactive Learning</h3>
              <p>Engage with our vibrant community of fellow food enthusiasts through interactive forums, live Q&A sessions, and virtual cooking challenges. Share your culinary triumphs, seek advice from seasoned chefs, and connect with like-minded individuals who share your passion for food.</p>
            </div>
            <img src={aboutIcon4} className='offer-icon'/>
          </div>
          <div className="what-we-offer-item2">
            <img src={aboutIcon5} className='offer-icon'/>
            <div className="what-we-offer-content">
              <h3>Personalized Guidance</h3>
              <p>Receive personalized guidance and feedback from our experienced instructors to help you hone your cooking skills and overcome any challenges you may encounter along the way. Whether you're struggling with a tricky technique or seeking advice on ingredient substitutions, our team is here to support you every step of the way.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About