import React from 'react'
import './HomePage.css'
import HeroSlide from './../../components/HeroSlide/HeroSlide';
import OurServices from './../../components/OurServices/OurServices';
import OurMission from '../../components/OurMission/OurMission';
import Testimonials from '../../components/Testimonials/Testimonials';
import GetStarted from '../../components/GetStarted/GetStarted';
import LazyLoadBackground from '../../components/LazyLoadBackground/LazyLoadBackground';

function HomePage() {
  return (
    <div className='homepage-container'>
        <HeroSlide />
        <OurServices />
        <OurMission />
        <Testimonials />
        <GetStarted />
        {/* <LazyLoadBackground /> */}
    </div>
  )
}

export default HomePage