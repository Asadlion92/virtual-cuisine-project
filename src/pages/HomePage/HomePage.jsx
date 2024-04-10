import React from 'react'
import './HomePage.css'
import HeroSlide from './../../components/HeroSlide/HeroSlide';
import OurServices from './../../components/OurServices/OurServices';
import OurMission from '../../components/OurMission/OurMission';
import Testimonials from '../../components/Testimonials/Testimonials';

function HomePage() {
  return (
    <div className='homepage-container'>
        <HeroSlide />
        <OurServices />
        <OurMission />
        <Testimonials />
    </div>
  )
}

export default HomePage