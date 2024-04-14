import React from 'react'
import './CourseIcons.css'
import { LuChefHat } from "react-icons/lu";
import { PiCookingPot } from "react-icons/pi";
import { IoIosNutrition } from "react-icons/io";
import { PiPlant } from "react-icons/pi";
import { PiHamburger } from "react-icons/pi";
import { IoEarthOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import sound from '../../assets/button-click.wav'

function CourseIcons() {

    const play = () => {
        new Audio(sound).play()
    }

  return (
    <div className='courses-icon-container'>
        <div className="all-courses-icon-container">

            <div className='course-icon-cover'>
                <div className='course-icon-background course-icon-background-1'></div>
                <div className='course-icon-header'>
                    <h3>Chef Skills</h3>
                    <LuChefHat className='course-icon-img' />
                </div>
                <p>Master the skills and techniques that will take your culinary abilities to the next level and help you excel in the food industry.</p>
                <Link><button className='course-icon-btn' onClick={play}>Register</button></Link>
            </div>

            <div className='course-icon-cover'>
                <div className='course-icon-background course-icon-background-2'></div>
                <div className='course-icon-header'>
                    <h3>Cooking Essentials</h3>
                    <PiCookingPot className='course-icon-img' />
                </div>
                <p>Learn the essential skills and techniques that will lead to a lifetime of restaurant-quality cooking.</p>
                <Link><button className='course-icon-btn' onClick={play}>Register</button></Link>
            </div>

            <div className='course-icon-cover'>
                <div className='course-icon-background course-icon-background-3'></div>
                <div className='course-icon-header'>
                    <h3>Nutrition in Cooking</h3>
                    <IoIosNutrition className='course-icon-img' />
                </div>
                <p>Master cookery and nutrition skills for health and well-being with this 20-week Accredited Online Nutrition Course.</p>
                <Link><button className='course-icon-btn' onClick={play}>Register</button></Link>
            </div>

            <div className='course-icon-cover'>
                <div className='course-icon-background course-icon-background-4'></div>
                <div className='course-icon-header'>
                    <h3>Plant-Based Cooking</h3>
                    <PiPlant className='course-icon-img' />
                </div>
                <p>Learn the skills and techniques that will lead to a lifetime of plant-based and planet-friendly meals.</p>
                <Link><button className='course-icon-btn' onClick={play}>Register</button></Link>
            </div>

            <div className='course-icon-cover'>
                <div className='course-icon-background course-icon-background-5'></div>
                <div className='course-icon-header'>
                    <h3>Teen's Kitchen</h3>
                    <PiHamburger className='course-icon-img' />
                </div>
                <p>Teen's Kitchen is a 6-week immersive and interactive online cookery course and certificate exclusively for young adults aged 13-18.</p>
                <Link><button className='course-icon-btn' onClick={play}>Register</button></Link>
            </div>

            <div className='course-icon-cover'>
                <div className='course-icon-background course-icon-background-6'></div>
                <div className='course-icon-header'>
                    <h3>International Cuisine</h3>
                    <IoEarthOutline className='course-icon-img' />
                </div>
                <p>Students will learn to prepare dishes from various cultures, gaining insight into different ingredients, flavors, and cooking methods.</p>
                <Link><button className='course-icon-btn' onClick={play}>Register</button></Link>
            </div>

        </div>
    </div>
  )
}

export default CourseIcons