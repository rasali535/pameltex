import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFound = () => {
    return (
        <>
            <SEO
                title="404 - Not Found"
                description="The page you are looking for does not exist."
            >
                <meta name="robots" content="noindex, nofollow" />
            </SEO>
            <section className="hero page-hero" style={{ padding: '100px 0', background: 'var(--bg-dark)' }}>
                <div className="container">
                    <h1 className="hero-title" style={{ fontSize: '36px' }}>404 - Page Not Found</h1>
                    <p className="hero-subtitle">The page you are looking for does not exist.</p>
                    <Link to="/" className="btn btn-solid">Return Home</Link>
                </div>
            </section>
        </>
    );
};

export default NotFound;
