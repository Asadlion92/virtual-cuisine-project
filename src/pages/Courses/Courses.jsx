import React from 'react'
import './Courses.css'
import coursesBanner from '../../images/courses-banner.png'
import CourseIcons from './../../components/CourseIcons/CourseIcons';

function Courses() {
  return (
    <div className='courses-container'>
      <div className='courses-banner-container'>
        <div style={{
          width: '100%',
          height: '90vh',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: `url(${coursesBanner})`,
          filter: 'brightness(40%)',
        }}></div>
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