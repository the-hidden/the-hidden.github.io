import React from 'react';
import '../Styles/Navbar.css';
import { Link } from 'react-router-dom';
import lgo from '../assets/lg.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <span className="nav-link-logo">
                    <img src={lgo} alt="Logo" className="nav-logo" />
                </span>
            </Link>

            <div className="nav-links">
                <Link to="/" className="nav-link-text">
                Home
                </Link>
                <Link to="/Menu" className="nav-link-text">
                Menu
                </Link>
                <Link to="/Nosotros" className="nav-link-text">
                Nosotros
                </Link>
                <Link to="/Contacto" className="nav-link-text">
                Contacto
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;
