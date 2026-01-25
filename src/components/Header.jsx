import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/logo.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="container header-container">
                <Link to="/" className="logo">
                    <img src={logo} alt="Pameltex" className="logo-img" />
                </Link>
                <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
                    <Link to="/our-company" className="nav-link" onClick={() => setIsMenuOpen(false)}>Our Company</Link>
                    <Link to="/individual-therapy" className="nav-link" onClick={() => setIsMenuOpen(false)}>Individual Therapy</Link>
                    <Link to="/corporate-services" className="nav-link" onClick={() => setIsMenuOpen(false)}>Corporate Services</Link>
                    <Link to="/consultancy-services" className="nav-link" onClick={() => setIsMenuOpen(false)}>Consultancy Services</Link>
                    <Link to="/faq" className="nav-link" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
                    <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                    <Link to="/login" className="btn btn-outline" onClick={() => setIsMenuOpen(false)}>Sign In</Link>
                    <Link to="/signup" className="btn btn-solid" onClick={() => setIsMenuOpen(false)}>Sign Up</Link>

                </nav>
                <button className="menu-toggle" aria-label="Menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
};

export default Header;
