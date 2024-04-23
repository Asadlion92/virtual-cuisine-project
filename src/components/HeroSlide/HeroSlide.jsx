import React from 'react'
import './HeroSlide.css'
import heroImage from '../../images/hero-image.png'
import sound from '../../assets/button-click.wav'
import { Link } from 'react-router-dom'

function HeroSlide() {

  const play = () => {
    new Audio(sound).play()
  }

  return (
    <div className='heroslide-container'>
      <div style={{
        width: '100%',
        height: '90vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${heroImage})`,
        filter: 'brightness(40%)',
      }}></div>
      <div className='hero-text-container'>
          <h1 className='hero-text'>DISCOVER YOUR PERFECT ONLINE COOKING COURSE</h1>
          <Link to='/about'>
            <button 
              className='heroslide-btn'
              onClick={play}>
              Learn More
            </button>
          </Link>
      </div>

    </div>
  )
}

export default HeroSlide