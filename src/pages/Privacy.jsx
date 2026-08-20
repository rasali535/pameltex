import SEO from '../components/SEO';

/**
 * LEGAL CONTENT — PAMELTEX APPROVAL REQUIRED
 * This page contains placeholder text only.
 * Final legal language must be drafted and approved by Pameltex
 * before production publication.
 */

const Privacy = () => (
    <>
        <SEO
            title="Privacy Policy | Pameltex (Pty) Ltd"
            description="Privacy policy for Pameltex (Pty) Ltd — how we collect, use and protect your information."
        />
        <section className="page-hero">
            <div className="container">
                <h1 style={{ color: '#fff', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800 }}>Privacy Policy</h1>
                <p style={{ color: 'rgba(255,255,255,0.72)', marginTop: '12px' }}>Pameltex (Pty) Ltd — BW00000405550</p>
            </div>
        </section>
        <section className="section bg-stone">
            <div className="container" style={{ maxWidth: '760px' }}>
                <div className="pending-notice">
                    <strong>LEGAL CONTENT — PAMELTEX APPROVAL REQUIRED.</strong> The text below is a structural
                    placeholder only. It must be replaced with legally reviewed and Pameltex-approved privacy
                    policy language before this page is published in production.
                </div>

                <div style={{ background: '#fff', border: '1px solid var(--c-border-light)', borderRadius: '12px', padding: '40px 36px', lineHeight: '1.8' }}>
                    <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '12px' }}>1. Who we are</h2>
                    <p style={{ marginBottom: '20px', color: 'var(--c-text-mid)' }}>
                        Pameltex (Pty) Ltd (registration BW00000405550), Plot 18680, Khuhurutse Street,
                        Phase 2, Gaborone, Botswana. Contact: info@pameltex.com.
                    </p>
                    <p style={{ marginBottom: '32px', color: 'var(--c-text-light)', fontStyle: 'italic' }}>
                        [ CONTENT REQUIRED: Full privacy policy to be supplied and approved by Pameltex.
                        Must address: data collected, legal basis for processing, retention periods,
                        third-party sharing, data-subject rights, cookies, contact details for privacy queries,
                        and any applicable regulatory framework (e.g. Botswana Data Protection Act). ]
                    </p>

                    <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '12px' }}>2. What information we collect</h2>
                    <p style={{ marginBottom: '32px', color: 'var(--c-text-light)', fontStyle: 'italic' }}>
                        [ CONTENT REQUIRED: Describe the categories of personal information collected via
                        enquiry forms, contact requests and website analytics. Confirm what is NOT collected
                        (e.g. individual medical or clinical information). ]
                    </p>

                    <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '12px' }}>3. How we use your information</h2>
                    <p style={{ marginBottom: '32px', color: 'var(--c-text-light)', fontStyle: 'italic' }}>
                        [ CONTENT REQUIRED: Purpose of processing — responding to enquiries, scoping consulting
                        engagements, sending service-related communications. Legal basis for each purpose. ]
                    </p>

                    <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '12px' }}>4. Your rights</h2>
                    <p style={{ marginBottom: '32px', color: 'var(--c-text-light)', fontStyle: 'italic' }}>
                        [ CONTENT REQUIRED: Data-subject rights applicable under the relevant jurisdiction —
                        access, correction, erasure, objection. How to exercise these rights. ]
                    </p>

                    <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '12px' }}>5. Cookies and analytics</h2>
                    <p style={{ marginBottom: '32px', color: 'var(--c-text-light)', fontStyle: 'italic' }}>
                        [ CONTENT REQUIRED: Cookie usage policy, analytics tools in use (once confirmed),
                        and user opt-out options. ]
                    </p>

                    <p style={{ fontSize: '0.8125rem', color: 'var(--c-text-light)', borderTop: '1px solid var(--c-border-light)', paddingTop: '16px', marginTop: '16px' }}>
                        Last updated: [ DATE TO BE CONFIRMED ]
                    </p>
                </div>
            </div>
        </section>
    </>
);

export default Privacy;
