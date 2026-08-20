import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import {
    COMPANY_NAME, COMPANY_REG,
    ADDRESS_LINE1, ADDRESS_LINE2,
    EMAIL_PRIMARY, WEBSITE_URL,
} from '../config/site';

/**
 * CONTENT REQUIRED FROM PAMELTEX:
 *  - Caroline Sithole's approved biography and credentials
 *  - Any professional memberships or certifications to publish
 *  - Any additional leadership team members
 *  - Approved description of consulting methodology and experience
 *  - Group brand history / founding narrative
 */

const About = () => (
    <>
        <SEO
            title={`About Pameltex | Corporate Consulting — Botswana`}
            description="Pameltex (Pty) Ltd is a registered Botswana corporate consulting organisation specialising in psychosocial risk, HSE and industrial hygiene, and business systems consulting."
            keywords="Pameltex Botswana, corporate consulting firm Botswana, Gaborone consulting, Pameltex about, Caroline Sithole"
        >
            <script type="application/ld+json">{JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Organization',
                'name': COMPANY_NAME,
                'url': WEBSITE_URL,
                'logo': `${WEBSITE_URL}/logo.png`,
                'address': {
                    '@type': 'PostalAddress',
                    'streetAddress': ADDRESS_LINE1,
                    'addressLocality': 'Gaborone',
                    'addressCountry': 'BW',
                },
                'email': EMAIL_PRIMARY,
                'description': 'Corporate consulting organisation specialising in psychosocial risk, HSE and industrial hygiene, and business systems consulting in Botswana.',
            })}</script>
        </SEO>

        {/* Page Hero */}
        <section className="page-hero">
            <div className="container">
                <span className="eyebrow">About the Organisation</span>
                <h1 style={{ color: '#fff', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '16px' }}>
                    About Pameltex
                </h1>
                <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '1.1rem', maxWidth: '640px', lineHeight: 1.7 }}>
                    A registered Botswana corporate consulting organisation. Practical, integrated consulting
                    for organisations that need to understand risk, protect people and strengthen systems.
                </p>
            </div>
        </section>

        {/* Identity */}
        <section className="section bg-stone">
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }}>
                    <div>
                        <span className="eyebrow">Corporate Identity</span>
                        <h2 className="heading-lg" style={{ marginBottom: '20px' }}>Who we are</h2>
                        <p className="body-lg" style={{ marginBottom: '16px' }}>
                            Pameltex (Pty) Ltd is a corporate consulting and contracting organisation
                            registered in Botswana. We specialise in three integrated disciplines:
                            psychosocial risk consulting, HSE and industrial hygiene, and business and
                            organisational consulting.
                        </p>
                        <p className="body-md" style={{ marginBottom: '16px' }}>
                            Our work is grounded in the conviction that people, workplaces and organisational
                            systems are connected — and that sustainable performance requires all three to
                            be managed effectively.
                        </p>
                        <p className="body-md">
                            We operate primarily in Botswana and serve clients across the wider SADC region.
                        </p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {[
                            { label: 'Legal Entity',       value: COMPANY_NAME },
                            { label: 'Registration',       value: COMPANY_REG },
                            { label: 'Registered Office',  value: `${ADDRESS_LINE1}, ${ADDRESS_LINE2}` },
                            { label: 'Business Contact',   value: EMAIL_PRIMARY },
                            { label: 'Primary Market',     value: 'Botswana' },
                            { label: 'Service Region',     value: 'Botswana and SADC' },
                        ].map(({ label, value }) => (
                            <div key={label} style={{ background: 'var(--c-white)', border: '1px solid var(--c-border-light)', borderRadius: '8px', padding: '16px 20px', display: 'grid', gridTemplateColumns: '160px 1fr', gap: '12px' }}>
                                <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--c-text-light)', textTransform: 'uppercase', letterSpacing: '1px' }}>{label}</span>
                                <span style={{ fontSize: '0.9375rem', color: 'var(--c-navy)', fontWeight: 500 }}>{value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* Purpose & Philosophy */}
        <section className="section bg-white">
            <div className="container">
                <div style={{ maxWidth: '760px' }}>
                    <span className="eyebrow">Consulting Philosophy</span>
                    <h2 className="heading-lg" style={{ marginBottom: '20px' }}>How we think about our work</h2>
                    <p className="body-lg" style={{ marginBottom: '16px' }}>
                        Understand risk. Protect people. Strengthen systems. Improve performance.
                    </p>
                    <p className="body-md" style={{ marginBottom: '16px' }}>
                        That sequence is intentional. You cannot sustainably improve performance in an organisation
                        where risk is unmanaged, people are unprotected or systems are weak. Pameltex approaches
                        consulting in that order.
                    </p>
                    <p className="body-md" style={{ marginBottom: '16px' }}>
                        We are not a training provider, a wellness programme operator or a generic management
                        consultancy. We are a practical, applied consulting organisation that works with
                        organisations on specific, defined problems — and delivers work that can be acted on.
                    </p>
                    <p className="body-md">
                        Implementation matters as much as diagnosis. Our consulting is structured to move from
                        assessment to corrective action to verification — not to produce reports that sit on shelves.
                    </p>
                </div>
            </div>
        </section>

        {/* Leadership */}
        <section className="section bg-stone">
            <div className="container">
                <div className="section-header">
                    <span className="eyebrow">Leadership</span>
                    <h2 className="heading-lg">The team behind Pameltex</h2>
                </div>
                <div style={{ maxWidth: '640px' }}>
                    <div style={{ background: 'var(--c-white)', border: '1px solid var(--c-border-light)', borderRadius: '16px', padding: '36px 32px' }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--c-navy)', marginBottom: '4px' }}>Caroline Sithole</h3>
                        <p style={{ fontSize: '0.875rem', color: 'var(--c-teal)', fontWeight: 600, marginBottom: '16px' }}>Founder & Principal Consultant</p>
                        <div className="pending-notice" style={{ marginBottom: '16px' }}>
                            <strong>CONTENT REQUIRED FROM PAMELTEX:</strong> Please supply Caroline Sithole's approved
                            biography, credentials, professional memberships and any qualifications or
                            certifications to be published. Do not publish credentials that have not been
                            verified and approved.
                        </div>
                        <p style={{ fontSize: '0.9rem', color: 'var(--c-text-mid)' }}>
                            Contact: <a href="mailto:info@pameltex.com" style={{ color: 'var(--c-teal)' }}>info@pameltex.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Group architecture */}
        <section className="section bg-white">
            <div className="container">
                <div className="section-header">
                    <span className="eyebrow">Group Structure</span>
                    <h2 className="heading-lg">Pameltex Group brand architecture</h2>
                    <p>
                        Pameltex (Pty) Ltd is the corporate consulting entity. Two specialist brands
                        operate under the group umbrella with distinct mandates.
                    </p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', maxWidth: '900px' }}>
                    {[
                        {
                            name: 'Pameltex (Pty) Ltd',
                            role: 'Corporate consulting entity',
                            scope: 'Psychosocial Risk · HSE & Industrial Hygiene · Business Consulting',
                            highlight: true,
                        },
                        {
                            name: 'Foundations Counselling Academy (FCA)',
                            role: 'Specialist counselling & training brand',
                            scope: 'Individual counselling · EAP delivery · Workplace mental-health training',
                            highlight: false,
                        },
                        {
                            name: 'Pameltech Labs',
                            role: 'Specialist technology brand',
                            scope: 'AI · Automation · SaaS · Digital products · R&D',
                            highlight: false,
                        },
                    ].map(({ name, role, scope, highlight }) => (
                        <div key={name} style={{ background: highlight ? 'var(--c-navy)' : 'var(--c-stone)', border: `1px solid ${highlight ? 'var(--c-navy)' : 'var(--c-border-light)'}`, borderRadius: '12px', padding: '28px 24px' }}>
                            {highlight && <span className="tag" style={{ background: 'rgba(255,255,255,0.12)', color: 'var(--c-teal-light)', marginBottom: '12px', display: 'inline-flex' }}>This entity</span>}
                            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: highlight ? '#fff' : 'var(--c-navy)', marginBottom: '6px' }}>{name}</h3>
                            <p style={{ fontSize: '0.8rem', fontWeight: 600, color: highlight ? 'var(--c-teal-light)' : 'var(--c-teal)', marginBottom: '10px' }}>{role}</p>
                            <p style={{ fontSize: '0.875rem', color: highlight ? 'rgba(255,255,255,0.65)' : 'var(--c-text-mid)' }}>{scope}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* CTA */}
        <section className="cta-band">
            <div className="container">
                <h2 className="heading-lg" style={{ color: '#fff' }}>Work with Pameltex</h2>
                <p>Tell us about your organisation and the risks or systems challenges you need support with.</p>
                <Link to="/contact" className="btn btn--ghost btn--lg">Request a Consultation</Link>
            </div>
        </section>
    </>
);

export default About;
