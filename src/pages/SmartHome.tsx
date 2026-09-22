import React from 'react';
import { Link } from 'react-router-dom';
import CrossArrow from '../assets/images/svg/cross-arrow.svg';
import { siteImages } from '../data/siteImages.ts';
import PageSEO from '../component/PageSEO.tsx';
import ServiceLineIcon from '../component/ServiceLineIcon.tsx';

const img1 = siteImages.smartHomeCctv;
const img3 = siteImages.smartLockInstallation;

const smartHomeFeatures = [
    { title: 'Smart Locks', desc: 'Keyless entry and remote access controls.', slug: 'locksmith' },
    { title: 'CCTV Cameras', desc: 'Camera coverage you can review remotely.', slug: 'cctv-installation' },
    { title: 'Motion Sensors', desc: 'Alerts when movement is detected.', slug: 'security-systems' },
    { title: 'Smart Lighting', desc: 'Schedule and control connected lighting.', slug: 'electrical-services' },
    { title: 'Video Doorbells', desc: 'See and speak to visitors before opening.', slug: 'cctv-installation' },
    { title: 'Remote Monitoring', desc: 'Check your property while away.', slug: 'smart-homes' },
];

const SmartHome: React.FC = () => {
    return (
        <>
            <PageSEO
                title="Smart Home Solutions Uganda | Smart Living Uganda"
                description="Smart locks, CCTV, lighting, home automation and remote monitoring installed and connected by Nyumba Dynamics \u2014 smart living for Kampala homes and businesses."
            />
            <section
                className="heroSection"
                style={{ backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.88) 27.86%, rgba(0,0,0,0.00) 100%), url(${img1})` }}
            >
                <div className="container">
                    <h1 className="img-header-text fade_down">Smart Home Solutions</h1>
                    <div className="breadcrumb-group fade_up">
                        <Link to="/">HOME / </Link>
                        <Link to="/smart-home">SMART HOME</Link>
                    </div>
                </div>
            </section>

            <section className="section-two smart-home-intro">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <p className="cap-text fade_up">smart living in Kampala</p>
                            <h2 className="sec-text fade_up">Connected controls for your property</h2>
                            <p className="sec-sub-text fade_up">
                                We plan, install and connect smart locks, cameras, lighting and monitoring around the way you use your property.
                            </p>
                            <div className="hero-cta-group" style={{ marginTop: 30 }}>
                                <Link to="/consultation" className="btn-quote">
                                    Get A Smart Home Quote
                                    <img src={CrossArrow} alt="cross-arrow" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <img className="smart-home-intro-image" src={img3} alt="Technician installing and testing a smart door lock at a Kampala home" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-three">
                <div className="container">
                    <p className="cap-text fade_up">the technology</p>
                    <div className="section-main-text-flex">
                        <h2 className="sec-text pb-0 fade_up">Smart-home features</h2>
                        <p className="sec-sub-text ornare fade_up">Choose the controls that fit your property.</p>
                    </div>
                    <div className="smart-capability-grid">
                        {smartHomeFeatures.map((feature) => (
                            <article className="smart-capability-card" key={feature.title}>
                                <div className="smart-capability-icon"><ServiceLineIcon slug={feature.slug} /></div>
                                <div><h3>{feature.title}</h3><p>{feature.desc}</p></div>
                                <Link to={`/consultation?service=${feature.slug}`} aria-label={`Request ${feature.title}`}>Request <span aria-hidden="true">→</span></Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="smart-home-cta" id="smart-home-consultation">
                <img className="smart-home-cta-image" src={img1} alt="" />
                <div className="smart-home-cta-shade" />
                <div className="container smart-home-cta-content">
                    <p className="cap-text fade_up">Get started</p>
                    <h2 className="sec-text fade_up">Plan a system that fits your property</h2>
                    <p className="fade_up">Tell us what you want to automate, monitor or secure. We will recommend a practical setup and explain how it works before installation.</p>
                    <div className="hero-cta-group" style={{ marginTop: 30 }}>
                        <Link to="/consultation" className="btn-quote">
                            Request a Consultation
                            <img src={CrossArrow} alt="cross-arrow" />
                        </Link>
                        <a
                            href="https://wa.me/256761648679?text=Hi%20Nyumba%20Dynamics%2C%20I%27d%20like%20to%20ask%20about%20smart%20home%20solutions."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-quote btn-whatsapp"
                        >
                            Chat On WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SmartHome;
