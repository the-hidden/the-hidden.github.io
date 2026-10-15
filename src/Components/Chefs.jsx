import React from 'react'
import '../Styles/Chefs.css'
import { chefs } from '../data/aboutData';

const Chefs = () => {
    return (
        <div>
            <section className="about-chefs">
                <div className="about-container">
                    <h2 className="about-serif-title">Master Chef</h2>
                    <div className="about-chefs-wrapper">
                        <button className="about-slider-arrow about-slider-left" aria-label="Anterior">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="15 18 9 12 15 6" />
                            </svg>
                        </button>

                        <div className="about-chefs-grid">
                            {chefs.map((chef) => (
                                <div key={chef.id} className="about-chef-card">
                                    <img src={chef.image} alt={chef.name} className="about-chef-img" />
                                    <div className="about-chef-info">
                                        <div>
                                            <h4 className="about-chef-name">{chef.name}</h4>
                                            <p className="about-chef-role">{chef.role}</p>
                                        </div>
                                        <button className="about-chef-btn" aria-label="Ver perfil">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="7" y1="17" x2="17" y2="7" />
                                                <polyline points="7 7 17 7 17 17" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="about-slider-arrow about-slider-right" aria-label="Siguiente">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Chefs