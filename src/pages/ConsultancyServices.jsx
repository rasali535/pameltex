import { Link } from 'react-router-dom';

const ConsultancyServices = () => {
    const services = [
        {
            title: "Business Advisory",
            icon: "💼",
            description: "Expert guidance to help your business navigate challenges and seize opportunities."
        },
        {
            title: "Business Plans",
            icon: "📝",
            description: " comprehensive business plans tailored to your specific goals and market conditions."
        },
        {
            title: "Strategy",
            icon: "🎯",
            description: "Strategic planning to define your vision, mission, and long-term objectives."
        },
        {
            title: "Corporate Governance",
            icon: "🏛️",
            description: "Establishing frameworks for accountability, fairness, and transparency in your organization."
        },
        {
            title: "Employment Assistance Program",
            icon: "🤝",
            description: "Support programs to enhance employee well-being and productivity."
        },
        {
            title: "Accreditation",
            icon: "📜",
            description: "Assistance with meeting industry standards and obtaining necessary accreditations."
        },
        {
            title: "Content Development",
            icon: "✍️",
            description: "Creation of training materials, manuals, and strategic documentation."
        }
    ];

    return (
        <>
            <section className="business-hero" style={{ background: 'linear-gradient(rgba(50, 80, 60, 0.9), rgba(50, 80, 60, 0.8)), url(https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80) no-repeat center center/cover' }}>
                <div className="container">
                    <h1 className="hero-title" style={{ fontSize: '42px', maxWidth: '800px', margin: '0 auto 20px' }}>
                        Expert Consultancy Services
                    </h1>
                    <p className="hero-subtitle" style={{ color: 'rgba(255,255,255,0.9)' }}>
                        Driving growth and excellence through strategic solutions.
                    </p>
                    <Link to="/contact" className="btn btn-solid" style={{ backgroundColor: '#fff', color: 'var(--brand-green)', borderColor: '#fff' }}>
                        Get in Touch
                    </Link>
                </div>
            </section>

            <section className="business-features">
                <div className="container">
                    <h2 className="section-title">Our Expertise</h2>
                    <p className="section-desc">We offer a range of specialized services to elevate your business.</p>

                    <div className="b-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                        {services.map((service, index) => (
                            <div className="b-card" key={index}>
                                <div className="b-icon">{service.icon}</div>
                                <h3 className="b-title">{service.title}</h3>
                                <p className="b-text">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container">
                    <h2 className="cta-title">Ready to transform your business?</h2>
                    <p style={{ marginBottom: '30px', fontSize: '18px' }}>Let's discuss how our consultancy services can help you achieve your goals.</p>
                    <Link to="/contact" className="btn btn-solid" style={{ backgroundColor: 'var(--bg-dark)', borderColor: 'var(--bg-dark)' }}>
                        Contact Us Today
                    </Link>
                </div>
            </section>
        </>
    );
};

export default ConsultancyServices;
