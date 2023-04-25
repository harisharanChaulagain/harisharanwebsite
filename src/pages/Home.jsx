import HeroSection from '../components/HeroSection'
import { useGlobalContext } from '../Context'
import { useEffect } from 'react';

const Home = () => {

  const {updateHomePage} = useGlobalContext(); 

  useEffect(() => updateHomePage(), [])
  

  return (
  
      <HeroSection/>
    
  )
}

export default Home