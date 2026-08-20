import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { WEBSITE_URL } from '../config/site';

const AREC_STEPS = [
    {
        step: 'Anticipate',
        desc: 'Before work begins or changes occur, consider what hazards could be present based on the nature of activities, materials used and the workplace environment.',
    },
    {
        step: 'Recognise',
        desc: 'Identify hazards that are actually present through workplace inspection, worker consultation and review of tasks, processes and substances in use.',
    },
    {
        step: 'Evaluate',
        desc: 'Assess the extent of exposure and the risk to workers. This informs how urgent and how extensive the control response needs to be.',
    },
    {
        step: 'Control',
        desc: 'Select and implement controls appropriate to the hazard, the exposure level and the agreed scope. Controls range from elimination to administrative measures and PPE.',
    },
];

const SERVICE_AREAS = [
    {
        title: 'Indoor Air Quality',
        desc:  'Assessment of air quality in working environments. Indicative screening of particulates (PM2.5 / PM10), carbon dioxide, temperature, relative humidity and common chemical indicators. Findings inform ventilation and housekeeping recommendations.',
    },
    {
        title: 'Particulates, Dust & Fumes',
        desc:  'Review of dust-generating processes, fume-producing activities and the adequacy of existing controls. PPE specification guidance and SOP support for high-exposure tasks.',
    },
    {
        title: 'Workplace Noise',
        desc:  'Noise mapping of work areas to identify zones and tasks where noise levels may present a risk. Findings inform hearing-protection requirements and engineering-control recommendations.',
    },
    {
        title: 'Ventilation & Thermal Conditions',
        desc:  'Review of natural and mechanical ventilation provision, airflow adequacy and thermal comfort in occupied spaces. Recommendations for improvement and monitoring.',
    },
    {
        title: 'Workplace Exposure Assessment',
        desc:  'Structured assessment of worker exposure to physical, chemical and ergonomic hazards based on the agreed scope. Assessment methods and instruments are agreed with the client before commencement.',
    },
    {
        title: 'Corrective Action & Audit Support',
        desc:  'Translation of assessment findings into a prioritised corrective-action plan. Support for audit-evidence preparation including documented findings, photographic records and corrective-action logs.',
    },
];

const HseIndustrialHygiene = () => (
    <>
        <SEO
            title="HSE & Industrial Hygiene Consulting | Pameltex — Botswana"
            description="Workplace air quality, noise, dust, fumes and ventilation assessments in Botswana and the SADC region. Corrective-action planning and audit-evidence support."
            keywords="industrial hygiene Botswana, workplace air quality Botswana, occupational noise assessment Botswana, dust and fumes assessment, HSE consulting Botswana, SMETA audit support"
        >
            <script type="application/ld+json">{JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Service',
                'name': 'HSE & Industrial Hygiene Consulting',
                'provider': { '@type': 'Organization', 'name': 'Pameltex (Pty) Ltd', 'url': WEBSITE_URL },
                'areaServed': ['Botswana', 'SADC'],
                'description': 'Workplace HSE and industrial hygiene assessments covering indoor air quality, noise, dust, fumes and ventilation in Botswana.',
            })}</script>
        </SEO>

        {/* Page Hero */}
        <section className="page-hero page-hero--industrial">
            <div className="container">
                <span className="eyebrow">Consulting Service — 02</span>
                <h1 style={{ color: '#fff', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '16px', maxWidth: '720px' }}>
                    HSE & Industrial Hygiene
                </h1>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', maxWidth: '640px', lineHeight: 1.7 }}>
                    Structured assessment, evaluation and control of physical workplace hazards.
                    Evidence-based findings. Practical corrective-action planning.
                </p>
                <div style={{ display: 'flex', gap: '16px', marginTop: '32px', flexWrap: 'wrap' }}>
                    <Link to="/contact" className="btn btn--primary">Request a Workplace Assessment</Link>
                    <Link to="/contact" className="btn btn--ghost">Contact Pameltex</Link>
                </div>
            </div>
        </section>

        {/* AREC Framework */}
        <section className="section bg-stone">
            <div className="container">
                <div className="section-header">
                    <span className="eyebrow">Assessment Methodology</span>
                    <h2 className="heading-lg">Anticipate → Recognise → Evaluate → Control</h2>
                    <p>
                        Every HSE and industrial-hygiene assessment follows this internationally
                        recognised four-stage framework.
                    </p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
                    {AREC_STEPS.map(({ step, desc }, i) => (
                        <div key={step} style={{ background: 'var(--c-white)', border: '1px solid var(--c-border-light)', borderRadius: '12px', padding: '28px 24px', borderTop: '3px solid var(--c-teal)' }}>
                            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--c-teal)', marginBottom: '8px' }}>
                                Stage {String(i + 1).padStart(2, '0')}
                            </p>
                            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--c-navy)', marginBottom: '12px' }}>{step}</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--c-text-mid)', lineHeight: 1.6 }}>{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Scope disclaimer */}
        <section className="section--sm bg-white">
            <div className="container">
                <div className="pending-notice">
                    <strong>Important — Scope and methodology:</strong>{' '}
                    Pameltex assessments use screening instruments and direct observation. The specific
                    measurement methods, sampling protocols, analytical laboratories and competent specialists
                    involved depend on the agreed scope for each engagement. Screening results are
                    indicative and are not a substitute for formal laboratory-grade analysis where that
                    level of confidence is required. Pameltex will advise on the appropriate scope for
                    your context before commencing any assessment.
                </div>
            </div>
        </section>

        {/* Service Areas */}
        <section className="section bg-stone">
            <div className="container">
                <div className="section-header">
                    <span className="eyebrow">Service Areas</span>
                    <h2 className="heading-lg">What Pameltex assesses</h2>
                </div>
                <div className="b-grid">
                    {SERVICE_AREAS.map(({ title, desc }) => (
                        <div className="b-card" key={title}>
                            <h3 className="b-title">{title}</h3>
                            <p className="b-text">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Case study reference */}
        <section className="section bg-white">
            <div className="container">
                <div className="case-study-block">
                    <span className="eyebrow">Field Evidence</span>
                    <h2 style={{ color: '#fff', fontSize: '1.6rem', fontWeight: 800, marginBottom: '12px' }}>
                        Example: Clothing-manufacturing facility, Gaborone
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.72)', maxWidth: '680px', marginBottom: '28px' }}>
                        A 71-person clothing-manufacturing facility engaged Pameltex to assess air quality,
                        noise and ventilation ahead of an ethical-trade audit. Screening of PM2.5/PM10,
                        formaldehyde indicators and noise mapping identified corrective actions that were
                        documented for the client's SMETA-related compliance submission.
                    </p>
                    <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', fontStyle: 'italic', marginBottom: '24px' }}>
                        Client name withheld. Results are indicative. Scope does not constitute laboratory-grade analysis.
                    </p>
                    <Link to="/insights" className="btn btn--ghost">See More in Insights →</Link>
                </div>
            </div>
        </section>

        {/* Who commissions */}
        <section className="section bg-stone">
            <div className="container">
                <div className="section-header centered">
                    <span className="eyebrow">Who Needs This Work</span>
                    <h2 className="heading-lg">Relevant when your organisation is</h2>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', maxWidth: '900px', margin: '0 auto' }}>
                    {[
                        'Preparing for an ethical-trade, SMETA or similar audit',
                        'Responding to a regulatory inspection or notice',
                        'Setting up a new facility or process',
                        'Experiencing unexplained health complaints among workers',
                        'Reviewing existing controls after an incident',
                        'Building a formal HSE management system',
                    ].map(item => (
                        <div className="outcome-item" key={item}>
                            <p className="outcome-item__desc">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* CTA */}
        <section className="cta-band">
            <div className="container">
                <h2 className="heading-lg" style={{ color: '#fff' }}>Request a Workplace Assessment</h2>
                <p>Tell us about your facility, the hazards of concern and any audit or regulatory deadline. We will confirm scope and next steps.</p>
                <Link to="/contact" className="btn btn--ghost btn--lg">Request an Assessment</Link>
            </div>
        </section>
    </>
);

export default HseIndustrialHygiene;
