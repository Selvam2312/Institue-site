import React from 'react'
import './About.css'
import about_img from '../../assets/about-1.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about_img' />
        <img src={play_icon} alt="" className='play_icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT INSTITUTE</h3>
        <h2>Empower Your Future with Expert IT Training</h2>
        <p>At Besant, we specialize in providing industry-focused training in Data Analytics, Data Science, and Full Stack Development. Our mission is to equip 
          students and professionals with real-world skills through hands-on projects, expert mentorship, and up-to-date curriculum aligned with current tech trends.</p>
        <p>Whether you're just starting your career or looking to upskill, our training programs are designed to bridge the gap between knowledge and industry 
          requirements. With modern infrastructure, experienced trainers, and a supportive learning environment, we help you build a strong foundation for a successful IT career.</p>
      </div>
    </div>
  )
}

export default About
