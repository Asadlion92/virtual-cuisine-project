import React from 'react'
import './HomePage.css'
import HeroSlide from './../../components/HeroSlide/HeroSlide';
import OurServices from './../../components/OurServices/OurServices';
import OurMission from '../../components/OurMission/OurMission';

function HomePage() {
  return (
    <div className='homepage-container'>
        <HeroSlide />
        <OurServices />
        <OurMission />
    </div>
  )
}

export default HomePage