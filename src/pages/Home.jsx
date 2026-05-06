import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import clientLetlole from '../assets/client-letlole.png';
import clientLetshego from '../assets/client-letshego.png';
import clientUnitrans from '../assets/client-unitrans.png';
import foundationsLogo from '../assets/foundations-logo.png';

const Home = () => {
    return (
        <>
            <SEO
                title="Mental Health & Counselling Services in Botswana | Pameltex"
                description="Pameltex offers professional mental health services, counselling, and psychosocial support in Botswana. Individual therapy & corporate wellness programs available."
            >
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "MedicalBusiness",
                        "name": "Pameltex Psychosocial & Counseling",
                        "image": "https://www.pameltex.com/assets/logo.png",
                        "@id": "https://www.pameltex.com",
                        "url": "https://www.pameltex.com",
                        "telephone": "+26771234567",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Gaborone",
                            "addressLocality": "Gaborone",
                            "addressCountry": "BW"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": -24.6282,
                            "longitude": 25.9231
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday",
                                "Tuesday",
                                "Wednesday",
                                "Thursday",
                                "Friday"
                            ],
                            "opens": "08:00",
                            "closes": "17:00"
                        },
                        "sameAs": [
                            "https://www.facebook.com/pameltex"
                        ]
                    })}
                </script>
            </SEO>

            {/* Hero Section */}
            <section className="hero" style={{ padding: '100px 0', background: 'var(--brand-purple)', color: 'white' }}>
                <div className="container hero-container">
                    <h1 className="hero-title" style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
                        Professional Support for Your Mental Well-being.
                    </h1>
                    <p className="hero-subtitle" style={{ fontSize: '1.4rem', marginBottom: '3rem', opacity: 0.9 }}>
                        Empowering you to navigate life's challenges with professional guidance and care.
                    </p>
                    <div className="therapy-cards" style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/individual-therapy" className="card" style={{ background: 'white', color: 'var(--text-dark)', padding: '30px', borderRadius: '12px', width: '300px', textAlign: 'left' }}>
                            <span className="card-label" style={{ display: 'block', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--brand-purple)' }}>Individual</span>
                            <span className="card-sub" style={{ color: '#666' }}>Personalized therapy for yourself</span>
                            <div className="card-arrow" style={{ marginTop: '20px', fontSize: '1.5rem', color: 'var(--brand-teal)' }}>&rarr;</div>
                        </Link>
                        <Link to="/corporate-services" className="card" style={{ background: 'white', color: 'var(--text-dark)', padding: '30px', borderRadius: '12px', width: '300px', textAlign: 'left' }}>
                            <span className="card-label" style={{ display: 'block', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--brand-green)' }}>Corporate</span>
                            <span className="card-sub" style={{ color: '#666' }}>Wellness programs for your team</span>
                            <div className="card-arrow" style={{ marginTop: '20px', fontSize: '1.5rem', color: 'var(--brand-teal)' }}>&rarr;</div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* NEW PROMINENT: Academy Foundations Section */}
            <section className="academy-hero-cta" style={{ padding: '80px 0', background: '#fdfbf7' }}>
                <div className="container">
                    <div className="academy-wrapper" style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '60px', 
                        background: 'white', 
                        padding: '60px', 
                        borderRadius: '30px', 
                        boxShadow: '0 20px 50px rgba(0,0,0,0.05)',
                        border: '1px solid #eee'
                    }}>
                        <div className="academy-img-box" style={{ flex: '1', textAlign: 'center' }}>
                            <img src={foundationsLogo} alt="Foundations Counseling Academy" style={{ maxWidth: '300px', height: 'auto' }} />
                        </div>
                        <div className="academy-text-box" style={{ flex: '1.5' }}>
                            <h2 style={{ fontSize: '2.5rem', color: 'var(--brand-purple)', marginBottom: '20px' }}>Foundations Counseling Academy</h2>
                            <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '30px', lineHeight: '1.6' }}>
                                Unlock your potential with our world-class mental health training and personal development courses. 
                                Join thousands of learners building stronger emotional foundations.
                            </p>
                            <a href="https://academyfoundations.com/" target="_blank" rel="noopener noreferrer" 
                               className="btn-solid" 
                               style={{ 
                                   display: 'inline-block', 
                                   padding: '18px 40px', 
                                   background: 'var(--brand-teal)', 
                                   color: 'white', 
                                   borderRadius: '50px', 
                                   fontSize: '1.1rem', 
                                   fontWeight: 'bold',
                                   boxShadow: '0 10px 20px rgba(42, 157, 143, 0.2)'
                               }}>
                                Visit the Academy &rarr;
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="stats-bar" style={{ padding: '40px 0', background: 'white', borderBottom: '1px solid #eee' }}>
                <div className="container">
                    <div className="stats-grid" style={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center' }}>
                        <div className="stat-item">
                            <strong style={{ display: 'block', fontSize: '2rem', color: 'var(--brand-green)' }}>International</strong>
                            <span style={{ fontSize: '0.9rem', color: '#888', fontWeight: 'bold' }}>ACCEPTED STANDARDS</span>
                        </div>
                        <div className="stat-item">
                            <strong style={{ display: 'block', fontSize: '2rem', color: 'var(--brand-green)' }}>Certified</strong>
                            <span style={{ fontSize: '0.9rem', color: '#888', fontWeight: 'bold' }}>PROFESSIONAL COUNSELORS</span>
                        </div>
                        <div className="stat-item">
                            <strong style={{ display: 'block', fontSize: '2rem', color: 'var(--brand-green)' }}>Accessible</strong>
                            <span style={{ fontSize: '0.9rem', color: '#888', fontWeight: 'bold' }}>ONLINE & IN-PERSON</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="process-section" style={{ padding: '80px 0', background: 'white' }}>
                <div className="container">
                    <h2 className="section-title" style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px' }}>How It Works</h2>
                    <div className="process-steps" style={{ display: 'flex', gap: '40px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        {[
                            { num: 1, title: 'Get Matched', desc: 'Find the right therapist for your specific needs.' },
                            { num: 2, title: 'Communicate', desc: 'Connect via text, chat, phone, or video.' },
                            { num: 3, title: 'Start Therapy', desc: 'Begin your journey with professional support.' }
                        ].map((step, i) => (
                            <div key={i} className="step" style={{ flex: '1', minWidth: '250px', textAlign: 'center' }}>
                                <div className="step-circle" style={{ 
                                    width: '60px', height: '60px', background: 'var(--brand-light)', color: 'var(--brand-green)', 
                                    borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', 
                                    fontSize: '1.5rem', fontWeight: 'bold', margin: '0 auto 20px' 
                                }}>{step.num}</div>
                                <h3 style={{ marginBottom: '10px' }}>{step.title}</h3>
                                <p style={{ color: '#666' }}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Clients Section */}
            <section className="clients-section" style={{ padding: '80px 0', background: '#f9f9f9' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 className="section-title" style={{ fontSize: '1.5rem', opacity: 0.5, marginBottom: '40px' }}>TRUSTED BY LEADING ORGANIZATIONS</h2>
                    <div className="clients-grid" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '60px', flexWrap: 'wrap' }}>
                        <img src={clientLetlole} alt="Letlole La Rona" style={{ height: '50px', filter: 'grayscale(100%)', opacity: 0.7 }} />
                        <img src={clientUnitrans} alt="Unitrans Botswana" style={{ height: '40px', filter: 'grayscale(100%)', opacity: 0.7 }} />
                        <img src={clientLetshego} alt="Letshego" style={{ height: '40px', filter: 'grayscale(100%)', opacity: 0.7 }} />
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="testimonials" style={{ padding: '80px 0', background: 'white' }}>
                <div className="container">
                    <h2 className="section-title" style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px' }}>Voices of Hope</h2>
                    <div className="testimonial-grid" style={{ display: 'flex', gap: '30px', overflowX: 'auto', paddingBottom: '20px' }}>
                        {[
                            { text: '"Pameltex has completely changed my view on therapy. Highly recommended."', author: 'Sarah K., Gaborone' },
                            { text: '"Professional, compassionate, and accessible. The best support I\'ve had."', author: 'Michael T.' },
                            { text: '"Their corporate program transformed our office culture and communication."', author: 'Letlole La Rona, CEO' }
                        ].map((t, i) => (
                            <div key={i} className="testimonial-card" style={{ 
                                background: '#fdfbf7', padding: '40px', borderRadius: '15px', minWidth: '300px', flex: '1',
                                borderTop: '5px solid var(--brand-purple)'
                            }}>
                                <p style={{ fontStyle: 'italic', marginBottom: '20px', color: '#444' }}>{t.text}</p>
                                <strong style={{ color: 'var(--brand-purple)' }}>{t.author}</strong>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
