import React from 'react'
import HeroSection from '../components/HeroSection'


const About = () => {
  const data = {
    name: "HARI SHARAN",
    image: "./images/hari1.jpg"
  }
  return (
    <HeroSection {...data}/>
  )
}

export default About