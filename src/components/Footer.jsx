import { Link } from 'react-router-dom';
import logo from '../assets/pameltex-group-logo.png';
import {
    EMAIL_PRIMARY,
    ADDRESS_LINE1,
    ADDRESS_LINE2,
    COMPANY_NAME,
    COMPANY_REG,
    PHONE_DISPLAY,
    FCA,
    PAMELTECH,
    SOCIAL,
} from '../config/site';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__grid">

                    {/* Brand column */}
                    <div>
                        <img src={logo} alt="Pameltex" className="footer__logo-img" />
                        <p className="footer__desc">
                            Corporate consulting and contracting organisation specialising in
                            psychosocial risk, HSE & industrial hygiene, and business systems consulting.
                            Serving Botswana and the wider SADC region.
                        </p>
                        <div style={{ marginTop: '24px', fontSize: '0.8125rem', color: 'rgba(255,255,255,0.4)' }}>
                            <div>{COMPANY_NAME}</div>
                            <div>Registration: {COMPANY_REG}</div>
                            <div style={{ marginTop: '6px' }}>{ADDRESS_LINE1},</div>
                            <div>{ADDRESS_LINE2}</div>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <p className="footer__col-title">Services</p>
                        <ul className="footer__links">
                            <li><Link to="/psychosocial-risk">Psychosocial Risk</Link></li>
                            <li><Link to="/hse-industrial-hygiene">HSE & Industrial Hygiene</Link></li>
                            <li><Link to="/business-consulting">Business Consulting</Link></li>
                            <li><Link to="/sectors">Sectors</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <p className="footer__col-title">Company</p>
                        <ul className="footer__links">
                            <li><Link to="/about">About Pameltex</Link></li>
                            <li><Link to="/insights">Insights & Projects</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                        <p className="footer__col-title" style={{ marginTop: '24px' }}>Specialist Brands</p>
                        <ul className="footer__links">
                            <li>
                                <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.8125rem' }}>
                                    {FCA.displayName}{' '}
                                    {FCA.baseUrl !== 'PENDING_FCA_URL_CONFIRMATION'
                                        ? <a href={FCA.baseUrl} target="_blank" rel="noopener noreferrer">↗</a>
                                        : <span style={{ color: 'rgba(255,255,255,0.2)' }}>(link pending)</span>
                                    }
                                </span>
                            </li>
                            <li>
                                <a href={PAMELTECH.url} target="_blank" rel="noopener noreferrer">
                                    {PAMELTECH.displayName} ↗
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <p className="footer__col-title">Contact</p>
                        <ul className="footer__links">
                            <li>
                                <a href={`mailto:${EMAIL_PRIMARY}`}>{EMAIL_PRIMARY}</a>
                            </li>
                            <li>
                                <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.8125rem' }}>
                                    {PHONE_DISPLAY === '[Phone — PENDING CONFIRMATION]'
                                        ? 'Phone — pending confirmation'
                                        : <a href={`tel:${PHONE_DISPLAY}`}>{PHONE_DISPLAY}</a>
                                    }
                                </span>
                            </li>
                            {SOCIAL.facebook && (
                                <li><a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer">Facebook</a></li>
                            )}
                        </ul>
                        <div style={{ marginTop: '24px' }}>
                            <Link to="/contact" className="btn btn--primary btn--sm" style={{ display: 'inline-flex' }}>
                                Request a Consultation
                            </Link>
                        </div>
                    </div>

                </div>

                {/* Bottom bar */}
                <div className="footer__bottom">
                    <span className="footer__bottom-copy">
                        © {year} {COMPANY_NAME}. All rights reserved.
                    </span>
                    <div className="footer__bottom-links">
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms</Link>
                        <Link to="/payment-options">Payment</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
