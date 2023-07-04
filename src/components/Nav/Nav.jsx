import React from 'react'
import logo from '../resources/logo.png'
import './Nav.css'

function Nav() {
  return (
    <nav>
        <img className='logo' src={logo}></img>
        <ul className='nav-links'>
            <li className='nav-link active'>Home</li>
            <li className='nav-link'>Journals</li>
            <li className='nav-link'>Browse Journals</li>
            <button className='nav-btn'>Create Journal</button>
        </ul>
    </nav>
  )
}

export default Nav