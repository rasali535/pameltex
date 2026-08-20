import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

/**
 * Insights / Projects page.
 * This is designed as an extensible content hub.
 * Add new entries to the INSIGHTS array to add articles, case studies or checklists
 * without restructuring the page component.
 *
 * CONTENT REQUIRED FROM PAMELTEX:
 *  - Additional approved case studies
 *  - Anonymised project examples
 *  - Downloadable checklists (once approved)
 *  - Authored guidance articles
 *  - Any client-specific outcomes (with written client approval)
 */

const CATEGORIES = ['All', 'Case Study', 'Guidance', 'Checklist'];

const INSIGHTS = [
    {
        id: 'gaborone-manufacturing-2024',
        type: 'Case Study',
        title: 'Industrial hygiene assessment — clothing manufacturing facility, Gaborone',
        desc:  'Air quality (PM2.5/PM10), formaldehyde indicators, noise mapping and ventilation review for a 71-person facility preparing for an ethical-trade audit. Corrective-action plan and SMETA compliance support.',
        tags:  ['Industrial Hygiene', 'Manufacturing', 'SMETA', 'Air Quality'],
        note:  'Client name withheld. Screening instruments used; scope is not laboratory-grade analysis.',
        cta:   null, // No separate URL; case study is embedded on the HSE page
        ctaLabel: null,
    },
    // ── CONTENT PLACEHOLDERS — awaiting Pameltex approval ──────────────────
    {
        id: 'placeholder-psychosocial-2024',
        type: 'Case Study',
        title: '[ CONTENT REQUIRED FROM PAMELTEX ] Psychosocial risk assessment — example',
        desc:  'This slot is reserved for an approved, anonymised psychosocial risk case study. Please supply content.',
        tags:  ['Psychosocial Risk'],
        note:  'PLACEHOLDER — Not for production publication.',
        cta:   null,
        ctaLabel: null,
        placeholder: true,
    },
    {
        id: 'placeholder-checklist-hse',
        type: 'Checklist',
        title: '[ CONTENT REQUIRED FROM PAMELTEX ] Workplace HSE readiness checklist',
        desc:  'Reserved for a downloadable workplace HSE readiness checklist. Please supply and approve content.',
        tags:  ['HSE', 'Checklist'],
        note:  'PLACEHOLDER — Not for production publication.',
        cta:   null,
        ctaLabel: null,
        placeholder: true,
    },
    {
        id: 'placeholder-guidance-psychosocial',
        type: 'Guidance',
        title: '[ CONTENT REQUIRED FROM PAMELTEX ] Managing psychosocial risks in manufacturing environments',
        desc:  'Reserved for a practical guidance article on psychosocial risk in manufacturing. Please supply and approve content.',
        tags:  ['Psychosocial Risk', 'Manufacturing', 'Guidance'],
        note:  'PLACEHOLDER — Not for production publication.',
        cta:   null,
        ctaLabel: null,
        placeholder: true,
    },
];

const Insights = () => (
    <>
        <SEO
            title="Insights & Projects | Pameltex — Botswana Corporate Consulting"
            description="Case studies, practical guidance and checklists from Pameltex consulting engagements in Botswana and the SADC region."
            keywords="workplace risk case study Botswana, industrial hygiene case study, psychosocial risk examples, HSE guidance Botswana, workplace consulting insights"
        />

        {/* Page Hero */}
        <section className="page-hero">
            <div className="container">
                <span className="eyebrow">Field Evidence & Practical Guidance</span>
                <h1 style={{ color: '#fff', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '16px' }}>
                    Insights & Projects
                </h1>
                <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '1.1rem', maxWidth: '640px', lineHeight: 1.7 }}>
                    Anonymised case studies, practical guidance and checklists from Pameltex
                    consulting engagements. No fabricated results. No invented testimonials.
                </p>
            </div>
        </section>

        {/* Content notice */}
        <section className="section--sm bg-white">
            <div className="container">
                <div className="pending-notice">
                    <strong>Content pending:</strong> This section will expand as Pameltex approves additional case studies,
                    guidance articles and downloadable checklists. All client references require written client approval
                    before publication. Placeholder entries below are marked and must not be published without approval.
                </div>
            </div>
        </section>

        {/* Insights grid */}
        <section className="section bg-stone">
            <div className="container">
                <div className="insights-grid">
                    {INSIGHTS.map(({ id, type, title, desc, tags, note, placeholder }) => (
                        <div
                            className="insight-card"
                            key={id}
                            style={placeholder ? { opacity: 0.5, border: '2px dashed var(--c-border)' } : {}}
                        >
                            <div className="insight-card__meta">
                                <span className="tag tag--dark">{type}</span>
                                {placeholder && <span className="tag tag--amber">Placeholder</span>}
                            </div>
                            <div className="insight-card__body">
                                <h2 className="insight-card__title">{title}</h2>
                                <p className="insight-card__desc">{desc}</p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                                    {tags.map(t => <span className="tag" key={t}>{t}</span>)}
                                </div>
                                {note && (
                                    <p style={{ fontSize: '0.78rem', color: 'var(--c-text-light)', fontStyle: 'italic' }}>
                                        {note}
                                    </p>
                                )}
                                {!placeholder && type === 'Case Study' && (
                                    <Link to="/hse-industrial-hygiene" className="pillar-card__link" style={{ marginTop: '16px', display: 'inline-flex' }}>
                                        Read about the service →
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* CTA */}
        <section className="cta-band">
            <div className="container">
                <h2 className="heading-lg" style={{ color: '#fff' }}>Discuss your organisation's challenges</h2>
                <p>If you want to understand how Pameltex has approached similar problems, contact us for a direct conversation.</p>
                <Link to="/contact" className="btn btn--ghost btn--lg">Request a Consultation</Link>
            </div>
        </section>
    </>
);

export default Insights;
