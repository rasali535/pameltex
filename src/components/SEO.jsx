import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({
    title,
    description,
    name = "Pameltex Psychosocial & Counseling",
    type = "website",
    canonical,
    ogImage = "https://www.pameltex.com/og-image.jpg",
    keywords = "counseling, psychotherapy, mental health, Gaborone, Botswana, psychosocial support, individual therapy, corporate counseling",
    children
}) => {
    const { pathname } = useLocation();
    const baseUrl = "https://www.pameltex.com";
    const fullCanonical = canonical || `${baseUrl}${pathname === '/' ? '' : pathname}`;
    const fullTitle = title ? `${title} | ${name}` : name;

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{fullTitle}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
            <link rel="canonical" href={fullCanonical} />

            {/* Open Graph / Facebook tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:url" content={fullCanonical} />
            <meta property="og:site_name" content={name} />

            {/* Twitter tags */}
            <meta name="twitter:creator" content="@pameltex" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* Search Engine Optimization */}
            <meta name="robots" content="index, follow" />
            <meta name="googlebot" content="index, follow" />
            <meta name="theme-color" content="#4f46e5" />
            {children}
        </Helmet>
    );
};

export default SEO;
