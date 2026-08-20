import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { FCA, WEBSITE_URL } from '../config/site';

const SERVICES = [
    {
        title: 'Psychosocial Hazard Review',
        desc:  'Systematic identification of psychosocial hazards using recognised frameworks. Covers the full range of work-related psychosocial risks — from workload and role clarity to relationships, change and culture.',
    },
    {
        title: 'Organisational Context Assessment',
        desc:  'Review of organisational structure, reporting lines, management practices, policies and the internal/external context that shapes psychosocial risk in your specific workplace.',
    },
    {
        title: 'Confidential Surveys & Interviews',
        desc:  'Confidential employee surveys, focus groups and stakeholder interviews to gather workforce-level data. Designed and administered in a way that protects individual confidentiality.',
    },
    {
        title: 'Risk Register & Prioritisation',
        desc:  'Findings compiled into a prioritised risk register that identifies which hazards require immediate attention, which need monitoring and which are adequately controlled.',
    },
    {
        title: 'Policy & Governance Review',
        desc:  'Review of existing workplace policies, grievance mechanisms, escalation pathways and governance frameworks against current best practice and regulatory expectations.',
    },
    {
        title: 'Control Recommendations',
        desc:  'Practical corrective-action and control recommendations appropriate to your organisation\'s size, sector and resource context. Recommendations are operationally realistic.',
    },
    {
        title: 'Manager Capability Support',
        desc:  'Targeted briefings and practical guidance to help managers understand their role in preventing and managing psychosocial risks at team level.',
    },
    {
        title: 'Monitoring Indicators',
        desc:  'Development of leading and lagging indicators to help your organisation track whether psychosocial risk controls are working over time.',
    },
];

const HAZARD_AREAS = [
    'Workload and work demands',
    'Role clarity and role conflict',
    'Management support and leadership style',
    'Interpersonal relationships and team dynamics',
    'Organisational change and restructuring',
    'Workplace culture and psychological safety',
    'Bullying, harassment and victimisation',
    'Traumatic event exposure',
    'Job control and autonomy',
    'Work–life interface and flexibility',
    'Recognition and reward',
    'Organisational justice and fairness',
];

const PsychosocialRisk = () => (
    <>
        <SEO
            title="Psychosocial Risk Consulting | Pameltex — Botswana"
            description="Structured psychosocial risk assessment and management consulting for organisations in Botswana and the SADC region. Hazard identification, risk registers, governance review and corrective-action planning."
            keywords="psychosocial risk assessment Botswana, workplace mental health consulting Botswana, psychosocial hazards, work-related stress assessment, HR risk management Botswana"
        >
            <script type="application/ld+json">{JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Service',
                'name': 'Psychosocial Risk Consulting',
                'provider': { '@type': 'Organization', 'name': 'Pameltex (Pty) Ltd', 'url': WEBSITE_URL },
                'areaServed': ['Botswana', 'SADC'],
                'description': 'Structured psychosocial risk assessment, prioritised risk registers and corrective-action planning for organisations in Botswana and the SADC region.',
            })}</script>
        </SEO>

        {/* Page Hero */}
        <section className="page-hero page-hero--corporate" aria-label="Page hero">
            <div className="container">
                <span className="eyebrow">Consulting Service — 01</span>
                <h1 style={{ color: '#fff', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '16px', maxWidth: '720px' }}>
                    Psychosocial Risk Consulting
                </h1>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', maxWidth: '640px', lineHeight: 1.7 }}>
                    Identify, assess and control workplace psychosocial hazards through structured,
                    confidential and practically focused consulting.
                </p>
                <div style={{ display: 'flex', gap: '16px', marginTop: '32px', flexWrap: 'wrap' }}>
                    <Link to="/contact" className="btn btn--primary">Request a Psychosocial Risk Consultation</Link>
                    <Link to="/contact" className="btn btn--ghost">Contact Pameltex</Link>
                </div>
            </div>
        </section>

        {/* What is psychosocial risk */}
        <section className="section bg-stone">
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
                    <div>
                        <span className="eyebrow">Overview</span>
                        <h2 className="heading-lg" style={{ marginBottom: '16px' }}>What are psychosocial risks?</h2>
                        <p className="body-lg" style={{ marginBottom: '16px' }}>
                            Psychosocial risks arise from the way work is designed, organised and managed — and from
                            the social context of work. They interact with individual factors to affect employees'
                            wellbeing, behaviour and performance.
                        </p>
                        <p className="body-md" style={{ marginBottom: '16px' }}>
                            Left unmanaged, psychosocial risks increase absenteeism, presenteeism, turnover, errors,
                            conflict and the risk of formal complaints or regulatory action. They are also increasingly
                            relevant to ethical-trade and ESG assessments.
                        </p>
                        <p className="body-md">
                            Pameltex approaches psychosocial risk as a governance and operational matter —
                            not a wellness initiative. The goal is to identify specific hazards, assess who is at risk,
                            and put in place proportionate, practical controls.
                        </p>
                        <div style={{ marginTop: '28px' }}>
                            <Link to="/contact" className="btn btn--primary">Discuss Your Organisation's Risks</Link>
                        </div>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--c-navy)', marginBottom: '16px' }}>
                            Hazard areas typically reviewed
                        </h3>
                        <ul className="service-list">
                            {HAZARD_AREAS.map(h => (
                                <li key={h}>
                                    <span className="service-list__check" aria-hidden="true">✓</span>
                                    {h}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* Services */}
        <section className="section bg-white">
            <div className="container">
                <div className="section-header">
                    <span className="eyebrow">What Pameltex Delivers</span>
                    <h2 className="heading-lg">Consulting services in this area</h2>
                    <p>Each service answers three questions: what problem does it solve, what will Pameltex deliver, and what decision or improvement does the client gain?</p>
                </div>
                <div className="b-grid">
                    {SERVICES.map(({ title, desc }) => (
                        <div className="b-card" key={title}>
                            <h3 className="b-title">{title}</h3>
                            <p className="b-text">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Who needs this */}
        <section className="section bg-stone">
            <div className="container">
                <div className="section-header centered">
                    <span className="eyebrow">Who Commissions This Work</span>
                    <h2 className="heading-lg">Relevant to your role if you are responsible for</h2>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', maxWidth: '900px', margin: '0 auto' }}>
                    {[
                        { role: 'CEO / COO', reason: 'Organisational risk and reputational exposure.' },
                        { role: 'HR / People & Culture', reason: 'Employee wellbeing, grievance prevention and policy compliance.' },
                        { role: 'HSE / OHS Manager', reason: 'Expanding the risk register beyond physical hazards.' },
                        { role: 'Operations Manager', reason: 'Absenteeism, presenteeism and performance.' },
                        { role: 'Compliance / Legal', reason: 'Regulatory compliance and audit preparation.' },
                        { role: 'Procurement / ESG', reason: 'Supplier ethical-trade and ESG assessments.' },
                    ].map(({ role, reason }) => (
                        <div className="outcome-item" key={role}>
                            <p className="outcome-item__label">{role}</p>
                            <p className="outcome-item__desc">{reason}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* FCA referral */}
        <section className="section bg-white">
            <div className="container">
                <div style={{ background: 'var(--c-stone)', border: '1px solid var(--c-border)', borderLeft: '4px solid var(--c-teal)', borderRadius: '12px', padding: '40px 36px', maxWidth: '760px' }}>
                    <span className="eyebrow">Specialist Referral</span>
                    <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--c-navy)', marginBottom: '12px' }}>
                        When individual or clinical support is required
                    </h2>
                    <p className="body-md" style={{ marginBottom: '20px' }}>
                        Pameltex provides organisational-level psychosocial risk consulting. Where individual counselling,
                        employee assistance programme (EAP) delivery or specialist workplace mental-health training
                        is required, Pameltex may refer or coordinate with{' '}
                        <strong>Foundations Counselling Academy (FCA)</strong>.
                    </p>
                    <p className="body-md" style={{ marginBottom: '24px' }}>
                        Pameltex does not provide individual therapy, clinical assessments or medical diagnoses.
                        This service is organisational consulting, not clinical practice.
                    </p>
                    {FCA.baseUrl !== 'PENDING_FCA_URL_CONFIRMATION' ? (
                        <a href={FCA.baseUrl} target="_blank" rel="noopener noreferrer" className="btn btn--ghost-dark btn--sm">
                            Visit Foundations Counselling Academy →
                        </a>
                    ) : (
                        <span style={{ fontSize: '0.8125rem', color: 'var(--c-text-light)' }}>FCA website link — pending confirmation</span>
                    )}
                </div>
            </div>
        </section>

        {/* CTA */}
        <section className="cta-band">
            <div className="container">
                <h2 className="heading-lg" style={{ color: '#fff' }}>Request a Psychosocial Risk Consultation</h2>
                <p>Tell us about your organisation, sector, workforce size and the challenges you are managing. We will confirm how Pameltex can help.</p>
                <Link to="/contact" className="btn btn--ghost btn--lg">Request a Consultation</Link>
            </div>
        </section>
    </>
);

export default PsychosocialRisk;
