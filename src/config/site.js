/**
 * PAMELTEX — Central Site Configuration
 *
 * All contact details, FCA URLs, analytics IDs, and other
 * environment-specific values are managed here.
 *
 * Update this file — NOT scattered component code — when:
 *  - The phone number is confirmed
 *  - FCA destination URLs are confirmed
 *  - A GA4 property ID is supplied
 *  - A payment provider is confirmed
 */

// ─── Contact Details ─────────────────────────────────────────────────────────
export const PHONE_DISPLAY = '+267 72 534 203';
export const PHONE_HREF    = 'tel:+26772534203';

export const EMAIL_PRIMARY = 'info@pameltex.com';
export const EMAIL_GENERAL = 'info@pameltex.com';

export const ADDRESS_LINE1 = 'Plot 18680, Khuhurutse Street, Phase 2';
export const ADDRESS_LINE2 = 'Gaborone, Botswana';

export const COMPANY_NAME  = 'Pameltex (Pty) Ltd';
export const COMPANY_REG   = 'BW00000405550';
export const WEBSITE_URL   = 'https://www.pameltex.com';

// ─── Analytics ────────────────────────────────────────────────────────────────
// GA4_MEASUREMENT_ID: OWNER VERIFICATION REQUIRED.
// Do not create a new GA4 property. Supply the existing ID here.
export const GA4_MEASUREMENT_ID = ''; // e.g. 'G-XXXXXXXXXX' — awaiting Pameltex

// ─── FCA (Foundations Counselling Academy) ────────────────────────────────────
export const FCA = {
  baseUrl:           'https://academyfoundations.com/counselling',
  individualTherapy: 'https://academyfoundations.com/counselling',
  whatIsCounselling: 'https://academyfoundations.com/counselling',
  booking:           'https://academyfoundations.com/counselling',
  intake:            'https://academyfoundations.com/counselling',
  displayName:       'Foundations Counselling Academy (FCA)',
  shortName:         'FCA',
};


// ─── Pameltech Labs ───────────────────────────────────────────────────────────
export const PAMELTECH = {
  url:         'https://www.pameltechlabs.com',
  displayName: 'Pameltech Labs',
};

// ─── Payment ──────────────────────────────────────────────────────────────────
// Payment provider: PENDING PAMELTEX CONFIRMATION.
// Do not reference specific processors until confirmed.
export const PAYMENT_PROVIDER = 'PENDING_CONFIRMATION';

// ─── Social ──────────────────────────────────────────────────────────────────
export const SOCIAL = {
  facebook: 'https://www.facebook.com/pameltex',
  linkedin: '', // awaiting confirmation
};
