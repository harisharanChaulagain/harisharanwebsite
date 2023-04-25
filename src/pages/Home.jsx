import React from 'react'
import HeroSection from '../components/HeroSection'

const Home = () => {
  const data = {
    name: 'Hari Sharan Chaulagain',
    image:'./images/hari.jpg'
  }
  return (
  
      <HeroSection {...data}/>
    
  )
}

export default Home