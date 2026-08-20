import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { WEBSITE_URL } from '../config/site';

const SERVICES = [
    {
        title: 'Strategy Translation & Execution Planning',
        problem: 'Strategic plans that exist as documents but do not translate into operational action.',
        delivers: 'A structured execution plan that maps strategic objectives to operational priorities, accountabilities and timelines.',
        gain: 'Leaders understand what needs to change, who is responsible and how progress will be tracked.',
    },
    {
        title: 'Operating Model & Organisational Design',
        problem: 'Structure and processes that do not match the organisation\'s current purpose or scale.',
        delivers: 'Review of the operating model, reporting lines and functional responsibilities. Practical recommendations for realignment.',
        gain: 'Clarity on how the organisation is structured to deliver its mandate.',
    },
    {
        title: 'Policies, Procedures & SOPs',
        problem: 'Outdated, missing or inconsistent policies and procedures that create compliance and operational risk.',
        delivers: 'Development or review of workplace policies, procedures and standard operating procedures appropriate to the organisation\'s context.',
        gain: 'Documented, approved and communicated standards that staff can follow and auditors can verify.',
    },
    {
        title: 'Governance Frameworks',
        problem: 'Unclear accountability, inadequate board/management oversight and governance gaps.',
        delivers: 'Governance framework design including committee structures, terms of reference, reporting mechanisms and escalation pathways.',
        gain: 'A governance structure that holds under external scrutiny and provides clear internal accountability.',
    },
    {
        title: 'Quality Management Systems',
        problem: 'Inconsistent service or product quality and an absence of systematic quality monitoring.',
        delivers: 'Quality management system design or review, including quality standards, monitoring indicators and review cycles.',
        gain: 'A basis for consistent quality management and continuous improvement.',
    },
    {
        title: 'Institutional Compliance & Audit Readiness',
        problem: 'Regulatory, ethical-trade or sector compliance requirements that the organisation cannot yet demonstrate.',
        delivers: 'Gap analysis against the relevant compliance standard, corrective-action planning and audit-evidence preparation.',
        gain: 'A clear view of compliance position and a structured path to meet requirements.',
    },
    {
        title: 'Process Improvement',
        problem: 'Inefficient processes that create avoidable cost, delay or error.',
        delivers: 'Process mapping, root-cause analysis and redesign recommendations targeted at the highest-impact inefficiencies.',
        gain: 'Measurable process improvements with defined ownership and monitoring.',
    },
    {
        title: 'Programme & Proposal Frameworks',
        problem: 'Organisations that need to structure, bid for or manage programmes but lack the internal capability.',
        delivers: 'Programme design frameworks, proposal structuring and monitoring and evaluation frameworks appropriate to funder or client requirements.',
        gain: 'A credible, structured programme or proposal that meets the requirements of the intended audience.',
    },
];

const BusinessConsulting = () => (
    <>
        <SEO
            title="Business & Organisational Consulting | Pameltex — Botswana"
            description="Strategy execution, operating models, SOPs, governance frameworks, quality management and audit readiness consulting in Botswana and the SADC region."
            keywords="business consulting Botswana, organisational consulting Botswana, strategy execution, governance framework Botswana, audit readiness, SOP development, quality management Botswana"
        >
            <script type="application/ld+json">{JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Service',
                'name': 'Business & Organisational Consulting',
                'provider': { '@type': 'Organization', 'name': 'Pameltex (Pty) Ltd', 'url': WEBSITE_URL },
                'areaServed': ['Botswana', 'SADC'],
                'description': 'Business consulting covering strategy, operating models, SOPs, governance, quality management and audit readiness.',
            })}</script>
        </SEO>

        {/* Page Hero */}
        <section className="page-hero page-hero--corporate">
            <div className="container">
                <span className="eyebrow">Consulting Service — 03</span>
                <h1 style={{ color: '#fff', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '16px', maxWidth: '720px' }}>
                    Business & Organisational Consulting
                </h1>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', maxWidth: '640px', lineHeight: 1.7 }}>
                    Practical consulting on strategy, systems, governance and compliance.
                    From understanding to implementation — not reports that sit on shelves.
                </p>
                <div style={{ display: 'flex', gap: '16px', marginTop: '32px', flexWrap: 'wrap' }}>
                    <Link to="/contact" className="btn btn--primary">Discuss a Consulting Assignment</Link>
                    <Link to="/contact" className="btn btn--ghost">Contact Pameltex</Link>
                </div>
            </div>
        </section>

        {/* Philosophy */}
        <section className="section bg-stone">
            <div className="container">
                <div style={{ maxWidth: '760px' }}>
                    <span className="eyebrow">Our Approach</span>
                    <h2 className="heading-lg" style={{ marginBottom: '16px' }}>What makes this different</h2>
                    <p className="body-lg" style={{ marginBottom: '16px' }}>
                        Pameltex does not deliver generic strategy frameworks or management-theory workshops.
                        We work with organisations on the specific systems, documents, processes and decisions
                        that need to change.
                    </p>
                    <p className="body-md" style={{ marginBottom: '16px' }}>
                        Every consulting service below answers three questions: what problem does it solve,
                        what will Pameltex deliver, and what decision or improvement does the client gain.
                    </p>
                    <p className="body-md">
                        Consulting assignments are scoped, agreed and documented before work begins.
                        Deliverables are agreed in advance. Implementation support is available beyond initial delivery.
                    </p>
                </div>
            </div>
        </section>

        {/* Services */}
        <section className="section bg-white">
            <div className="container">
                <div className="section-header">
                    <span className="eyebrow">Service Areas</span>
                    <h2 className="heading-lg">What Pameltex delivers</h2>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {SERVICES.map(({ title, problem, delivers, gain }) => (
                        <div key={title} style={{ background: 'var(--c-stone)', border: '1px solid var(--c-border-light)', borderRadius: '12px', padding: '32px 28px' }}>
                            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--c-navy)', marginBottom: '20px' }}>{title}</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                                <div>
                                    <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--c-text-light)', marginBottom: '6px' }}>The Problem</p>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--c-text-mid)' }}>{problem}</p>
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--c-teal)', marginBottom: '6px' }}>What Pameltex Delivers</p>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--c-text-mid)' }}>{delivers}</p>
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--c-navy)', marginBottom: '6px' }}>What You Gain</p>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--c-text-mid)' }}>{gain}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Engagement journey */}
        <section className="section bg-stone">
            <div className="container">
                <div className="section-header centered">
                    <span className="eyebrow">How Engagements Work</span>
                    <h2 className="heading-lg">The typical consulting journey</h2>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0', maxWidth: '600px', width: '100%' }}>
                        {[
                            { label: 'Initial Consultation',  desc: 'Understand your context, priorities and the specific problem you need to solve.' },
                            { label: 'Scope Agreement',        desc: 'Define the work, deliverables, timeline and commercial terms before commencing.' },
                            { label: 'Discovery & Analysis',   desc: 'Gather information, review documents, consult stakeholders and analyse findings.' },
                            { label: 'Recommendations',        desc: 'Present findings and practical recommendations in a format your organisation can act on.' },
                            { label: 'Implementation Support', desc: 'Optional: support with putting recommendations into practice.' },
                            { label: 'Review',                 desc: 'Assess whether agreed changes have been implemented and are achieving the intended result.' },
                        ].map(({ label, desc }, i, arr) => (
                            <div key={label} style={{ display: 'flex', gap: '16px', paddingBottom: i < arr.length - 1 ? '0' : undefined }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--c-teal)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.8rem', flexShrink: 0 }}>
                                        {i + 1}
                                    </div>
                                    {i < arr.length - 1 && <div style={{ width: '2px', flex: 1, background: 'var(--c-border)', marginTop: '4px', marginBottom: '4px', minHeight: '32px' }} />}
                                </div>
                                <div style={{ paddingBottom: '24px', paddingTop: '6px' }}>
                                    <p style={{ fontWeight: 700, color: 'var(--c-navy)', marginBottom: '4px' }}>{label}</p>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--c-text-mid)' }}>{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* CTA */}
        <section className="cta-band">
            <div className="container">
                <h2 className="heading-lg" style={{ color: '#fff' }}>Discuss a Consulting Assignment</h2>
                <p>Tell us about the challenge you are trying to solve, the context your organisation operates in, and the outcome you need.</p>
                <Link to="/contact" className="btn btn--ghost btn--lg">Request a Consultation</Link>
            </div>
        </section>
    </>
);

export default BusinessConsulting;
