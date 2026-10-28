import React from 'react'
import '../Styles/Home.css';
import Hero from '../Components/Hero';
import Servics from '../Components/Servics';
import AppStore from '../Components/AppStore';
const Home = () => {
  return (
    <div className='home'>
      <Hero />
      <Servics />
      <AppStore />
    </div>
    
  )
}

export default Home