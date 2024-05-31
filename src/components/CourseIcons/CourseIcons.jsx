import React, {useState} from 'react'
import './CourseIcons.css'
import { LuChefHat } from "react-icons/lu";
import { PiCookingPot } from "react-icons/pi";
import { IoIosNutrition } from "react-icons/io";
import { PiPlant } from "react-icons/pi";
import { PiHamburger } from "react-icons/pi";
import { IoEarthOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import sound from '../../assets/button-click.wav'
import Modal from 'react-modal'
import modalBanner from '../../images/modal-background.png'

function CourseIcons() {

    const play = () => {
        new Audio(sound).play()
    }

    const [isOpen, setIsOpen] = useState(false)

    const callBoth = () => {
        play()
        setIsOpen(true)
    }

    const customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${modalBanner})`,
      }
    };

    const courseNames = [
        {
            name: `Chef Skills`,
            id: 1
        },

        {
            name: `Cooking Essentials`,
            id: 2
        },

        {
            name: `Nutrition in Cooking`,
            id: 3
        },

        {
            name: `Plant-Based Cooking`,
            id: 4
        },

        {
            name: `Teen's Kitchen`,
            id: 5
        },

        {
            name: `International Cuisine`,
            id: 6
        }
    ]
  
    Modal.setAppElement('#root');

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
                <Link><button className='course-icon-btn' onClick={callBoth}>Register</button></Link>
            </div>

            <div className='course-icon-cover'>
                <div className='course-icon-background course-icon-background-2'></div>
                <div className='course-icon-header'>
                    <h3>Cooking Essentials</h3>
                    <PiCookingPot className='course-icon-img' />
                </div>
                <p>Learn the essential skills and techniques that will lead to a lifetime of restaurant-quality cooking.</p>
                <Link><button className='course-icon-btn' onClick={callBoth}>Register</button></Link>
            </div>

            <div className='course-icon-cover'>
                <div className='course-icon-background course-icon-background-3'></div>
                <div className='course-icon-header'>
                    <h3>Nutrition in Cooking</h3>
                    <IoIosNutrition className='course-icon-img' />
                </div>
                <p>Master cookery and nutrition skills for health and well-being with this 20-week Accredited Online Nutrition Course.</p>
                <Link><button className='course-icon-btn' onClick={callBoth}>Register</button></Link>
            </div>

            <div className='course-icon-cover'>
                <div className='course-icon-background course-icon-background-4'></div>
                <div className='course-icon-header'>
                    <h3>Plant-Based Cooking</h3>
                    <PiPlant className='course-icon-img' />
                </div>
                <p>Learn the skills and techniques that will lead to a lifetime of plant-based and planet-friendly meals.</p>
                <Link><button className='course-icon-btn' onClick={callBoth}>Register</button></Link>
            </div>

            <div className='course-icon-cover'>
                <div className='course-icon-background course-icon-background-5'></div>
                <div className='course-icon-header'>
                    <h3>Teen's Kitchen</h3>
                    <PiHamburger className='course-icon-img' />
                </div>
                <p>Teen's Kitchen is a 6-week immersive and interactive online cookery course and certificate exclusively for young adults aged 13-18.</p>
                <Link><button className='course-icon-btn' onClick={callBoth}>Register</button></Link>
            </div>

            <div className='course-icon-cover'>
                <div className='course-icon-background course-icon-background-6'></div>
                <div className='course-icon-header'>
                    <h3>International Cuisine</h3>
                    <IoEarthOutline className='course-icon-img' />
                </div>
                <p>Students will learn to prepare dishes from various cultures, gaining insight into different ingredients, flavors, and cooking methods.</p>
                <Link><button className='course-icon-btn' onClick={callBoth}>Register</button></Link>
            </div>

            <Modal
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                style={customStyles}
                contentLabel="Register"
            >

                <div className='modal'>
                    <form>
                        <h1>Registration Form</h1>
                        <p>Please fill in the form below</p>
                        <br />
                        <div>
                            <label><h2>Full Name</h2></label>
                            <div className='fullname'>
                                <div className='first-name'>
                                    <input type='text' placeholder='Enter your first name' required/>
                                    <h5>First Name</h5>
                                </div>
                                <div className='last-name'>
                                    <input type='text' placeholder='Enter your last name' required/>
                                    <h5>Last Name</h5>
                                </div>
                            </div>
                            <br />
                            <div className='modal-contact-info'>
                                <div className='modal-email'>
                                    <label><h2>Email</h2></label>
                                    <input type='email' placeholder='Enter your email address' required/>
                                </div>
                                <div className='modal-phone'>
                                    <label><h2>Phone Number</h2></label>
                                    <input type='text' placeholder='Enter your phone number' required/>
                                </div>
                            </div>
                            <br />
                            <div className='modal-dropdown'>
                                <label><h2>Courses</h2></label>
                                <select required>
                                    <option value="">Select Your Course</option>
                                    {courseNames?.map((item, index)=><option value={item.id} key={index}>{item.name}</option>)}
                                </select>
                            </div>
                            <br />
                            <div className='modal-btns'>
                                <button className='cancel-modal' onClick={() => setIsOpen(false)}>Cancel</button>
                                <button className='submit-modal'>Submit</button>
                            </div>
                        </div>
                    </form>

                </div>
            </Modal>
        </div>
    </div>
  )
}

export default CourseIcons