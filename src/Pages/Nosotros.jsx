import React from 'react';
import '../Styles/Nosotros.css';
import HeroTitle from '../Components/HeroTitle';
import { heroData } from '../data/heroData';
import Servics from '../Components/Servics';
import Chefs from '../Components/Chefs';

const About = () => {
  return (
    <div className="about-page">
      <HeroTitle {...heroData.about} />
      {/* ============ WE INVITE ============ */}
      <section className="about-invite">
        <div className="about-container">
          <h2 className="about-serif-title">We Invite you to Visit Our Restaurant</h2>
          <p className="about-invite-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <div className="about-video-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80" 
              alt="Restaurant interior" 
            />
            <button className="about-play-btn" aria-label="Play video">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      <Servics />
      <Chefs />

    </div>
  );
};

export default About;




// import React from 'react'
// import '../Styles/Nosotros.css';
// import HeroTitle from '../Components/HeroTitle';
// import { heroData } from '../data/heroData';

// const Nosotros = () => {
//   return (
//       <div>
//         <HeroTitle {...heroData.about} />
//       </div>
    
//   )
// }

// export default Nosotros