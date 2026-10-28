import React, { useState } from 'react';
import '../Styles/Nosotros.css';
import HeroTitle from '../Components/HeroTitle';
import { heroData } from '../data/heroData';
import Servics from '../Components/Servics';
import Chefs from '../Components/Chefs';

const About = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <div className="about-page">
      <HeroTitle {...heroData.about} />
      <section className="about-invite">
        <div className="about-container">
          <h2 className="about-serif-title">Te invitamos a visitar nuestro restaurante</h2>
          <p className="about-invite-text">
            Hay lugares que se visitan y lugares que se recuerdan. Mansion Savour es de los segundos. Le invitamos a descubrir una cocina honesta, ingredientes seleccionados y un servicio pensado para que cada visita sea memorable.
          </p>
          <div className="about-video-wrapper">
            <img 
              src="/src/assets/Img/img-about.jpg" 
              alt="Restaurant interior" 
            />
            <button className="about-play-btn" aria-label="Play video" onClick={() => setIsVideoOpen(true)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
            </button>
          </div>
          {isVideoOpen && (
            <div className="about-video-modal" onClick={() => setIsVideoOpen(false)}>
              <div className="about-video-modal-content" onClick={(e) => e.stopPropagation()}>
  
                <iframe
                  width="100%"
                  height="100%"
                  src="/src/assets/Video/Restaurant Ad Video.mp4"
                  title="Video del restaurante"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </section>

      <Servics />
      <Chefs />

    </div>
  );
};

export default About;