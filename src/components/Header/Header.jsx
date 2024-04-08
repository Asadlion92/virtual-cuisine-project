import React from 'react'
import './Header.css'
import { BiSolidDish } from 'react-icons/bi'

function Header() {
  return (
    <div className='header-container'>
        <nav className='nav-container'>
          <div className="header-left-content">
            <BiSolidDish className='logo-img' />
            <div>Virtual Cuisine</div>
          </div>
          <div className='header-right-content'>
              <a href="">Courses</a>
              <a href="">About Us</a>
              <a href="">Recipes</a>
              <a href="">Contact Us</a>
          </div>
        </nav>
    </div>
  )
}

export default Header