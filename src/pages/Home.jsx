import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import clientLetlole  from '../assets/client-letlole.png';
import clientLetshego from '../assets/client-letshego.png';
import clientUnitrans  from '../assets/client-unitrans.png';
import foundationsLogo from '../assets/foundations-logo.png';
import techLogo        from '../assets/pameltex-tech-logo.png';
import { FCA, PAMELTECH, WEBSITE_URL } from '../config/site';

/* ─── Data ────────────────────────────────────────────────────────────────── */
const PILLARS = [
    {
        num:   '01',
        title: 'Psychosocial Risk Consulting',
        body:  'Structured assessment of workplace psychosocial hazards — workload, role clarity, interpersonal relationships, organisational change, harassment and traumatic exposure — translated into a prioritised risk register and practical control recommendations.',
        tags:  ['Risk Assessment','Policy Review','Manager Training','Governance'],
        cta:   'Discuss Your Workforce Risks',
        to:    '/psychosocial-risk',
    },
    {
        num:   '02',
        title: 'HSE & Industrial Hygiene',
        body:  'Anticipate, recognise, evaluate and control physical workplace hazards. Indoor air quality, particulates, dust and fumes, noise, ventilation and thermal conditions — with corrective-action planning and audit-evidence support.',
        tags:  ['Air Quality','Noise Assessment','Dust & Fumes','Corrective Actions'],
        cta:   'Request a Workplace Assessment',
        to:    '/hse-industrial-hygiene',
    },
    {
        num:   '03',
        title: 'Business & Organisational Consulting',
        body:  'Strategy execution, operating models, SOPs, governance frameworks, quality management, institutional compliance and audit readiness. Practical implementation support — not reports that sit on shelves.',
        tags:  ['Strategy','SOPs','Compliance','Audit Readiness'],
        cta:   'Discuss a Consulting Assignment',
        to:    '/business-consulting',
    },
];

const OUTCOMES = [
    { label: 'Protect People',          desc: 'Identify and control hazards before they harm your workforce.' },
    { label: 'Improve Compliance',       desc: 'Meet regulatory, ethical-trade and audit requirements with documented evidence.' },
    { label: 'Reduce Operational Risk',  desc: 'Understand and manage the risks that affect performance and sustainability.' },
    { label: 'Strengthen Systems',       desc: 'Build governance frameworks, SOPs and quality systems that hold under scrutiny.' },
    { label: 'Build Audit-Ready Evidence', desc: 'Create the records, corrective-action logs and monitoring indicators auditors require.' },
];

const PROCESS_STEPS = [
    { step: '01', title: 'Discover',   desc: 'Understand your organisation, context, hazards and priorities.' },
    { step: '02', title: 'Assess',     desc: 'Structured workplace, workforce and systems assessment.' },
    { step: '03', title: 'Analyse',    desc: 'Interpret findings against recognised risk frameworks.' },
    { step: '04', title: 'Prioritise', desc: 'Rank risks by likelihood and consequence to direct resources effectively.' },
    { step: '05', title: 'Implement',  desc: 'Support corrective actions, controls and policy development.' },
    { step: '06', title: 'Verify',     desc: 'Monitor indicators and review outcomes to confirm improvement.' },
];

const SECTORS_PREVIEW = [
    { icon: '🏭', label: 'Manufacturing' },
    { icon: '🏢', label: 'Corporate Offices' },
    { icon: '🏥', label: 'Healthcare' },
    { icon: '🏗️', label: 'Construction' },
    { icon: '📚', label: 'Education' },
    { icon: '⚖️', label: 'Professional Services' },
];

/* ─── Component ───────────────────────────────────────────────────────────── */
const Home = () => (
    <>
        <SEO
            title="Pameltex (Pty) Ltd | Corporate Risk, HSE & Business Consulting — Botswana"
            description="Pameltex is a corporate consulting organisation specialising in psychosocial risk, HSE and industrial hygiene, and business systems consulting in Botswana and the SADC region."
            keywords="psychosocial risk consulting Botswana, HSE consulting Botswana, industrial hygiene Botswana, business consulting Gaborone, workplace risk assessment, occupational health Botswana"
        >
            <script type="application/ld+json">{JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'ProfessionalService',
                'name': 'Pameltex (Pty) Ltd',
                'url': WEBSITE_URL,
                'logo': `${WEBSITE_URL}/logo.png`,
                'description': 'Corporate consulting specialising in psychosocial risk, HSE and industrial hygiene, and business systems consulting.',
                'areaServed': ['Botswana', 'SADC'],
                'address': {
                    '@type': 'PostalAddress',
                    'streetAddress': 'Plot 18680, Khuhurutse Street, Phase 2',
                    'addressLocality': 'Gaborone',
                    'addressCountry': 'BW',
                },
                'sameAs': ['https://www.facebook.com/pameltex'],
            })}</script>
        </SEO>

        {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
        <section className="hero" aria-label="Hero">
            <div className="container">
                <div className="hero__inner">
                    <span className="eyebrow">Botswana · SADC Region</span>
                    <h1 className="hero__title">
                        Integrated risk and business consulting for healthier, safer and stronger organisations.
                    </h1>
                    <p className="hero__subtitle">
                        Psychosocial risk, HSE and industrial-hygiene assessments, and practical business
                        systems consulting in Botswana and the wider SADC region.
                    </p>
                    <div className="hero__ctas">
                        <Link to="/contact" className="btn btn--primary btn--lg">
                            Request a Consultation
                        </Link>
                        <a href="#services" className="btn btn--ghost btn--lg">
                            Explore Our Services
                        </a>
                    </div>
                    <div className="hero__trust">
                        <span className="hero__trust-item">Psychosocial Risk</span>
                        <span className="hero__trust-dot" aria-hidden="true" />
                        <span className="hero__trust-item">HSE & Industrial Hygiene</span>
                        <span className="hero__trust-dot" aria-hidden="true" />
                        <span className="hero__trust-item">Business Consulting</span>
                    </div>
                </div>
            </div>
        </section>

        {/* ── 2. THREE CONSULTING PILLARS ─────────────────────────────────── */}
        <section id="services" className="section bg-stone" aria-label="Consulting services">
            <div className="container">
                <div className="section-header">
                    <span className="eyebrow">What We Do</span>
                    <h2 className="heading-lg">Three integrated consulting disciplines</h2>
                    <p>
                        Pameltex connects workforce wellbeing, workplace exposure, risk management,
                        governance and operational systems into one coherent consulting engagement.
                    </p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                    {PILLARS.map(({ num, title, body, tags, cta, to }) => (
                        <div className="pillar-card" key={num}>
                            <span className="pillar-card__num">{num}</span>
                            <h3 className="pillar-card__title">{title}</h3>
                            <p className="pillar-card__body">{body}</p>
                            <div className="pillar-card__tags">
                                {tags.map(t => <span className="tag" key={t}>{t}</span>)}
                            </div>
                            <Link to={to} className="pillar-card__link">
                                {cta} <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* ── 3. BUSINESS OUTCOMES ────────────────────────────────────────── */}
        <section className="section bg-white" aria-label="Business outcomes">
            <div className="container">
                <div className="section-header centered">
                    <span className="eyebrow">Why It Matters</span>
                    <h2 className="heading-lg">What well-executed consulting delivers</h2>
                    <p>
                        Pameltex does not make unsupported guarantees. What we do deliver is structured,
                        evidence-informed consulting that gives leaders actionable control over real organisational risks.
                    </p>
                </div>
                <div className="outcomes-grid">
                    {OUTCOMES.map(({ label, desc }) => (
                        <div className="outcome-item" key={label}>
                            <p className="outcome-item__label">{label}</p>
                            <p className="outcome-item__desc">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* ── 4. WHY PAMELTEX ────────────────────────────────────────────── */}
        <section className="section bg-stone" aria-label="Why Pameltex">
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
                    <div>
                        <span className="eyebrow">Our Approach</span>
                        <h2 className="heading-lg" style={{ marginBottom: '20px' }}>
                            People + Workplace + Systems + Performance
                        </h2>
                        <p className="body-lg" style={{ marginBottom: '20px' }}>
                            Many organisations manage people issues, compliance issues and performance issues
                            in separate silos. Pameltex connects them.
                        </p>
                        <p className="body-md" style={{ marginBottom: '20px' }}>
                            A psychosocial risk that goes unaddressed becomes a compliance gap.
                            A compliance gap that goes unmanaged becomes an operational failure.
                            An operational failure that goes unreported becomes an audit finding.
                        </p>
                        <p className="body-md">
                            Our consulting engagements are structured to move from understanding to implementation —
                            not to produce reports that sit unused.
                        </p>
                        <div style={{ marginTop: '32px' }}>
                            <Link to="/about" className="btn btn--ghost-dark">Learn about Pameltex</Link>
                        </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                        {[
                            { label: 'Workforce Wellbeing', desc: 'Psychosocial risk assessment and management.' },
                            { label: 'Workplace Exposure',  desc: 'HSE monitoring, sampling and control.' },
                            { label: 'Risk Governance',     desc: 'Frameworks, registers and escalation structures.' },
                            { label: 'Systems & Operations', desc: 'SOPs, quality management and audit support.' },
                        ].map(({ label, desc }) => (
                            <div className="card card--accent-top" key={label}>
                                <h4 className="card__title" style={{ fontSize: '0.95rem' }}>{label}</h4>
                                <p className="card__body" style={{ fontSize: '0.85rem' }}>{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* ── 5. CASE STUDY — INDUSTRIAL HYGIENE PROOF ────────────────────── */}
        <section className="section bg-white" aria-label="Case study">
            <div className="container">
                <div className="case-study-block">
                    <span className="eyebrow">Field Evidence</span>
                    <h2 className="heading-lg" style={{ color: '#fff', marginBottom: '12px', maxWidth: '680px' }}>
                        Clothing-manufacturing facility, Gaborone — 71 employees
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.72)', maxWidth: '700px', marginBottom: '36px' }}>
                        An anonymised case from a Gaborone clothing manufacturer preparing for an ethical-trade
                        audit. The assessment identified multiple air-quality, noise and ventilation concerns
                        requiring corrective action before the audit window.
                    </p>
                    <div className="case-flow">
                        <div className="case-flow__item">
                            <p className="case-flow__label">Challenge</p>
                            <p className="case-flow__text">
                                71-person sewing and finishing facility with no formal HSE baseline.
                                Audit deadline imminent. Management uncertain which risks were most critical.
                            </p>
                        </div>
                        <div className="case-flow__item">
                            <p className="case-flow__label">Assessment</p>
                            <p className="case-flow__text">
                                Workplace walkthrough, screening measurement of PM2.5 / PM10 particulates,
                                formaldehyde indicators, noise mapping and ventilation review.
                            </p>
                        </div>
                        <div className="case-flow__item">
                            <p className="case-flow__label">Findings</p>
                            <p className="case-flow__text">
                                Elevated dust levels in cutting areas. Inadequate ventilation in finishing
                                rooms. Noise concerns in machinery zones. Gap in PPE provision.
                            </p>
                        </div>
                        <div className="case-flow__item">
                            <p className="case-flow__label">Corrective Actions</p>
                            <p className="case-flow__text">
                                Practical controls recommended: ventilation improvements, housekeeping protocols,
                                PPE specifications, monitoring-device guidance and SOP drafts.
                            </p>
                        </div>
                        <div className="case-flow__item">
                            <p className="case-flow__label">Follow-up</p>
                            <p className="case-flow__text">
                                Audit-evidence pack prepared. SMETA-related corrective actions documented
                                for the client's buyer compliance submission.
                            </p>
                        </div>
                    </div>
                    <p style={{ marginTop: '28px', fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', fontStyle: 'italic' }}>
                        Client name withheld. Screening instruments used; scope does not constitute laboratory-grade analysis.
                        Results are indicative and specific to the agreed assessment methodology.
                    </p>
                    <div style={{ marginTop: '28px' }}>
                        <Link to="/hse-industrial-hygiene" className="btn btn--ghost">
                            Learn about HSE & Industrial Hygiene →
                        </Link>
                    </div>
                </div>
            </div>
        </section>

        {/* ── 6. ENGAGEMENT PROCESS ────────────────────────────────────────── */}
        <section className="section bg-stone" aria-label="Engagement process">
            <div className="container">
                <div className="section-header centered">
                    <span className="eyebrow">How We Work</span>
                    <h2 className="heading-lg">A structured, six-stage engagement</h2>
                    <p>Every Pameltex engagement follows the same disciplined framework — adapted to your organisation's context and priorities.</p>
                </div>
                <div className="process-track">
                    {PROCESS_STEPS.map(({ step, title, desc }) => (
                        <div className="process-step" key={step}>
                            <div className="process-step__num">{step}</div>
                            <p className="process-step__title">{title}</p>
                            <p className="process-step__desc">{desc}</p>
                        </div>
                    ))}
                </div>
                <div style={{ textAlign: 'center', marginTop: '48px' }}>
                    <Link to="/contact" className="btn btn--primary btn--lg">Start with a Discovery Conversation</Link>
                </div>
            </div>
        </section>

        {/* ── 7. SECTORS PREVIEW ────────────────────────────────────────────── */}
        <section className="section bg-white" aria-label="Sectors we serve">
            <div className="container">
                <div className="section-header centered">
                    <span className="eyebrow">Industries</span>
                    <h2 className="heading-lg">Sectors we serve</h2>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '36px' }}>
                    {SECTORS_PREVIEW.map(({ icon, label }) => (
                        <Link
                            to="/sectors"
                            key={label}
                            className="sector-card"
                            style={{ minWidth: '140px', textAlign: 'center', textDecoration: 'none', padding: '24px 20px' }}
                        >
                            <div className="sector-card__icon">{icon}</div>
                            <p className="sector-card__title" style={{ fontSize: '0.9rem' }}>{label}</p>
                        </Link>
                    ))}
                </div>
                <div style={{ textAlign: 'center' }}>
                    <Link to="/sectors" className="btn btn--ghost-dark">View All Sectors →</Link>
                </div>
            </div>
        </section>

        {/* ── 8. SPECIALIST GROUP BRANDS ────────────────────────────────────── */}
        <section className="section bg-stone" aria-label="Specialist group brands">
            <div className="container">
                <div className="section-header centered">
                    <span className="eyebrow">Pameltex Group</span>
                    <h2 className="heading-lg">Specialist brands within the group</h2>
                    <p>
                        Where your organisation requires specialist counselling, EAP delivery or technology solutions,
                        Pameltex may refer or coordinate with the relevant group brand.
                    </p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', maxWidth: '800px', margin: '0 auto' }}>

                    {/* FCA */}
                    <div className="group-brand-card">
                        <span className="group-brand-card__badge">Specialist Brand</span>
                        <div style={{ marginBottom: '16px' }}>
                            <img src={foundationsLogo} alt="Foundations Counselling Academy" style={{ height: '48px' }} />
                        </div>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>Foundations Counselling Academy</h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--c-text-mid)', marginBottom: '16px' }}>
                            Individual counselling, couples counselling, EAP delivery and accredited
                            workplace mental-health training. Where clinical support is required,
                            Pameltex may refer to FCA.
                        </p>
                        {FCA.baseUrl !== 'PENDING_FCA_URL_CONFIRMATION' ? (
                            <a href={FCA.baseUrl} target="_blank" rel="noopener noreferrer" className="btn btn--ghost-dark btn--sm">
                                Visit FCA →
                            </a>
                        ) : (
                            <span style={{ fontSize: '0.8125rem', color: 'var(--c-text-light)' }}>Website link — pending</span>
                        )}
                    </div>

                    {/* Pameltech Labs */}
                    <div className="group-brand-card">
                        <span className="group-brand-card__badge">Specialist Brand</span>
                        <div style={{ marginBottom: '16px' }}>
                            <img src={techLogo} alt="Pameltech Labs" style={{ height: '48px' }} />
                        </div>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>Pameltech Labs</h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--c-text-mid)', marginBottom: '16px' }}>
                            AI, automation, SaaS and digital product development. Technology solutions
                            relevant to operational systems and data management.
                        </p>
                        <a href={PAMELTECH.url} target="_blank" rel="noopener noreferrer" className="btn btn--ghost-dark btn--sm">
                            Visit Pameltech Labs →
                        </a>
                    </div>

                </div>
            </div>
        </section>

        {/* ── 9. FINAL CTA ─────────────────────────────────────────────────── */}
        <section className="cta-band" aria-label="Contact CTA">
            <div className="container">
                <h2 className="heading-lg" style={{ color: '#fff' }}>
                    Ready to start a consulting engagement?
                </h2>
                <p>
                    Tell us about your organisation, your risks and your priorities.
                    We will respond to confirm how Pameltex can help.
                </p>
                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link to="/contact" className="btn btn--ghost btn--lg">Request a Consultation</Link>
                    <Link to="/about" className="btn btn--ghost btn--lg">About Pameltex</Link>
                </div>
            </div>
        </section>
    </>
);

export default Home;
