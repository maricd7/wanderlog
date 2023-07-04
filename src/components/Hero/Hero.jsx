import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <div>
        <h1 className='hero-heading'>Welcome to Wanderlog</h1>
        <h2 className='hero-subheading'>Best place to keep your memories.</h2>
        <div className='hero-btns'>
            <button className='secondary'>View Jorunals</button>
            <button className='primary-hero'>Create Journal</button>
        </div>
    </div>
  )
}

export default Hero