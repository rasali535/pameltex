import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import clientLetlole from '../assets/client-letlole.png';
import clientLetshego from '../assets/client-letshego.png';
import clientUnitrans from '../assets/client-unitrans.png';
import foundationsLogo from '../assets/foundations-logo.png';
import groupLogo from '../assets/pameltex-group-logo.png';
import techLogo from '../assets/pameltex-tech-logo.png';


const Home = () => {
    return (
        <>
            <SEO
                title="Pameltex Group | Driven for Impact"
                description="Pameltex Group houses Pameltex Psychosocial & Counseling, Pameltex Tech, and Foundations Counseling Academy. Driven for global impact in mental health and innovation."
            />

            {/* Hero Section */}
            <section className="hero" style={{ padding: '120px 0', background: 'linear-gradient(135deg, #1a1a1a 0%, var(--brand-purple) 100%)', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <img src={groupLogo} alt="Pameltex Group" style={{ maxWidth: '350px', marginBottom: '40px', filter: 'brightness(0) invert(1)' }} />
                    <h1 style={{ fontSize: '3.8rem', fontWeight: '800', marginBottom: '20px', letterSpacing: '-1px' }}>Driven for Impact.</h1>
                    <p style={{ fontSize: '1.5rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto 50px', lineHeight: '1.4' }}>
                        A multi-disciplinary group committed to transforming lives through mental health services,
                        innovative technology, and specialized education.
                    </p>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                        <a href="#ecosystem" className="btn-solid" style={{ background: 'var(--brand-teal)', padding: '18px 40px', borderRadius: '50px', fontSize: '1.1rem' }}>Explore Our Ecosystem</a>
                    </div>
                </div>
            </section>

            {/* The Ecosystem Section */}
            <section id="ecosystem" style={{ padding: '100px 0', background: '#fdfbf7' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: '3rem', color: 'var(--brand-purple)', marginBottom: '15px', fontWeight: '800' }}>One Group. Three Pillars.</h2>
                    <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#666', marginBottom: '70px', maxWidth: '700px', margin: '0 auto 70px' }}>
                        Pameltex Group integrates specialized mental health care with cutting-edge technology and academic excellence.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>

                        {/* Pillar 1: Psychosocial & Counseling */}
                        <div className="pillar-card" style={{ background: 'white', padding: '50px 40px', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #eee', transition: 'all 0.3s ease' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🧠</div>
                            <h3 style={{ fontSize: '1.8rem', color: 'var(--brand-purple)', marginBottom: '15px' }}>Pameltex Psychosocial & Counseling</h3>
                            <p style={{ color: '#555', marginBottom: '25px', lineHeight: '1.6' }}>
                                Professional mental health services, individual therapy, and corporate wellness programs
                                delivered by certified specialists.
                            </p>
                            <Link to="/individual-therapy" style={{ color: 'var(--brand-teal)', fontWeight: '700', textDecoration: 'underline' }}>View Services &rarr;</Link>
                        </div>

                        {/* Pillar 2: Tech */}
                        <div className="pillar-card" style={{ background: 'white', padding: '50px 40px', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #eee', borderTop: '6px solid #8B1A3D' }}>
                            <div style={{ marginBottom: '20px' }}>
                                <img src={techLogo} alt="Pameltech Labs" style={{ height: '70px' }} />
                            </div>
                            <h3 style={{ fontSize: '1.8rem', color: '#8B1A3D', marginBottom: '15px' }}>Pameltech Labs</h3>
                            <p style={{ color: '#555', marginBottom: '25px', lineHeight: '1.6' }}>
                                Driving digital transformation in the healthcare space through innovative platforms,
                                AI-driven insights, and tech-enabled support systems.
                            </p>
                            <a href="https://www.pameltechlabs.com" target="_blank" rel="noopener noreferrer" style={{ color: '#8B1A3D', fontWeight: '700', textDecoration: 'underline', display: 'block', marginTop: '10px' }}>Visit Pameltech Labs &rarr;</a>
                        </div>


                        {/* Pillar 3: Academy */}
                        <div className="pillar-card" style={{ background: 'white', padding: '50px 40px', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #eee' }}>
                            <div style={{ marginBottom: '20px' }}>
                                <img src={foundationsLogo} alt="Foundations Academy" style={{ height: '60px' }} />
                            </div>
                            <h3 style={{ fontSize: '1.8rem', color: '#1a1a1a', marginBottom: '15px' }}>Foundations Counseling Academy</h3>
                            <p style={{ color: '#555', marginBottom: '25px', lineHeight: '1.6' }}>
                                A premier learning institution providing specialized mental health courses,
                                professional training, and foundational wellness education.
                            </p>
                            <a href="https://academyfoundations.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand-purple)', fontWeight: '700', textDecoration: 'underline' }}>Visit Academy &rarr;</a>
                        </div>

                    </div>
                </div>
            </section>




            {/* Impact Section */}
            <section style={{ padding: '80px 0', background: 'var(--brand-purple)', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>Our Mission is Impact.</h2>
                    <p style={{ fontSize: '1.3rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto 40px', lineHeight: '1.6' }}>
                        By bridging the gap between human empathy, technological innovation, and academic rigor,
                        we are creating a future where mental well-being is accessible to all.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
                        <div style={{ textAlign: 'center' }}>
                            <strong style={{ fontSize: '3rem', display: 'block' }}>10k+</strong>
                            <span style={{ fontSize: '1rem', opacity: 0.8 }}>Lives Impacted</span>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <strong style={{ fontSize: '3rem', display: 'block' }}>50+</strong>
                            <span style={{ fontSize: '1rem', opacity: 0.8 }}>Corporate Partners</span>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <strong style={{ fontSize: '3rem', display: 'block' }}>Global</strong>
                            <span style={{ fontSize: '1rem', opacity: 0.8 }}>Standards of Care</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted By */}
            <section style={{ padding: '60px 0', background: 'white' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h4 style={{ color: '#999', marginBottom: '40px', letterSpacing: '2px' }}>TRUSTED BY LEADING ORGANIZATIONS</h4>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '60px', flexWrap: 'wrap' }}>
                        <img src={clientLetlole} alt="Letlole" style={{ height: '45px', filter: 'grayscale(100%)', opacity: 0.6 }} />
                        <img src={clientUnitrans} alt="Unitrans" style={{ height: '35px', filter: 'grayscale(100%)', opacity: 0.6 }} />
                        <img src={clientLetshego} alt="Letshego" style={{ height: '35px', filter: 'grayscale(100%)', opacity: 0.6 }} />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '100px 0', background: '#fdfbf7', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.8rem', color: 'var(--brand-purple)', marginBottom: '20px' }}>Ready to make an impact?</h2>
                    <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '40px' }}>Whether you are an individual seeking support, a business looking to innovate, or a student ready to learn.</p>
                    <Link to="/contact" className="btn-solid" style={{ background: 'var(--brand-purple)', padding: '18px 50px', borderRadius: '50px', fontSize: '1.1rem', color: 'white' }}>Get in Touch</Link>
                </div>
            </section>
        </>
    );
};

export default Home;
