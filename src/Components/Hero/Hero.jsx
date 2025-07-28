import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
      <h1>We Empower IT Careers with Quality Training</h1>
      <p>Our industry-aligned courses and expert mentorship are designed to equip students with real-world skills, 
        hands-on experience, and the confidence to succeed in today's competitive IT job market.</p>
      <button className='btn'>Explore Programs <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
