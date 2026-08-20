import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const SECTORS = [
    {
        icon: '🏭',
        title: 'Manufacturing',
        risks: ['Dust, fumes and particulate exposure', 'Noise from machinery', 'Chemical handling and storage', 'Psychosocial risk from shift work and production pressure', 'Ethical-trade and SMETA audit requirements', 'SOPs for quality and safety'],
        consult: 'Industrial hygiene assessments, air-quality screening, corrective-action planning, SMETA compliance support, workforce risk profiling.',
    },
    {
        icon: '🏢',
        title: 'Corporate Offices',
        risks: ['Indoor air quality and thermal comfort', 'Psychosocial risk from hybrid work, workload and management style', 'Role clarity and accountability structures', 'Policy and governance gaps', 'Change management and restructuring'],
        consult: 'Psychosocial risk assessments, policy review, governance frameworks, operating-model support.',
    },
    {
        icon: '📚',
        title: 'Education',
        risks: ['Psychosocial risk for staff (emotional labour, workload, student behaviour)', 'Indoor environment quality in classrooms', 'Governance and institutional compliance', 'Policy frameworks for safeguarding and wellbeing'],
        consult: 'Staff psychosocial risk review, air-quality screening, governance and policy development, audit preparation.',
    },
    {
        icon: '🏥',
        title: 'Healthcare',
        risks: ['Traumatic exposure and compassion fatigue for clinical staff', 'Infectious and chemical exposure control', 'Noise and thermal comfort in ward environments', 'Governance and quality management requirements', 'Regulatory compliance'],
        consult: 'Psychosocial risk assessment with FCA referral for individual support, environmental assessments, quality and governance frameworks.',
    },
    {
        icon: '🏗️',
        title: 'Construction',
        risks: ['Dust (including silica), fumes and chemical exposure', 'Noise from plant and equipment', 'Psychosocial risk from site culture, long hours and safety pressure', 'HSE management system requirements', 'Contractor compliance'],
        consult: 'Dust and fume screening, noise mapping, HSE system review, SOP development, psychosocial risk assessment.',
    },
    {
        icon: '⚖️',
        title: 'Professional Services',
        risks: ['Psychosocial risk from client demands, billing pressure and performance culture', 'Governance and accountability structures', 'Policy gaps and HR compliance', 'Indoor environment quality in office settings'],
        consult: 'Psychosocial risk profiling, governance framework review, policy development, operating-model support.',
    },
];

const Sectors = () => (
    <>
        <SEO
            title="Sectors We Serve | Pameltex — Botswana Corporate Consulting"
            description="Pameltex provides psychosocial risk, HSE and business consulting to manufacturing, corporate, education, healthcare, construction and professional-services organisations in Botswana."
            keywords="industrial hygiene manufacturing Botswana, workplace risk corporate offices, HSE construction Botswana, healthcare HSE consulting, education workplace risk"
        />

        {/* Page Hero */}
        <section className="page-hero page-hero--regional">
            <div className="container">
                <span className="eyebrow">Where We Work</span>
                <h1 style={{ color: '#fff', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '16px' }}>
                    Sectors We Serve
                </h1>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', maxWidth: '640px', lineHeight: 1.7 }}>
                    Pameltex consulting is sector-adapted. The risks, regulatory context and operational
                    realities differ significantly across industries.
                </p>
            </div>
        </section>

        {/* Sectors */}
        <section className="section bg-stone">
            <div className="container">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                    {SECTORS.map(({ icon, title, risks, consult }) => (
                        <div key={title} style={{ background: 'var(--c-white)', border: '1px solid var(--c-border-light)', borderRadius: '16px', padding: '36px 32px' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '40px', alignItems: 'start' }}>
                                <div>
                                    <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{icon}</div>
                                    <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--c-navy)', marginBottom: '12px' }}>{title}</h2>
                                    <span className="tag">{title}</span>
                                </div>
                                <div>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px' }}>
                                        <div>
                                            <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--c-text-light)', marginBottom: '12px' }}>
                                                Typical Risks & Needs
                                            </p>
                                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                                {risks.map(r => (
                                                    <li key={r} style={{ display: 'flex', gap: '8px', fontSize: '0.9rem', color: 'var(--c-text-mid)' }}>
                                                        <span style={{ color: 'var(--c-teal)', flexShrink: 0 }}>›</span>
                                                        {r}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--c-teal)', marginBottom: '12px' }}>
                                                Pameltex Consulting in this Sector
                                            </p>
                                            <p style={{ fontSize: '0.9rem', color: 'var(--c-text-mid)', lineHeight: 1.65 }}>{consult}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* CTA */}
        <section className="cta-band">
            <div className="container">
                <h2 className="heading-lg" style={{ color: '#fff' }}>Your sector, your risks</h2>
                <p>Tell us about your organisation and the specific challenges you face. Pameltex will confirm whether and how we can help.</p>
                <Link to="/contact" className="btn btn--ghost btn--lg">Request a Consultation</Link>
            </div>
        </section>
    </>
);

export default Sectors;
