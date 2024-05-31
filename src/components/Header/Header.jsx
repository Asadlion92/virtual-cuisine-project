import {React, useState} from 'react'
import './Header.css'
import { Link, NavLink } from 'react-router-dom'
import { BiSolidDish } from 'react-icons/bi'
import sound from '../../assets/button-click.wav'

function Header() {

  const play = () => {
    new Audio(sound).play()
  }

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className='header-container'>
        <nav className='nav-container'>
          <div className="header-left-content">
            <Link to='/' onClick={play}>
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
            <ul className={menuOpen ? "open" : ""} onClick={() => {setMenuOpen(!menuOpen)}}>
              <li><NavLink to='/about' onClick={play}>About Us</NavLink></li>
              <li><NavLink to='/courses' onClick={play}>Courses</NavLink></li>
              <li><NavLink to='/recipes' onClick={play}>Recipes</NavLink></li>
              <li><NavLink to='/contact' onClick={play}>Contact Us</NavLink></li>
            </ul>
          </div>
        </nav>
    </div>
  )
}

export default Header