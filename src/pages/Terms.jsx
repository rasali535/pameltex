import SEO from '../components/SEO';

/**
 * LEGAL CONTENT — PAMELTEX APPROVAL REQUIRED
 * Placeholder only. Must be replaced before production launch.
 */

const Terms = () => (
    <>
        <SEO
            title="Terms & Conditions | Pameltex (Pty) Ltd"
            description="Terms and conditions for engaging Pameltex (Pty) Ltd consulting services."
        />
        <section className="page-hero">
            <div className="container">
                <h1 style={{ color: '#fff', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800 }}>Terms & Conditions</h1>
                <p style={{ color: 'rgba(255,255,255,0.72)', marginTop: '12px' }}>Pameltex (Pty) Ltd — BW00000405550</p>
            </div>
        </section>
        <section className="section bg-stone">
            <div className="container" style={{ maxWidth: '760px' }}>
                <div className="pending-notice">
                    <strong>LEGAL CONTENT — PAMELTEX APPROVAL REQUIRED.</strong> The structure below is a
                    placeholder only. Final terms must be legally reviewed and approved by Pameltex
                    before this page is published.
                </div>

                <div style={{ background: '#fff', border: '1px solid var(--c-border-light)', borderRadius: '12px', padding: '40px 36px', lineHeight: '1.8' }}>
                    {[
                        ['1. Services',         'CONTENT REQUIRED: Define the scope of consulting services, what is and is not included, and any limitations on scope.'],
                        ['2. Engagement terms',  'CONTENT REQUIRED: How engagements are initiated, scoped and agreed. Requirements for written scope agreement before work commences.'],
                        ['3. Fees and payment',  'CONTENT REQUIRED: Fee structure, invoicing terms, payment due dates, currency, accepted payment methods. Do not describe specific payment providers until confirmed.'],
                        ['4. Cancellation & refunds', 'CONTENT REQUIRED: Cancellation notice period, refund eligibility, handling of work already commenced. Must reflect the actual Pameltex cancellation policy — not invented terms.'],
                        ['5. Confidentiality',   'CONTENT REQUIRED: How client information is protected. Client obligations regarding Pameltex intellectual property.'],
                        ['6. Liability',         'CONTENT REQUIRED: Limitation of liability. Exclusion of warranties not expressly given. Applicable law.'],
                        ['7. Governing law',     'CONTENT REQUIRED: Confirm governing jurisdiction (presumed Botswana). Dispute resolution process.'],
                    ].map(([title, placeholder]) => (
                        <div key={title} style={{ marginBottom: '32px' }}>
                            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '10px' }}>{title}</h2>
                            <p style={{ color: 'var(--c-text-light)', fontStyle: 'italic' }}>[ {placeholder} ]</p>
                        </div>
                    ))}
                    <p style={{ fontSize: '0.8125rem', color: 'var(--c-text-light)', borderTop: '1px solid var(--c-border-light)', paddingTop: '16px' }}>
                        Last updated: [ DATE TO BE CONFIRMED ]
                    </p>
                </div>
            </div>
        </section>
    </>
);

export default Terms;
