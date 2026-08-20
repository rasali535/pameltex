import SEO from '../components/SEO';
import { EMAIL_PRIMARY } from '../config/site';

/**
 * PAYMENT CONTENT — PAMELTEX APPROVAL REQUIRED
 * No payment provider should be named until confirmed.
 * The engagement flow is documented; provider details are pending.
 */

const PaymentOptions = () => (
    <>
        <SEO
            title="Payment Options | Pameltex (Pty) Ltd"
            description="Payment options and engagement flow for Pameltex consulting services in Botswana."
        />
        <section className="page-hero">
            <div className="container">
                <h1 style={{ color: '#fff', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800 }}>Payment Options</h1>
                <p style={{ color: 'rgba(255,255,255,0.72)', marginTop: '12px' }}>Pameltex (Pty) Ltd — BW00000405550</p>
            </div>
        </section>
        <section className="section bg-stone">
            <div className="container" style={{ maxWidth: '760px' }}>
                <div className="pending-notice">
                    <strong>PAYMENT PROVIDER — PENDING PAMELTEX CONFIRMATION.</strong> Specific payment methods,
                    providers, account details and refund policies will be added once confirmed by Pameltex.
                    Do not publish this page with live payment instructions until the provider and merchant
                    account have been confirmed and tested.
                </div>

                <div style={{ background: '#fff', border: '1px solid var(--c-border-light)', borderRadius: '12px', padding: '40px 36px' }}>
                    <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '16px' }}>How Pameltex consulting engagements are invoiced</h2>
                    <p style={{ marginBottom: '24px', color: 'var(--c-text-mid)' }}>
                        All consulting assignments follow a structured engagement and payment flow.
                        Payment is never requested before scope is agreed and documented.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                        {[
                            { step: '1', label: 'Enquiry',          desc: 'Submit your enquiry through the contact form or by email.' },
                            { step: '2', label: 'Scope Agreement',  desc: 'Pameltex confirms scope, deliverables and commercial terms in writing before work commences.' },
                            { step: '3', label: 'Client Approval',  desc: 'The client reviews and approves the agreed scope.' },
                            { step: '4', label: 'Delivery',         desc: 'Pameltex delivers the agreed consulting work.' },
                            { step: '5', label: 'Invoice',          desc: 'Invoice issued per the agreed payment terms.' },
                            { step: '6', label: 'Payment',          desc: '[ PAYMENT METHOD — PENDING CONFIRMATION ]' },
                        ].map(({ step, label, desc }, i, arr) => (
                            <div key={step} style={{ display: 'flex', gap: '16px', paddingBottom: i < arr.length - 1 ? '0' : '' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'var(--c-teal)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.8rem', flexShrink: 0 }}>{step}</div>
                                    {i < arr.length - 1 && <div style={{ width: '2px', flex: 1, background: 'var(--c-border)', marginTop: '4px', marginBottom: '4px', minHeight: '28px' }} />}
                                </div>
                                <div style={{ paddingBottom: '24px', paddingTop: '4px' }}>
                                    <p style={{ fontWeight: 700, color: 'var(--c-navy)', marginBottom: '4px' }}>{label}</p>
                                    <p style={{ fontSize: '0.9rem', color: label === 'Payment' ? 'var(--c-text-light)' : 'var(--c-text-mid)', fontStyle: label === 'Payment' ? 'italic' : 'normal' }}>{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: '20px', borderTop: '1px solid var(--c-border-light)', paddingTop: '20px' }}>
                        <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '8px' }}>Cancellation & refunds</h3>
                        <p style={{ color: 'var(--c-text-light)', fontStyle: 'italic', fontSize: '0.9rem' }}>
                            [ CONTENT REQUIRED: Cancellation notice period and refund policy to be supplied and approved by Pameltex. ]
                        </p>
                    </div>

                    <div style={{ marginTop: '20px', borderTop: '1px solid var(--c-border-light)', paddingTop: '20px' }}>
                        <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '8px' }}>Questions about payment</h3>
                        <p style={{ color: 'var(--c-text-mid)', fontSize: '0.9rem' }}>
                            Contact us at{' '}
                            <a href={`mailto:${EMAIL_PRIMARY}`} style={{ color: 'var(--c-teal)' }}>{EMAIL_PRIMARY}</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </>
);

export default PaymentOptions;
