import HeroSection from '../components/HeroSection'

const Home = () => {

  const data = {
    name: 'HARI SHARAN CHAULAGAIN',
    image:'./images/hari.jpg'
  }
  return (
  
      <HeroSection {...data}/>
    
  )
}

export default Home