import React from 'react';
import { Link } from 'react-router-dom';
import servicesData from '../data/servicesData.json';
import ServiceLineIcon from './ServiceLineIcon.tsx';

interface V2ServiceCardsProps {
    limit?: number;
    title?: string;
    caption?: string;
    subtitle?: string;
}

export const V2ServiceCards: React.FC<V2ServiceCardsProps> = ({
    limit = 6,
    title = "Popular services",
    caption = "What We Do",
    subtitle = "Choose a service and tell us what needs attention."
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
                        return (
                            <Link key={service.slug} to={`/consultation?service=${encodeURIComponent(service.slug)}#consultation-form`} className="v2-service-card">
                                <div className="v2-service-card-body">
                                    <div className="v2-service-card-chip"><ServiceLineIcon slug={service.slug} /></div>
                                    <h3 className="v2-service-card-title">{service.title}</h3>
                                    <p className="v2-service-card-desc">{service.desc}</p>
                                    <span className="v2-service-card-request">Request</span>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                <div className="v2-view-all-wrap justify-content-center">
                    <Link to="/services" className="v2-view-all-link">
                        View all services &rarr;
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default V2ServiceCards;
