import React from 'react'
import './HomePage.css'
import HeroSlide from './../../components/HeroSlide/HeroSlide';
import OurServices from './../../components/OurServices/OurServices';

function HomePage() {
  return (
    <div className='homepage-container'>
        <HeroSlide />
        <OurServices />
    </div>
  )
}

export default HomePage