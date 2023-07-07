import React from 'react'
import './Hero.css'
import { useNavigate } from "react-router-dom";


function Hero() {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/create`; 
    navigate(path);
  }
  return (
    <div className='Hero'>
      <div className='hero-container'>
      <h1 className='hero-heading'>Welcome to Wanderlog</h1>
        <h2 className='hero-subheading'>Best place to keep your memories.</h2>
        <div className='hero-btns'>
            <button className='secondary'>View Jorunals</button>
            <button onClick={routeChange} className='primary-hero'>Create Journal</button>
        </div>
      </div>
       
    </div>
  )
}

export default Hero