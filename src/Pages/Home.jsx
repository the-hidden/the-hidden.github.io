import React from 'react'
import '../Styles/Home.css';
import Hero from '../Components/Hero';
import Services from '../Components/Services';
import Footer from '../Components/Fooder';

const Home = () => {
  return (
    <div className='home'>
      <Hero />
      <Services />
      {/* <Footer /> */}
    </div>
    
  )
}

export default Home