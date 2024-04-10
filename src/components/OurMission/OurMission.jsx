import React from 'react'
import './OurMission.css'
import missionImage from '../../images/our-mission.png'

function OurMission() {
  return (
    <div className='mission-container'>
        <div className='mission-title-banner'>OUR MISSION</div>
        <div style={{
        width: '100%',
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${missionImage})`,
        filter: 'brightness(40%)',
      }}></div>
        <div className='mission-text-container'>
          <p className='mission-text'>At Virtual Cuisine, we believe that cooking is not just a necessity but a delightful journey of exploration and creativity. Our mission is to empower individuals worldwide to unleash their culinary potential, one recipe at a time. Through our online cooking courses and curated collection of recipes, we aim to inspire, educate, and instill confidence in every aspiring chef.</p>
        </div>
    </div>
  )
}

export default OurMission