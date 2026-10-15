import React from 'react'
import '../Styles/Contacto.css'
import HeroTitle from '../Components/HeroTitle';
import { heroData } from '../data/heroData';
import Location from '../Components/Location';




const Contacto = () => {
  return (
      <div className='Contact'>
        <HeroTitle {...heroData.location} />
        <Location />
      </div>
  )
}

export default Contacto