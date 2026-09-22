import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import servicesData from '../data/servicesData.json';
import { serviceImageMap, ServiceItem } from '../component/ServicesFeatured.tsx';
import CrossArrow from '../assets/images/svg/cross-arrow.svg';
import WhatsappSvg from '../assets/images/svg/whatsapp.svg';
import PageSEO from '../component/PageSEO.tsx';
import { serviceImages, serviceAlt } from '../data/siteImages.ts';
import ServiceLineIcon from '../component/ServiceLineIcon.tsx';

const ServiceDetail: React.FC = () => {

    const { slug } = useParams<{ slug: string }>();

    const service = (servicesData as ServiceItem[]).find((s) => s.slug === slug);

    if (!service) {
        return <Navigate to="/services" replace />;
    }

    const otherServices = (servicesData as ServiceItem[])
        .filter((s) => s.slug !== service.slug)
        .slice(0, 3);

    return (

        <>

            <PageSEO
                title={`${service.title} Uganda`}
                description={`${service.desc} Serving Kampala and surrounding areas \u2014 request a free quote from Nyumba Dynamics today.`}
            />

            {/* Hero */}
            <section
                className="heroSection"
                style={{ backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.88) 22%, rgba(0,0,0,0.20) 100%), url(${serviceImages[service.slug] || serviceImageMap[service.img]})` }}
            >
                <div className="container">
                    <h1 className="img-header-text fade_down">{service.title}</h1>
                    <div className="breadcrumb-group fade_up">
                        <Link to="/">HOME / </Link>
                        <Link to="/services">SERVICES / </Link>
                        <Link to={`/services/${service.slug}`}> {service.title.toUpperCase()}</Link>
                    </div>
                </div>
            </section>

            {/* Description */}
            <section className="section-two">
                <div className="container">
                    <div className="row all-services-row">
                        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">

                            <img className="service-detail-feature" src={serviceImages[service.slug] || serviceImageMap[service.img]} alt={serviceAlt[service.slug] || service.title} width="1280" height="853" />

                            <div className="service-detail-icon">
                                <ServiceLineIcon slug={service.slug} />
                            </div>

                            <p className="cap-text fade_up">what's included</p>
                            <p className="sec-sub-text fade_up" style={{ marginBottom: 30 }}>{service.description}</p>

                            <h2 className="service-detail-heading">Why choose Nyumba Dynamics</h2>
                            <div className="service-benefit-grid">
                                {service.benefits.map((benefit) => (
                                    <div className="service-benefit-item" key={benefit}>
                                        <span className="service-benefit-check" aria-hidden="true">✓</span>
                                        <p>{benefit}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="service-process-heading">
                                <p className="cap-text">How the service works</p>
                                <h2 className="service-detail-heading">A clear path from assessment to handover.</h2>
                            </div>
                            <ol className="service-process-grid">
                                {service.process.map((step, index) => (
                                    <li key={step}>
                                        <span>{String(index + 1).padStart(2, '0')}</span>
                                        <p>{step}</p>
                                    </li>
                                ))}
                            </ol>

                            <div className="d-flex flex-wrap" style={{ gap: 16, marginTop: 40 }}>
                                <Link to="/consultation" className="btn-quote">
                                    Request This Service
                                    <img src={CrossArrow} alt="cross-arrow" />
                                </Link>
                                <a
                                    href={`https://wa.me/256761648679?text=${encodeURIComponent(`Hi Nyumba Dynamics, I'd like a quote for ${service.title}.`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-quote btn-whatsapp"
                                >
                                    Chat On WhatsApp
                                    <img src={WhatsappSvg} alt="whatsapp" style={{ width: 20 }} />
                                </a>
                            </div>

                        </div>

                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12">
                            <div className="roofing-services-list-main">
                                <h3 className="rich" style={{ marginBottom: 20 }}>Other Services</h3>
                                {otherServices.map((s) => (
                                    <Link to={`/services/${s.slug}`} key={s.slug} className="service-list-arow-main">
                                        <p>{s.title}</p>
                                        <img src={CrossArrow} alt="cross-arrow" />
                                    </Link>
                                ))}
                                <Link to="/services" className="service-list-arow-main active">
                                    <p>View All Services</p>
                                    <img src={CrossArrow} alt="cross-arrow" />
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>

    );

};

export default ServiceDetail;
