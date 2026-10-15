import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Fooder.css';

const footerLinks = [
    { 
        id: 1, 
        title: 'Important Links', 
        links: [
        { name: 'Home', path: '/' },
        { name: 'Menu', path: '/Menu' },
        { name: 'Nosotros', path: '/Nosotros' },
        { name: 'Contacto', path: '/Contacto' },
        ]
    },
    { 
        id: 2, 
        title: 'Important Links', 
        links: [
        { name: 'Home', path: '/' },
        { name: 'Menu', path: '/Menu' },
        { name: 'Nosotros', path: '/Nosotros' },
        { name: 'Contacto', path: '/Contacto' },
        ]
    },
    { 
        id: 3, 
        title: 'Important Links', 
        links: [
        { name: 'Home', path: '/' },
        { name: 'Menu', path: '/Menu' },
        { name: 'Nosotros', path: '/Nosotros' },
        { name: 'Contacto', path: '/Contacto' },
        ]
    },
];

const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer-container">
            
            <div className="footer-top-section">
            
            <div className="footer-brand-column">
                <div className="footer-logo-area">
                <div className="footer-logo-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="#f5b041" />
                    <path d="M7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M12 17C14.7614 17 17 14.7614 17 12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </div>
                <h2 className="footer-logo-text">MANSION SAVOUR</h2>
                </div>
                
                <p className="footer-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde facere ab hic accusamus omnis dolor voluptatibus illo, tempore eum tenetur.
                </p>
                
                {/* <div className="footer-contact-info">
                <div className="footer-contact-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    <span>Noida, Uttar Pradesh</span>
                </div>
                <div className="footer-contact-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                    <span>+91 123456789</span>
                </div>
                </div> */}
                
                <div className="footer-social-icons">
                <a href="#" aria-label="Instagram">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" aria-label="Facebook">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" aria-label="LinkedIn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                </div>
            </div>

            {footerLinks.map((column) => (
                <div key={column.id} className="footer-link-column">
                <h3 className="footer-column-title">{column.title}</h3>
                <ul className="footer-link-list">
                    {column.links.map((link, index) => (
                    <li key={index}>
                        <Link to={link.path}>{link.name}</Link>
                    </li>
                    ))}
                </ul>
                </div>
            ))}

            </div>

            <div className="footer-bottom-section">
            <hr className="footer-divider" />
            <p className="footer-copyright">
                @copyright 2026 Derechos reservador || Hecho por Thehidden
            </p>
            </div>

        </div>
        </footer>
    );
    };

export default Footer;