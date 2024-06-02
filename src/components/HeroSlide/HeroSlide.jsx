import React from 'react'
import './HeroSlide.css'
import heroImage from '../../images/hero-image.png'
import sound from '../../assets/button-click.wav'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

function HeroSlide() {

  const play = () => {
    new Audio(sound).play()
  }


  return (
    <div className='heroslide-container'>

      <LazyLoadImage
        className='testing'
        effect="blur"
        src={heroImage}
        width='100%' //width can be in percentage
        height={100} //height cannot be in percentage, just use 100
      />

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