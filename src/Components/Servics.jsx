import React from 'react'
import '../Styles/Servics.css'
import { services } from '../data/aboutData';

const ServiceIcon = ({ type }) => {
    const icons = {
        leaf: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
            </svg>
        ),
        chef: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z" />
                <path d="M6 17h12" />
            </svg>
        ),
        cocktail: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 22h8" />
                <path d="M12 11v11" />
                <path d="m19 3-7 8-7-8Z" />
            </svg>
        ),
        vegan: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M9 9h.01M15 9h.01M9 15c.5-1.5 1.5-2 3-2s2.5.5 3 2" />
            </svg>
        ),
    };
    return icons[type] || null;
};

const Servics = () => {
    return (
        <div>
            <section className="about-services">
                <div className="about-container">
                    <h2 className="about-serif-title">Qué hacemos</h2>
                    <div className="about-services-grid">
                        {services.map((service) => (
                            <div key={service.id} className="about-service-card">
                                <div className="about-service-icon">
                                    <ServiceIcon type={service.icon} />
                                </div>
                                <h3 className="about-service-title">{service.title}</h3>
                                <p className="about-service-desc">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Servics