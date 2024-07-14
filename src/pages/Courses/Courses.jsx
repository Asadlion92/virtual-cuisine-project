import React from 'react'
import './Courses.css'
import coursesBanner from '../../images/courses-banner.png'
import CourseIcons from './../../components/CourseIcons/CourseIcons';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

function Courses() {
  return (
    <div>
      <div className='courses-banner-container'>
        <LazyLoadImage
          className='courses-slide-background'
          effect="blur"
          src={coursesBanner}
          width="100%"
          height="100%"
        />
        <div className='courses-text-container'>
          <h1 className='courses-text-header'>COURSES</h1>
        </div>
      </div>
      <div className='courses-sub-header'>
        <h2>Explore our most popular cooking courses!</h2>
      </div>

      <CourseIcons />
    </div>
  )
}

export default Courses