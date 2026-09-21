import React from 'react';
import { Link } from 'react-router-dom';
import servicesData from '../data/servicesData.json';
import { serviceImages, serviceAlt } from '../data/siteImages.ts';
import electricalIcon from '../assets/images/svg/services-svg1.svg';
import plumbingIcon from '../assets/images/svg/services-svg2.svg';
import paintingIcon from '../assets/images/svg/services-svg6.svg';

const iconCards: Record<string, string> = {
    'electrical-services': electricalIcon,
    'plumbing-services': plumbingIcon,
    painting: paintingIcon,
};

interface V2ServiceCardsProps {
    limit?: number;
    title?: string;
    caption?: string;
    subtitle?: string;
}

export const V2ServiceCards: React.FC<V2ServiceCardsProps> = ({
    limit = 6,
    title = "Our Engineering & Maintenance Services",
    caption = "What We Do",
    subtitle = "From emergency repairs to scheduled maintenance and specialized installations, Nyumba Dynamics provides practical property support for residential, commercial, and industrial spaces."
}) => {
    const displayedServices = servicesData.slice(0, limit);

    return (
        <section className="section-two v2-service-section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="sec-title text-center">
                            <span className="cap-text">{caption}</span>
                            <h2 className="sec-text">{title}</h2>
                            {subtitle && (
                                <p className="sec-subtext mx-auto" style={{ maxWidth: '680px', marginTop: '12px' }}>
                                    {subtitle}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="v2-scroll-hint">Swipe sideways to view more services &rarr;</div>

                <div className="v2-service-cards-grid">
                    {displayedServices.map((service) => {
                        const img = serviceImages[service.slug] || serviceImages['electrical-services'];
                        const alt = serviceAlt[service.slug] || `Nyumba Dynamics ${service.title} service`;
                        const icon = iconCards[service.slug];
                        return (
                            <article key={service.slug} className="v2-service-card">
                                <div className={`v2-service-card-image ${icon ? 'v2-service-card-icon' : ''}`}>
                                    <img src={icon || img} alt={icon ? '' : alt} loading="lazy" />
                                </div>
                                <div className="v2-service-card-body">
                                    <h3 className="v2-service-card-title">{service.title}</h3>
                                    <p className="v2-service-card-desc">{service.desc}</p>
                                    <div className="v2-service-card-actions">
                                        <Link to={`/services/${service.slug}`} className="v2-service-card-learn">
                                            Learn more &rarr;
                                        </Link>
                                        <Link
                                            to={`/consultation?service=${encodeURIComponent(service.slug)}#consultation-form`}
                                            className="v2-service-card-request"
                                        >
                                            Request
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>

                <div className="v2-view-all-wrap justify-content-center">
                    <Link to="/services" className="v2-view-all-link">
                        View All {servicesData.length} Services &rarr;
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default V2ServiceCards;
