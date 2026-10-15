import React from 'react'
import '../Styles/Menu.css';
import HeroTitle from '../Components/HeroTitle';
import { heroData } from '../data/heroData';
import MenuSection from '../Components/MenuSection';

const Menu = () => {
  return (
    <div className='menu-bg'>
      <main className='div-menu'>
        <HeroTitle {...heroData.menu} />
        <MenuSection />
      </main>
    </div>

    // <div className='Gen'>
    //   <div className='Gen-content'>
    //     <h1 className='Gen-title'>Menú</h1>
    //     <p>Explora nuestra deliciosa selección de platos.</p>
    //   </div>
    // </div>
  )
}

export default Menu