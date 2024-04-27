import React from 'react'
import './YouTube.css'
import { FaYoutube } from "react-icons/fa";
import sampleBannerImg from '../../images/sample-banner.png'
import sound from '../../assets/button-click.wav'


function YouTube({recipeVideo}) {
    
  const play = () => {
    new Audio(sound).play()
  }

  return (
    <div className='youtube-container'>
        <div className="youtube-banner-container">
          <div style={{
              width: '100%',
              height: '100vh',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundImage: `url(${sampleBannerImg})`,
              filter: 'brightness(40%)',
            }}></div>
          <div className='youtube-text-container'>
          <h1 className='youtube-text-header'>Refer to the YouTube cooking tutorial for step-by-step instructions.</h1>
          <a href={recipeVideo} target='_blank'><FaYoutube className='youtube-logo' onClick={play}/></a>
        </div>
      </div>
    </div>
  )
}

export default YouTube

