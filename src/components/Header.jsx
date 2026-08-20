import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../assets/pameltex-group-logo.png';

const NAV_ITEMS = [
    { label: 'Home',                   to: '/' },
    { label: 'Psychosocial Risk',      to: '/psychosocial-risk' },
    { label: 'HSE & Industrial Hygiene', to: '/hse-industrial-hygiene' },
    { label: 'Business Consulting',    to: '/business-consulting' },
    { label: 'Sectors',               to: '/sectors' },
    { label: 'Insights',              to: '/insights' },
    { label: 'About',                 to: '/about' },
];

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close mobile menu on route change
    const handleNavClick = () => setMenuOpen(false);

    return (
        <header className={`header${scrolled ? ' scrolled' : ''}`}>
            <div className="container header__inner">

                {/* Logo */}
                <Link to="/" className="header__logo" onClick={handleNavClick} aria-label="Pameltex home">
                    <img src={logo} alt="Pameltex" className="header__logo-img" />
                </Link>

                {/* Desktop nav */}
                <nav aria-label="Primary navigation">
                    <ul className={`header__nav${menuOpen ? ' open' : ''}`} role="list">
                        {NAV_ITEMS.map(({ label, to }) => (
                            <li className="nav-item" key={to}>
                                <NavLink
                                    to={to}
                                    end={to === '/'}
                                    className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                                    onClick={handleNavClick}
                                >
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                        {/* Mobile-only CTA */}
                        <li style={{ marginTop: '12px' }}>
                            <Link
                                to="/contact"
                                className="btn btn--primary btn--sm"
                                onClick={handleNavClick}
                                style={{ width: '100%', justifyContent: 'center', display: menuOpen ? 'flex' : 'none' }}
                            >
                                Request a Consultation
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Desktop CTA */}
                <div className="header__actions">
                    <Link to="/contact" className="btn btn--primary btn--sm">
                        Request a Consultation
                    </Link>
                    {/* Hamburger */}
                    <button
                        className="menu-toggle"
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={menuOpen}
                        aria-controls="primary-nav"
                        onClick={() => setMenuOpen(o => !o)}
                    >
                        <span className="menu-toggle__bar" />
                        <span className="menu-toggle__bar" />
                        <span className="menu-toggle__bar" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
