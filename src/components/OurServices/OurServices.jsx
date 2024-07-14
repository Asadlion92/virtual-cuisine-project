import React from 'react'
import './OurServices.css'
import { LuChefHat } from "react-icons/lu";
import { PiCookingPot } from "react-icons/pi";
import { IoIosNutrition } from "react-icons/io";
import courseIconOne from '../../images/course-icon1.png'
import courseIconTwo from '../../images/course-icon2.png'
import courseIconThree from '../../images/course-icon3.png'
import beefImg from '../../images/beef.png'
import chickenImg from '../../images/chicken.png'
import seafoodImg from '../../images/seafood.png'
import sound from '../../assets/button-click.wav'
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function OurServices() {

    const play = () => {
        new Audio(sound).play()
    }

  return (
    <div className='services-container'>
        <div className='services-title-banner'>OUR SERVICES</div>
        <div className='top-courses-banner'>TOP COURSES</div>
        <div className='top-courses-container'>
            <div className='top-courses-icons-container'>
                <div className='top-courses-icon'>
                    <LazyLoadImage
                        className='top-courses-pic'
                        effect="blur"
                        src={courseIconOne}
                    />
                    <div className='top-courses-icon-header'>
                        <h3>Chef Skills</h3>
                        <LuChefHat className='top-courses-img' />
                    </div>
                    <p>Master the skills and techniques that will take your culinary abilities to the next level and help you excel in the food industry.</p>
                </div>
                <div className='top-courses-icon'>
                    <LazyLoadImage
                        className='top-courses-pic'
                        effect="blur"
                        src={courseIconTwo}
                    />
                    <div className='top-courses-icon-header'>
                        <h3>Cooking Essentials</h3>
                        <PiCookingPot className='top-courses-img' />
                    </div>
                    <p>Learn the essential skills and techniques that will lead to a lifetime of restaurant-quality cooking.</p>
                </div>
                <div className='top-courses-icon'>
                    <LazyLoadImage
                        className='top-courses-pic'
                        effect="blur"
                        src={courseIconThree}
                    />
                    <div className='top-courses-icon-header'>
                        <h3>Nutrition in Cooking</h3>
                        <IoIosNutrition className='top-courses-img' />
                    </div>
                    <p>Master cookery and nutrition skills for health and well-being with this 20-week Accredited Online Nutrition Course.</p>
                </div>
            </div>
            <div className='btn-container'>
                <Link to='/courses'>
                    <button 
                        className='btn'
                        onClick={play}>
                        Learn More
                    </button>
                </Link>
            </div>
            
        </div>
        <div className='top-recipes-banner'>TOP RECIPES</div>
        <div className='top-recipes-container'>
            <div className='top-recipes-icons-container'>
                <div className='top-recipes-icon'>
                    <LazyLoadImage
                        className='top-recipes-pic'
                        effect="blur"
                        src={beefImg}
                    />
                    <h1>BEEF</h1>
                </div>
                <div className='top-recipes-icon'>
                    <LazyLoadImage
                        className='top-recipes-pic'
                        effect="blur"
                        src={chickenImg}
                    />
                    <h1>CHICKEN</h1>
                </div>
                <div className='top-recipes-icon'>
                    <LazyLoadImage
                        className='top-recipes-pic'
                        effect="blur"
                        src={seafoodImg}
                    />
                    <h1>SEAFOOD</h1>
                </div>
            </div>
            <div className='btn-container'>
                <Link to='/recipes'>
                    <button 
                        className='btn'
                        onClick={play}>
                        Learn More
                    </button>
                </Link>
            </div>
            
        </div>
    </div>
  )
}

export default OurServices