import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFound = () => {
    return (
        <>
            <SEO
                title="404 - Page Not Found"
                description="The page you are looking for does not exist."
            >
                <meta name="robots" content="noindex, nofollow" />
            </SEO>
            <section className="page-hero" aria-label="404 error">
                <div className="container">
                    <span className="eyebrow">Error 404</span>
                    <h1 style={{ color: '#fff', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '16px' }}>
                        Page Not Found
                    </h1>
                    <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '1.1rem', maxWidth: '580px', lineHeight: 1.7, marginBottom: '32px' }}>
                        The page you requested could not be found. It may have been moved, renamed, or is no longer available.
                    </p>
                    <Link to="/" className="btn btn--primary btn--lg">Return to Homepage</Link>
                </div>
            </section>
        </>
    );
};

export default NotFound;

