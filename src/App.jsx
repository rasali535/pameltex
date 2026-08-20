import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header     from './components/Header';
import Footer     from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// ── New corporate pages ───────────────────────────────────────────────────────
import Home                 from './pages/Home';
import PsychosocialRisk     from './pages/PsychosocialRisk';
import HseIndustrialHygiene from './pages/HseIndustrialHygiene';
import BusinessConsulting   from './pages/BusinessConsulting';
import Sectors              from './pages/Sectors';
import Insights             from './pages/Insights';
import About                from './pages/OurCompany';   // OurCompany rewritten as About
import Contact              from './pages/Contact';

// ── Legal / ancillary pages ───────────────────────────────────────────────────
import Privacy        from './pages/Privacy';
import Terms          from './pages/Terms';
import PaymentOptions from './pages/PaymentOptions';
import NotFound       from './pages/NotFound';

// ── Legacy pages — FCA pending routes (still served until FCA URLs confirmed) ──
// These must remain imported while /individual-therapy, /what-is-counselling,
// /booking and /intake serve the legacy React components.
// Remove these imports when external FCA redirects are implemented.
import IndividualTherapy  from './pages/IndividualTherapy';
import WhatIsCounselling  from './pages/WhatIsCounselling';
import Booking            from './pages/Booking';
import IntakeForm         from './pages/IntakeForm';
import FAQ                from './pages/FAQ';
import Login              from './pages/Login';
import SignUp             from './pages/SignUp';
import Dashboard          from './pages/Dashboard';
// Resources, CorporateServices, ConsultancyServices: now Navigate redirects — no import needed.

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Header />
            <main>
                <Routes>
                    {/* ── PRIMARY CORPORATE ROUTES ── */}
                    <Route path="/"                      element={<Home />} />
                    <Route path="/psychosocial-risk"     element={<PsychosocialRisk />} />
                    <Route path="/hse-industrial-hygiene" element={<HseIndustrialHygiene />} />
                    <Route path="/business-consulting"   element={<BusinessConsulting />} />
                    <Route path="/sectors"               element={<Sectors />} />
                    <Route path="/insights"              element={<Insights />} />
                    <Route path="/about"                 element={<About />} />
                    <Route path="/contact"               element={<Contact />} />

                    {/* ── LEGAL / ANCILLARY ── */}
                    <Route path="/privacy"          element={<Privacy />} />
                    <Route path="/terms"            element={<Terms />} />
                    <Route path="/payment-options"  element={<PaymentOptions />} />


                    {/* ── LEGACY ROUTES — REACT-SIDE REDIRECTS ── */}
                    {/* These mirror the .htaccess 301 redirects for client-side navigation */}
                    <Route path="/our-company"          element={<Navigate to="/about" replace />} />
                    <Route path="/consultancy-services" element={<Navigate to="/business-consulting" replace />} />
                    <Route path="/corporate-services"   element={<Navigate to="/psychosocial-risk" replace />} />
                    <Route path="/resources"            element={<Navigate to="/insights" replace />} />

                    {/* ── FCA PENDING ROUTES ── */}
                    {/* Serving legacy pages until FCA destination URLs are confirmed.   */}
                    {/* Replace with external redirects once FCA URLs are approved.     */}
                    <Route path="/individual-therapy"   element={<IndividualTherapy />} />
                    <Route path="/what-is-counselling"  element={<WhatIsCounselling />} />
                    <Route path="/booking"              element={<Booking />} />
                    <Route path="/intake"               element={<IntakeForm />} />
                    <Route path="/faq"                  element={<FAQ />} />
                    <Route path="/login"                element={<Login />} />
                    <Route path="/signup"               element={<SignUp />} />
                    <Route path="/dashboard"            element={<Dashboard />} />

                    {/* ── 404 ── */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
