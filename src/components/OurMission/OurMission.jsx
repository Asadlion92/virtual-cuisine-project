import React from 'react'
import './OurMission.css'
import missionImage from '../../images/our-mission.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function OurMission() {
  return (
    <div className='mission-container'>
    {/* REMOVE THE POSITION RELATIVE INSIDE THE MISSION CONTAINER AND CREATE A NEW PARENT DIV AND HAVE THAT SET TO POSITION RELATIVE */}
      <div className='mission-title-banner'>OUR MISSION</div>
      {/*ON 6/21, I MOVED THE MISSION TITLE BANNER ABOVE THE MISSION BANNER TO CENTER THE TEXT OVERLAY ON THE IMAGE */}
      <div className='mission-banner'>
        {/* <div className='mission-title-banner'>OUR MISSION</div> */}

          {/* <div style={{
          width: '100%',
          height: '100vh',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url(${missionImage})`,
          filter: 'brightness(40%)',
        }}></div> */}

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