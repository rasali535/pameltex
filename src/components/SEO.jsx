import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({
    title,
    description,
    // Site name default updated to corporate identity
    name = "Pameltex (Pty) Ltd",
    type = "website",
    canonical,
    ogImage = "https://www.pameltex.com/og-image.jpg",
    // Default keywords updated to B2B consulting — overridden per-page
    keywords = "Pameltex Botswana, corporate consulting Botswana, psychosocial risk consulting, HSE consulting Botswana, business consulting Gaborone",
    children
}) => {
    const { pathname } = useLocation();
    const baseUrl = "https://www.pameltex.com";
    const fullCanonical = canonical || `${baseUrl}${pathname === '/' ? '' : pathname}`;
    // Title is already complete when passed from pages — do not double-append name
    const fullTitle = title || name;

    return (
        <Helmet>
            {/* Primary metadata */}
            <title>{fullTitle}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
            <link rel="canonical" href={fullCanonical} />

            {/* Open Graph */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:url" content={fullCanonical} />
            <meta property="og:site_name" content="Pameltex (Pty) Ltd" />
            <meta property="og:locale" content="en_BW" />

            {/* Twitter / X */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* Crawlers */}
            <meta name="robots" content="index, follow" />
            <meta name="googlebot" content="index, follow" />

            {/* Brand colour — updated to corporate navy */}
            <meta name="theme-color" content="#0F2236" />

            {/* Page-specific structured data and additional tags */}
            {children}
        </Helmet>
    );
};

export default SEO;
