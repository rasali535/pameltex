import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header     from './components/Header';
import Footer     from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ChatBot    from './components/ChatBot';

// ── New corporate pages ───────────────────────────────────────────────────────
import Home               from './pages/Home';
import PsychosocialRisk   from './pages/PsychosocialRisk';
import HseIndustrialHygiene from './pages/HseIndustrialHygiene';
import BusinessConsulting from './pages/BusinessConsulting';
import Sectors            from './pages/Sectors';
import Insights           from './pages/Insights';
import OurCompany         from './pages/OurCompany';   // rewritten as About page
import Contact            from './pages/Contact';

// ── Legal / ancillary pages ───────────────────────────────────────────────────
import Privacy        from './pages/Privacy';
import Terms          from './pages/Terms';
import PaymentOptions from './pages/PaymentOptions';
import NotFound       from './pages/NotFound';

// ── Legacy pages (retained — NOT exposed in navigation — pending redirect strategy) ──
// IndividualTherapy, WhatIsCounselling, Booking, IntakeForm, FAQ, Login, SignUp,
// Dashboard, Resources, CorporateServices, ConsultancyServices
// These routes are kept alive to prevent 404 breakage until FCA redirects are confirmed.
import IndividualTherapy  from './pages/IndividualTherapy';
import WhatIsCounselling  from './pages/WhatIsCounselling';
import Booking            from './pages/Booking';
import IntakeForm         from './pages/IntakeForm';
import FAQ                from './pages/FAQ';
import Login              from './pages/Login';
import SignUp             from './pages/SignUp';
import Dashboard          from './pages/Dashboard';
import Resources          from './pages/Resources';
import CorporateServices  from './pages/CorporateServices';
import ConsultancyServices from './pages/ConsultancyServices';

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
                    <Route path="/about"                 element={<OurCompany />} />
                    <Route path="/contact"               element={<Contact />} />

                    {/* ── LEGAL / ANCILLARY ── */}
                    <Route path="/privacy"          element={<Privacy />} />
                    <Route path="/terms"            element={<Terms />} />
                    <Route path="/payment-options"  element={<PaymentOptions />} />

                    {/* ── LEGACY ROUTES (preserved — not in nav — redirect map PENDING) ── */}
                    {/* Phase 3 will replace these with 301 redirects once FCA URLs are confirmed */}
                    <Route path="/our-company"          element={<OurCompany />} />
                    <Route path="/individual-therapy"   element={<IndividualTherapy />} />
                    <Route path="/what-is-counselling"  element={<WhatIsCounselling />} />
                    <Route path="/booking"              element={<Booking />} />
                    <Route path="/intake"               element={<IntakeForm />} />
                    <Route path="/faq"                  element={<FAQ />} />
                    <Route path="/login"                element={<Login />} />
                    <Route path="/signup"               element={<SignUp />} />
                    <Route path="/dashboard"            element={<Dashboard />} />
                    <Route path="/resources"            element={<Resources />} />
                    <Route path="/corporate-services"   element={<CorporateServices />} />
                    <Route path="/consultancy-services" element={<ConsultancyServices />} />

                    {/* ── 404 ── */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <ChatBot />
            <Footer />
        </Router>
    );
}

export default App;
