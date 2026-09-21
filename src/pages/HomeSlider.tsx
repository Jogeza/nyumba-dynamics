import React from 'react'
import { Link } from 'react-router-dom';
import CrossArrow from '../assets/images/svg/cross-arrow.svg';
import headphoneIcon from '../assets/images/svg/headphone-icon.svg'
import ServiceCategories from '../component/ServiceCategories.tsx';
import SearchHero from '../component/SearchHero.tsx';
import V2ServiceCards from '../component/V2ServiceCards.tsx';
import PageSEO from '../component/PageSEO.tsx';
import { siteImages } from '../data/siteImages.ts';
import servicesData from '../data/servicesData.json';

const trustStats = [
    { stat: String(servicesData.length), label: 'Services, One Team' },
    { stat: 'Matched', label: 'Teams Selected For Each Job' },
    { stat: 'Kampala', label: 'Wide Coverage' },
    { stat: 'Free', label: 'No-Obligation Quotes' },
];

const HomeSlider: React.FC = () => {
    return (
        <main className="v2-home">
            <PageSEO
                title="Handyman & Smart Home Services Uganda"
                description="Home Maintenance Services (HEMS) in Kampala, Uganda — electrical, plumbing, CCTV installation, smart home automation, cleaning and more. Hire the right professionals."
            />

            {/* 1. Hero */}
            <SearchHero />

            {/* 2. Service Categories */}
            <section className="section-two">
                <div className="container">
                    <p className="cap-text fade_up">what we do</p>
                    <div className="section-main-text-flex">
                        <h2 className="sec-text pb-0 fade_up">Four Ways We Take Care Of Your Property</h2>
                        <p className="sec-sub-text ornare fade_up">Request the one you need, or let us assess the
                            full picture.</p>
                    </div>
                    <ServiceCategories />
                </div>
            </section>

            <V2ServiceCards />

            {/* 3. Why Choose Nyumba Dynamics — short, number-led, no icon grid */}
            <section className="section-four why-choose-stats">
                <div className="container">
                    <p className="cap-text fade_up">why choose us</p>
                    <h2 className="sec-text pb-0 fade_up">One Team You Can Actually Rely On</h2>
                    <div className="trust-stats-row">
                        {trustStats.map((item) => (
                            <div className="trust-stat-item fade_up" key={item.label}>
                                <span className="trust-stat-number">{item.stat}</span>
                                <span className="trust-stat-label">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Smart Home Solutions teaser */}
            <section className="section-two smart-home-teaser">
                <div className="container">
                    <div className="row" style={{ alignItems: 'center' }}>
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <img className="editorial-feature-image" src={siteImages.electrical} alt="Nyumba Dynamics technician installing connected exterior lighting" width="1280" height="853" loading="lazy" />
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <p className="cap-text fade_up">smart living, uganda</p>
                            <h2 className="sec-text fade_up">Your Home, Connected And Under Control</h2>
                            <p className="sec-sub-text fade_up">Smart locks, CCTV, lighting, and remote monitoring —
                                installed, connected, and configured with straightforward controls.</p>
                            <Link to="/smart-home" className="btn-quote">
                                Explore Smart Home Solutions
                                <img src={CrossArrow} alt="cross-arrow" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. About Nyumba Dynamics — brief */}
            <section className="section-two">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <p className="cap-text fade_in">about nyumba dynamics</p>
                            <h2 className="sec-text fade_up">Home and Enterprise Maintenance Services, Under One Roof</h2>
                            <p className="sec-sub-text fade_up">HEMS Nyumba Dynamics Company Limited delivers professional
                                handyman, construction and maintenance services across Kampala. We bridge the gap between
                                unreliable informal technicians and expensive specialized contractors.</p>
                            <div className="about-sec-main">
                                <Link to="/about" className="btn-quote our-services-btn">About Us
                                    <img src={CrossArrow} alt="cross-arrow" />
                                </Link>
                                <div className="call">
                                    <div className="headphone-main">
                                        <img src={headphoneIcon} alt="headphone-icon" />
                                    </div>
                                    <div className="need-help-main">
                                        <p>Need Help Now?</p>
                                        <a href="tel:+256761648679">+256 7616 48679</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 position-relative">
                            <div className="about-editorial-grid">
                                <img className="about-editorial-main" src={siteImages.landscaping} alt="Nyumba Dynamics landscaper maintaining a garden" loading="lazy" />
                                <img src={siteImages.cleaning2} alt="Nyumba Dynamics cleaner caring for an exterior surface" loading="lazy" />
                                <img src={siteImages.safety1} alt="Nyumba Dynamics technician checking a property fitting" loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-nine pt-0 trust-process-section">
                <div className="container">
                    <p className="cap-text fade_up">what you can expect</p>
                    <h2 className="sec-text pb-0 fade_up">Clear From First Call To Final Check</h2>
                    <div className="trust-process-grid">
                        <div><span>01</span><h3>Tell Us What You Need</h3><p>Share the job by phone, WhatsApp or the request form.</p></div>
                        <div><span>02</span><h3>Review The Scope</h3><p>We assess the work and explain the practical next step.</p></div>
                        <div><span>03</span><h3>Get A Clear Quote</h3><p>Agree the work and cost before the team gets started.</p></div>
                        <div><span>04</span><h3>Final Quality Check</h3><p>We review the completed work with you before handover.</p></div>
                    </div>
                </div>
            </section>

            {/* 8. Contact CTA */}
            <section className="section-five">
                <div className="container" style={{ textAlign: 'center' }}>
                    <p className="cap-text cost-cal fade_up">get started</p>
                    <h2 className="sec-text fami-cal pb-0 fade_up">Ready To Get Started?</h2>
                    <p className="fami-cal" style={{ color: '#FFF', opacity: 0.85, marginTop: 10 }}>
                        Tell us what you need and we'll come back with a clear, no-surprises quote.
                    </p>
                    <div className="hero-cta-group" style={{ justifyContent: 'center', marginTop: 30 }}>
                        <Link to="/consultation" className="btn-quote">
                            Request a Free Quote
                            <img src={CrossArrow} alt="cross-arrow" />
                        </Link>
                        <a
                            href="https://wa.me/256761648679"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-quote-outline"
                        >
                            Chat On WhatsApp
                        </a>
                    </div>
                </div>
            </section>
            {/* 9. Footer renders globally via App.jsx */}
        </main>
    )
}

export default HomeSlider
