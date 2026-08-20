import { useState } from 'react';
import SEO from '../components/SEO';
import { EMAIL_PRIMARY, PHONE_DISPLAY, PHONE_HREF, ADDRESS_LINE1, ADDRESS_LINE2 } from '../config/site';

const SERVICE_OPTIONS = [
    'Psychosocial Risk Consulting',
    'HSE & Industrial Hygiene Assessment',
    'Business & Organisational Consulting',
    'Not sure — I need guidance',
];

const SECTOR_OPTIONS = [
    'Manufacturing',
    'Corporate Office',
    'Education',
    'Healthcare',
    'Construction',
    'Professional Services',
    'Other',
];

const WORKFORCE_OPTIONS = ['1–25', '26–100', '101–500', '501–2000', '2000+'];
const TIMELINE_OPTIONS  = ['Immediately', 'Within 1 month', '1–3 months', '3–6 months', 'Exploratory only'];

const FACILITY_OPTIONS  = ['Manufacturing / Industrial', 'Office', 'Retail', 'School / Educational', 'Healthcare / Clinical', 'Construction Site', 'Warehouse / Logistics', 'Mixed use', 'Other'];
const HAZARD_OPTIONS    = ['Dust and particulates', 'Fumes and vapours', 'Workplace noise', 'Indoor air quality', 'Ventilation and thermal comfort', 'Chemical exposure', 'Other'];

/* Simple honeypot + consent validation */
const INITIAL_CONSULT = { name: '', org: '', role: '', email: '', phone: '', service: '', sector: '', workforce: '', location: '', timeline: '', challenge: '', consent: false, hp: '' };
const INITIAL_HSE     = { name: '', org: '', email: '', phone: '', facilityType: '', location: '', staffSize: '', hazards: [], affectedAreas: '', auditDeadline: '', preferredDate: '', additionalScope: '', consent: false, hp: '' };

const Contact = () => {
    const [tab, setTab] = useState('consult');

    // General Consultation form state
    const [consult, setConsult] = useState(INITIAL_CONSULT);
    const [consultState, setConsultState] = useState('idle'); // idle | sending | success | error
    const [consultErrors, setConsultErrors] = useState({});

    // HSE Assessment form state
    const [hse, setHse] = useState(INITIAL_HSE);
    const [hseState, setHseState] = useState('idle');
    const [hseErrors, setHseErrors] = useState({});

    /* ── Validation ─────────────────────────────────────────────────────── */
    const validateEmail = e => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

    const validateConsult = () => {
        const errs = {};
        if (!consult.name.trim())      errs.name      = 'Name is required.';
        if (!consult.org.trim())       errs.org       = 'Organisation is required.';
        if (!consult.email.trim())     errs.email     = 'Email is required.';
        else if (!validateEmail(consult.email)) errs.email = 'Please enter a valid email address.';
        if (!consult.service)          errs.service   = 'Please select a service area.';
        if (!consult.challenge.trim()) errs.challenge = 'Please briefly describe your challenge.';
        if (!consult.consent)          errs.consent   = 'Please confirm you have read the privacy notice.';
        return errs;
    };

    const validateHse = () => {
        const errs = {};
        if (!hse.name.trim())          errs.name         = 'Name is required.';
        if (!hse.org.trim())           errs.org          = 'Organisation is required.';
        if (!hse.email.trim())         errs.email        = 'Email is required.';
        else if (!validateEmail(hse.email)) errs.email   = 'Please enter a valid email address.';
        if (!hse.facilityType)         errs.facilityType = 'Please select your facility type.';
        if (hse.hazards.length === 0)  errs.hazards      = 'Please select at least one hazard concern.';
        if (!hse.consent)              errs.consent      = 'Please confirm you have read the privacy notice.';
        return errs;
    };

    /* ── Submission ─────────────────────────────────────────────────────── */
    const handleConsultSubmit = async (e) => {
        e.preventDefault();
        if (consult.hp) return; // honeypot
        const errs = validateConsult();
        if (Object.keys(errs).length) { setConsultErrors(errs); return; }
        setConsultErrors({});
        setConsultState('sending');

        const fd = new FormData();
        fd.append('type', 'Corporate Consultation Request');
        Object.entries(consult).forEach(([k, v]) => { if (k !== 'hp' && k !== 'consent') fd.append(k, String(v)); });

        try {
            const res = await fetch('/send_mail.php', { method: 'POST', body: fd });
            const json = await res.json().catch(() => ({ status: res.status }));
            if (res.ok && json.status === 200) {
                setConsultState('success');
                setConsult(INITIAL_CONSULT);
            } else {
                setConsultState('error');
            }
        } catch {
            setConsultState('error');
        }
    };

    const handleHseSubmit = async (e) => {
        e.preventDefault();
        if (hse.hp) return;
        const errs = validateHse();
        if (Object.keys(errs).length) { setHseErrors(errs); return; }
        setHseErrors({});
        setHseState('sending');

        const fd = new FormData();
        fd.append('type', 'HSE Workplace Assessment Request');
        Object.entries(hse).forEach(([k, v]) => {
            if (k === 'hp' || k === 'consent') return;
            if (k === 'hazards') fd.append(k, v.join(', '));
            else fd.append(k, String(v));
        });

        try {
            const res = await fetch('/send_mail.php', { method: 'POST', body: fd });
            const json = await res.json().catch(() => ({ status: res.status }));
            if (res.ok && json.status === 200) {
                setHseState('success');
                setHse(INITIAL_HSE);
            } else {
                setHseState('error');
            }
        } catch {
            setHseState('error');
        }
    };

    const toggleHazard = (h) => {
        setHse(prev => ({
            ...prev,
            hazards: prev.hazards.includes(h) ? prev.hazards.filter(x => x !== h) : [...prev.hazards, h],
        }));
    };

    /* ── Field helpers ──────────────────────────────────────────────────── */
    const Field = ({ id, label, required, error, children }) => (
        <div className="form-group">
            <label className="form-label" htmlFor={id}>{label}{required && <span aria-hidden="true"> *</span>}</label>
            {children}
            {error && <span className="form-error-msg" role="alert">{error}</span>}
        </div>
    );

    const Input = ({ id, value, onChange, type = 'text', placeholder = '', maxLength = 300 }) => (
        <input
            id={id} type={type} value={value} onChange={onChange}
            placeholder={placeholder} maxLength={maxLength}
            className={`form-input`}
        />
    );

    const Select = ({ id, value, onChange, options, placeholder }) => (
        <select id={id} value={value} onChange={onChange} className="form-select">
            <option value="">{placeholder || 'Select…'}</option>
            {options.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
    );

    return (
        <>
            <SEO
                title="Contact Pameltex | Request a Consultation — Botswana"
                description="Request a corporate consultation or workplace HSE assessment from Pameltex. Serving organisations in Botswana and the SADC region."
                keywords="contact Pameltex, request consultation Botswana, HSE assessment request, psychosocial risk consultation, csithole@pameltex.com"
            />

            {/* Page Hero */}
            <section className="page-hero">
                <div className="container">
                    <span className="eyebrow">Get in Touch</span>
                    <h1 style={{ color: '#fff', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '16px' }}>
                        Request a Consultation
                    </h1>
                    <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '1.1rem', maxWidth: '640px', lineHeight: 1.7 }}>
                        Tell us about your organisation and what you need. We will respond to confirm
                        how Pameltex can help and what the next step looks like.
                    </p>
                </div>
            </section>

            <section className="section bg-stone">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '48px', alignItems: 'start' }}>

                        {/* Forms */}
                        <div>
                            {/* Tab selector */}
                            <div className="tab-bar" role="tablist" aria-label="Enquiry type">
                                <button
                                    className={`tab-btn${tab === 'consult' ? ' active' : ''}`}
                                    role="tab" aria-selected={tab === 'consult'}
                                    onClick={() => setTab('consult')}
                                >
                                    General Corporate Consultation
                                </button>
                                <button
                                    className={`tab-btn${tab === 'hse' ? ' active' : ''}`}
                                    role="tab" aria-selected={tab === 'hse'}
                                    onClick={() => setTab('hse')}
                                >
                                    HSE Workplace Assessment
                                </button>
                            </div>

                            {/* ── CONSULTATION FORM ── */}
                            {tab === 'consult' && (
                                <div style={{ background: '#fff', border: '1px solid var(--c-border-light)', borderRadius: '12px', padding: '36px 32px' }}>
                                    <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '24px', color: 'var(--c-navy)' }}>
                                        Corporate Consultation Enquiry
                                    </h2>

                                    {consultState === 'success' ? (
                                        <div className="form-success">
                                            <p className="form-success__title">Thank you — enquiry received</p>
                                            <p>We will review your enquiry and respond by email within two business days.</p>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleConsultSubmit} noValidate>
                                            {/* Honeypot */}
                                            <div className="form-hp" aria-hidden="true">
                                                <input tabIndex={-1} autoComplete="off" value={consult.hp} onChange={e => setConsult(p => ({ ...p, hp: e.target.value }))} />
                                            </div>

                                            <div className="form-grid">
                                                <Field id="c-name" label="Full Name" required error={consultErrors.name}>
                                                    <Input id="c-name" value={consult.name} onChange={e => setConsult(p => ({ ...p, name: e.target.value }))} maxLength={120} />
                                                </Field>
                                                <Field id="c-org" label="Organisation" required error={consultErrors.org}>
                                                    <Input id="c-org" value={consult.org} onChange={e => setConsult(p => ({ ...p, org: e.target.value }))} maxLength={200} />
                                                </Field>
                                                <Field id="c-role" label="Your Role / Job Title" error={consultErrors.role}>
                                                    <Input id="c-role" value={consult.role} onChange={e => setConsult(p => ({ ...p, role: e.target.value }))} maxLength={120} />
                                                </Field>
                                                <Field id="c-email" label="Email Address" required error={consultErrors.email}>
                                                    <Input id="c-email" type="email" value={consult.email} onChange={e => setConsult(p => ({ ...p, email: e.target.value }))} maxLength={200} />
                                                </Field>
                                                <Field id="c-phone" label="Phone" error={consultErrors.phone}>
                                                    <Input id="c-phone" type="tel" value={consult.phone} onChange={e => setConsult(p => ({ ...p, phone: e.target.value }))} maxLength={30} />
                                                </Field>
                                                <Field id="c-location" label="City / Country" error={consultErrors.location}>
                                                    <Input id="c-location" value={consult.location} onChange={e => setConsult(p => ({ ...p, location: e.target.value }))} maxLength={120} />
                                                </Field>
                                                <Field id="c-service" label="Service Area" required error={consultErrors.service}>
                                                    <Select id="c-service" value={consult.service} onChange={e => setConsult(p => ({ ...p, service: e.target.value }))} options={SERVICE_OPTIONS} placeholder="Select a service area…" />
                                                </Field>
                                                <Field id="c-sector" label="Sector" error={consultErrors.sector}>
                                                    <Select id="c-sector" value={consult.sector} onChange={e => setConsult(p => ({ ...p, sector: e.target.value }))} options={SECTOR_OPTIONS} placeholder="Select your sector…" />
                                                </Field>
                                                <Field id="c-workforce" label="Approximate Workforce Size" error={consultErrors.workforce}>
                                                    <Select id="c-workforce" value={consult.workforce} onChange={e => setConsult(p => ({ ...p, workforce: e.target.value }))} options={WORKFORCE_OPTIONS} placeholder="Select range…" />
                                                </Field>
                                                <Field id="c-timeline" label="Engagement Timeline" error={consultErrors.timeline}>
                                                    <Select id="c-timeline" value={consult.timeline} onChange={e => setConsult(p => ({ ...p, timeline: e.target.value }))} options={TIMELINE_OPTIONS} placeholder="Select timeline…" />
                                                </Field>
                                                <Field id="c-challenge" label="Briefly describe your challenge or need" required error={consultErrors.challenge} className="full">
                                                    <textarea
                                                        id="c-challenge"
                                                        className="form-textarea"
                                                        value={consult.challenge}
                                                        onChange={e => setConsult(p => ({ ...p, challenge: e.target.value }))}
                                                        maxLength={1500}
                                                        placeholder="What risk, problem or gap are you trying to address?"
                                                        style={{ gridColumn: '1 / -1' }}
                                                    />
                                                </Field>
                                            </div>

                                            {/* Consent */}
                                            <div style={{ marginTop: '20px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                                <input
                                                    type="checkbox" id="c-consent"
                                                    checked={consult.consent}
                                                    onChange={e => setConsult(p => ({ ...p, consent: e.target.checked }))}
                                                    style={{ marginTop: '3px', flexShrink: 0 }}
                                                />
                                                <label htmlFor="c-consent" className="form-notice">
                                                    I confirm I have read the{' '}
                                                    <a href="/privacy" style={{ color: 'var(--c-teal)' }}>Privacy Policy</a>
                                                    {' '}and consent to Pameltex processing my enquiry details to respond to this request.
                                                    I understand my information will not be shared with third parties for marketing purposes.
                                                </label>
                                            </div>
                                            {consultErrors.consent && <span className="form-error-msg" role="alert">{consultErrors.consent}</span>}

                                            <p className="form-notice" style={{ marginTop: '12px' }}>
                                                This form does not collect medical, clinical or employee health information.
                                                Fields marked * are required.
                                            </p>

                                            {consultState === 'error' && (
                                                <p className="form-error-msg" role="alert" style={{ marginTop: '12px' }}>
                                                    We were unable to send your enquiry. Please try again or email us directly at{' '}
                                                    <a href={`mailto:${EMAIL_PRIMARY}`}>{EMAIL_PRIMARY}</a>.
                                                </p>
                                            )}

                                            <div style={{ marginTop: '24px' }}>
                                                <button
                                                    type="submit"
                                                    className="btn btn--primary"
                                                    disabled={consultState === 'sending'}
                                                    style={{ width: '100%', justifyContent: 'center' }}
                                                >
                                                    {consultState === 'sending' ? 'Sending…' : 'Submit Enquiry'}
                                                </button>
                                            </div>
                                        </form>
                                    )}
                                </div>
                            )}

                            {/* ── HSE FORM ── */}
                            {tab === 'hse' && (
                                <div style={{ background: '#fff', border: '1px solid var(--c-border-light)', borderRadius: '12px', padding: '36px 32px' }}>
                                    <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px', color: 'var(--c-navy)' }}>
                                        HSE Workplace Assessment Enquiry
                                    </h2>
                                    <p className="form-notice" style={{ marginBottom: '24px' }}>
                                        For organisations requesting a workplace assessment covering air quality, noise, dust,
                                        fumes, ventilation or related physical hazards.
                                    </p>

                                    {hseState === 'success' ? (
                                        <div className="form-success">
                                            <p className="form-success__title">Thank you — assessment enquiry received</p>
                                            <p>We will review your submission and respond within two business days to confirm scope and next steps.</p>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleHseSubmit} noValidate>
                                            <div className="form-hp" aria-hidden="true">
                                                <input tabIndex={-1} autoComplete="off" value={hse.hp} onChange={e => setHse(p => ({ ...p, hp: e.target.value }))} />
                                            </div>

                                            <div className="form-grid">
                                                <Field id="h-name" label="Full Name" required error={hseErrors.name}>
                                                    <Input id="h-name" value={hse.name} onChange={e => setHse(p => ({ ...p, name: e.target.value }))} maxLength={120} />
                                                </Field>
                                                <Field id="h-org" label="Organisation" required error={hseErrors.org}>
                                                    <Input id="h-org" value={hse.org} onChange={e => setHse(p => ({ ...p, org: e.target.value }))} maxLength={200} />
                                                </Field>
                                                <Field id="h-email" label="Email Address" required error={hseErrors.email}>
                                                    <Input id="h-email" type="email" value={hse.email} onChange={e => setHse(p => ({ ...p, email: e.target.value }))} maxLength={200} />
                                                </Field>
                                                <Field id="h-phone" label="Phone" error={hseErrors.phone}>
                                                    <Input id="h-phone" type="tel" value={hse.phone} onChange={e => setHse(p => ({ ...p, phone: e.target.value }))} maxLength={30} />
                                                </Field>
                                                <Field id="h-facility" label="Facility Type" required error={hseErrors.facilityType}>
                                                    <Select id="h-facility" value={hse.facilityType} onChange={e => setHse(p => ({ ...p, facilityType: e.target.value }))} options={FACILITY_OPTIONS} placeholder="Select facility type…" />
                                                </Field>
                                                <Field id="h-location" label="Facility Location" error={hseErrors.location}>
                                                    <Input id="h-location" value={hse.location} onChange={e => setHse(p => ({ ...p, location: e.target.value }))} maxLength={200} />
                                                </Field>
                                                <Field id="h-staff" label="Number of Staff at Facility" error={hseErrors.staffSize}>
                                                    <Input id="h-staff" value={hse.staffSize} onChange={e => setHse(p => ({ ...p, staffSize: e.target.value }))} maxLength={20} />
                                                </Field>
                                                <Field id="h-audit" label="Audit or Regulatory Deadline (if any)" error={hseErrors.auditDeadline}>
                                                    <Input id="h-audit" value={hse.auditDeadline} onChange={e => setHse(p => ({ ...p, auditDeadline: e.target.value }))} placeholder="e.g. March 2025 or N/A" maxLength={100} />
                                                </Field>
                                                <Field id="h-date" label="Preferred Assessment Date" error={hseErrors.preferredDate}>
                                                    <Input id="h-date" value={hse.preferredDate} onChange={e => setHse(p => ({ ...p, preferredDate: e.target.value }))} placeholder="e.g. Flexible or specific date" maxLength={100} />
                                                </Field>
                                            </div>

                                            {/* Hazard checkboxes */}
                                            <div className="form-group" style={{ marginTop: '16px' }}>
                                                <label className="form-label">Primary Hazard Concerns <span aria-hidden="true">*</span></label>
                                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
                                                    {HAZARD_OPTIONS.map(h => (
                                                        <label key={h} style={{ display: 'flex', alignItems: 'center', gap: '6px', background: hse.hazards.includes(h) ? 'rgba(29,122,107,0.1)' : 'var(--c-stone)', border: `1.5px solid ${hse.hazards.includes(h) ? 'var(--c-teal)' : 'var(--c-border)'}`, borderRadius: '6px', padding: '7px 12px', cursor: 'pointer', fontSize: '0.875rem', fontWeight: 500, transition: 'all 0.15s' }}>
                                                            <input type="checkbox" checked={hse.hazards.includes(h)} onChange={() => toggleHazard(h)} style={{ width: '14px', height: '14px' }} />
                                                            {h}
                                                        </label>
                                                    ))}
                                                </div>
                                                {hseErrors.hazards && <span className="form-error-msg" role="alert">{hseErrors.hazards}</span>}
                                            </div>

                                            {/* Affected areas */}
                                            <div className="form-group" style={{ marginTop: '16px' }}>
                                                <label className="form-label" htmlFor="h-areas">Affected Areas or Departments</label>
                                                <Input id="h-areas" value={hse.affectedAreas} onChange={e => setHse(p => ({ ...p, affectedAreas: e.target.value }))} placeholder="e.g. Cutting room, finishing area, warehouse" maxLength={400} />
                                            </div>

                                            <div className="form-group" style={{ marginTop: '16px' }}>
                                                <label className="form-label" htmlFor="h-scope">Additional Scope Information</label>
                                                <textarea
                                                    id="h-scope"
                                                    className="form-textarea"
                                                    value={hse.additionalScope}
                                                    onChange={e => setHse(p => ({ ...p, additionalScope: e.target.value }))}
                                                    maxLength={1500}
                                                    placeholder="Any additional context about the hazards, processes or assessment requirements."
                                                />
                                            </div>

                                            {/* Consent */}
                                            <div style={{ marginTop: '20px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                                <input
                                                    type="checkbox" id="h-consent"
                                                    checked={hse.consent}
                                                    onChange={e => setHse(p => ({ ...p, consent: e.target.checked }))}
                                                    style={{ marginTop: '3px', flexShrink: 0 }}
                                                />
                                                <label htmlFor="h-consent" className="form-notice">
                                                    I confirm I have read the{' '}
                                                    <a href="/privacy" style={{ color: 'var(--c-teal)' }}>Privacy Policy</a>
                                                    {' '}and consent to Pameltex processing my enquiry details.
                                                    I confirm this form does not contain individual employee medical or clinical information.
                                                </label>
                                            </div>
                                            {hseErrors.consent && <span className="form-error-msg" role="alert">{hseErrors.consent}</span>}

                                            {hseState === 'error' && (
                                                <p className="form-error-msg" role="alert" style={{ marginTop: '12px' }}>
                                                    We were unable to send your enquiry. Please email us directly at{' '}
                                                    <a href={`mailto:${EMAIL_PRIMARY}`}>{EMAIL_PRIMARY}</a>.
                                                </p>
                                            )}

                                            <div style={{ marginTop: '24px' }}>
                                                <button
                                                    type="submit"
                                                    className="btn btn--primary"
                                                    disabled={hseState === 'sending'}
                                                    style={{ width: '100%', justifyContent: 'center' }}
                                                >
                                                    {hseState === 'sending' ? 'Sending…' : 'Submit Assessment Enquiry'}
                                                </button>
                                            </div>
                                        </form>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div style={{ position: 'sticky', top: '96px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div style={{ background: '#fff', border: '1px solid var(--c-border-light)', borderRadius: '12px', padding: '28px 24px' }}>
                                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--c-navy)', marginBottom: '16px' }}>Direct Contact</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    <a href={`mailto:${EMAIL_PRIMARY}`} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.9rem', color: 'var(--c-text-mid)' }}>
                                        <span style={{ color: 'var(--c-teal)', fontSize: '1.1rem' }}>✉</span>
                                        <span>{EMAIL_PRIMARY}</span>
                                    </a>
                                    <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.9rem', color: 'var(--c-text-mid)' }}>
                                        <span style={{ color: 'var(--c-teal)', fontSize: '1.1rem' }}>📍</span>
                                        <span>{ADDRESS_LINE1}, {ADDRESS_LINE2}</span>
                                    </div>
                                    <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.9rem', color: PHONE_HREF ? 'var(--c-text-mid)' : 'var(--c-text-light)' }}>
                                        <span style={{ color: 'var(--c-teal)', fontSize: '1.1rem' }}>📞</span>
                                        {PHONE_HREF
                                            ? <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
                                            : <span style={{ fontStyle: 'italic' }}>Phone — pending confirmation</span>
                                        }
                                    </div>
                                </div>
                            </div>

                            <div style={{ background: 'var(--c-stone)', border: '1px solid var(--c-border-light)', borderRadius: '12px', padding: '24px' }}>
                                <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--c-navy)', marginBottom: '10px' }}>What happens next?</h4>
                                <ol style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', paddingLeft: '0' }}>
                                    {['We receive your enquiry', 'We review your context and challenge', 'We respond within 2 business days', 'We agree scope before any work begins'].map((s, i) => (
                                        <li key={s} style={{ display: 'flex', gap: '10px', fontSize: '0.875rem', color: 'var(--c-text-mid)' }}>
                                            <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'var(--c-teal)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 800, flexShrink: 0 }}>{i + 1}</span>
                                            {s}
                                        </li>
                                    ))}
                                </ol>
                            </div>

                            <div className="pending-notice">
                                <strong>Note:</strong> Forms currently submit to the existing mail endpoint.
                                Email delivery should be tested end-to-end before production launch.
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
