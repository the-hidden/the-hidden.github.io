import React, { useState } from 'react'
import food1 from '../assets/Img/Fd1.png'
import food2 from '../assets/Img/Fd2.png'
import food3 from '../assets/Img/Fd3.png'
import '../Styles/Hero.css'

const ImageList = [
  {
    id: 1,
    img: food1,
  },
  {
    id: 2,
    img: food2,
  },
  {
    id: 3,
    img: food3,
  }
];

const Hero = () => {
  const [imageId, setImageId] = useState(food1);
  return (
    <div className='hero'>
      <div className='hero-container'>
        <div className='hero-Container-grid'>
          <div className='hero-div-title'>
            <h1 className='hero-title'>Bienvenidos a Masion Savour</h1>
            <p className='hero-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ullam soluta aperiam nobis vitae beatae quam iste illum vero esse.</p>
          </div>
          <div className='hero-div-img'>
            <div className='hero-cont-img'>
              <img src={imageId} alt="img-rot" className='hero-img' />
            </div>
            <div className='hero-div-list'>
              {ImageList.map((item) => (
                <img
                  key={item.id}
                  src={item.img}
                  className='hero-img-list'
                  onClick={() => setImageId(item.img)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero