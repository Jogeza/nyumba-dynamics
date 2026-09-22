import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface PageSEOProps {
    title: string;
    description: string;
}

const SITE_NAME = 'Nyumba Dynamics';
const SITE_URL = 'https://www.nyumbadynamics.com';
const SOCIAL_IMAGE = `${SITE_URL}/icons/icon-512.png`;

const setMeta = (selector: string, attribute: 'name' | 'property', key: string, content: string) => {
    let element = document.querySelector(selector);
    if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
    }
    element.setAttribute('content', content);
};

/**
 * Sets the document title and meta description for the current page.
 * No react-helmet dependency needed - CRA's build is a single-page app,
 * so a simple effect on mount/route-change covers what search engines
 * and social previews need for a client-rendered site like this one.
 */
const PageSEO: React.FC<PageSEOProps> = ({ title, description }) => {
    const location = useLocation();

    useEffect(() => {
        const fullTitle = `${title} | ${SITE_NAME}`;
        const canonicalUrl = `${SITE_URL}${location.pathname === '/' ? '/' : location.pathname.replace(/\/$/, '')}`;
        document.title = fullTitle;

        setMeta('meta[name="description"]', 'name', 'description', description);
        setMeta('meta[property="og:title"]', 'property', 'og:title', fullTitle);
        setMeta('meta[property="og:description"]', 'property', 'og:description', description);
        setMeta('meta[property="og:type"]', 'property', 'og:type', 'website');
        setMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
        setMeta('meta[property="og:image"]', 'property', 'og:image', SOCIAL_IMAGE);
        setMeta('meta[property="og:site_name"]', 'property', 'og:site_name', SITE_NAME);
        setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
        setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle);
        setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
        setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', SOCIAL_IMAGE);

        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', canonicalUrl);

        let schema = document.querySelector('#nyumba-local-business-schema');
        if (!schema) {
            schema = document.createElement('script');
            schema.setAttribute('id', 'nyumba-local-business-schema');
            schema.setAttribute('type', 'application/ld+json');
            document.head.appendChild(schema);
        }
        schema.textContent = JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HomeAndConstructionBusiness',
            name: SITE_NAME,
            url: SITE_URL,
            image: SOCIAL_IMAGE,
            telephone: '+256761648679',
            email: 'info@nyumbadynamics.com',
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'Opposite St. Francis Primary School, Ntinda',
                addressLocality: 'Kampala',
                addressCountry: 'UG',
            },
            areaServed: 'Kampala, Uganda',
        });

    }, [title, description, location.pathname]);

    return null;
};

export default PageSEO;
