import {React, useState} from 'react'
import './Header.css'
import { Link, NavLink } from 'react-router-dom'
import { BiSolidDish } from 'react-icons/bi'

function Header() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className='header-container'>
        <nav className='nav-container'>
          <div className="header-left-content">
            <Link to='/'>
              <BiSolidDish className='logo-img' />
              <div>Virtual Cuisine</div>
            </Link>
          </div>
          <div className="menu" onClick={() => {setMenuOpen(!menuOpen)}}>
            <span className={menuOpen ? "open" : ""}></span>
            <span className={menuOpen ? "open" : ""}></span>
            <span className={menuOpen ? "open" : ""}></span>
          </div>
          <div className='header-right-content'>
            <ul className={menuOpen ? "open" : ""}>
              <li><NavLink to='/courses'>Courses</NavLink></li>
              <li><NavLink to='/about'>About Us</NavLink></li>
              <li><NavLink to='/recipes'>Recipes</NavLink></li>
              <li><NavLink to='/contact'>Contact Us</NavLink></li>
            </ul>
          </div>
        </nav>
    </div>
  )
}

export default Header