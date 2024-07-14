import React from 'react'
import './OurMission.css'
import missionImage from '../../images/our-mission.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

function OurMission() {
  return (
    <div>
      <div className='mission-title-banner'>OUR MISSION</div>
      <div className='mission-banner'>

        <LazyLoadImage
          className='missionslide-background'
          effect="blur"
          src={missionImage}
          width='100%' //width can be in percentage
          height="100%" //height cannot be in percentage, just use 100
        />
          <div className='mission-text-container'>
            <p className='mission-text'>At Virtual Cuisine, we believe that cooking is not just a necessity but a delightful journey of exploration and creativity. Our mission is to empower individuals worldwide to unleash their culinary potential, one recipe at a time. Through our online cooking courses and curated collection of recipes, we aim to inspire, educate, and instill confidence in every aspiring chef.</p>
          </div>
      </div>

    </div>
  )
}

export default OurMission