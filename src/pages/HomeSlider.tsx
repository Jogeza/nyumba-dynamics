import React from 'react'
import { Link } from 'react-router-dom';
import CrossArrow from '../assets/images/svg/cross-arrow.svg';
import headphoneIcon from '../assets/images/svg/headphone-icon.svg'
import ServiceCategories from '../component/ServiceCategories.tsx';
import SearchHero from '../component/SearchHero.tsx';
import V2ServiceCards from '../component/V2ServiceCards.tsx';
import PageSEO from '../component/PageSEO.tsx';
import { siteImages } from '../data/siteImages.ts';
import ServiceLineIcon from '../component/ServiceLineIcon.tsx';

const HomeSlider: React.FC = () => {
    return (
        <main className="v2-home">
            <PageSEO
                title="Handyman & Smart Home Services Uganda"
                description="Home maintenance services in Kampala, Uganda — electrical, plumbing, CCTV installation, smart home automation, cleaning and more. Hire the right pros."
            />

            {/* 1. Hero */}
            <SearchHero />

            {/* 2. Service Categories */}
            <section className="section-two">
                <div className="container">
                    <p className="cap-text fade_up">what we do</p>
                    <div className="section-main-text-flex">
                        <h2 className="sec-text pb-0 fade_up">What we do</h2>
                        <p className="sec-sub-text ornare fade_up">Choose the kind of property work you need.</p>
                    </div>
                    <ServiceCategories />
                </div>
            </section>

            <V2ServiceCards />

            {/* 5. Smart Home Solutions teaser */}
            <section className="section-two smart-home-teaser">
                <div className="container">
                    <div className="smart-home-split">
                        <div className="smart-home-media">
                            <img src={siteImages.cctv1} alt="Nyumba Dynamics technician installing a security system" width="1280" height="853" loading="lazy" />
                        </div>
                        <div className="smart-home-copy">
                            <p className="cap-text fade_up">smart home</p>
                            <h2 className="sec-text fade_up">Control your home from one place</h2>
                            <p className="sec-sub-text fade_up">We install connected security, lighting and access controls.</p>
                            <div className="smart-feature-grid">
                                {[['locksmith','Smart locks'],['cctv-installation','CCTV'],['electrical-services','Lighting'],['smart-homes','Remote monitoring']].map(([slug,label]) => (
                                    <div className="smart-feature" key={slug}><ServiceLineIcon slug={slug} /><span>{label}</span></div>
                                ))}
                            </div>
                            <div className="smart-home-actions">
                                <Link to="/smart-home" className="btn-quote">View smart-home services</Link>
                                <a href="https://wa.me/256761648679" className="btn-quote-outline" target="_blank" rel="noopener noreferrer">WhatsApp us</a>
                            </div>
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
                            <h2 className="sec-text fade_up">Property services for homes and businesses</h2>
                            <p className="sec-sub-text fade_up">Nyumba Dynamics provides construction, repairs and maintenance across Kampala.</p>
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

            <section className="section-nine pt-0 trust-process-section" id="how-it-works">
                <div className="container">
                    <p className="cap-text fade_up">what you can expect</p>
                    <h2 className="sec-text pb-0 fade_up">How it works</h2>
                    <div className="trust-process-grid">
                        <div><span>01</span><h3>Tell us what you need</h3><p>Send the service, location and a short description. Photos help us understand the job faster.</p></div>
                        <div><span>02</span><h3>We confirm the scope</h3><p>We review the request, ask any needed questions and arrange a site visit when pricing requires one.</p></div>
                        <div><span>03</span><h3>Approve the quote</h3><p>You receive the work scope, price and timing before the job is scheduled.</p></div>
                        <div><span>04</span><h3>Work and handover</h3><p>The assigned professional completes the job, checks the result with you and leaves the work area tidy.</p></div>
                    </div>
                </div>
            </section>

            {/* 8. Contact CTA */}
            <section className="section-five">
                <div className="container" style={{ textAlign: 'center' }}>
                    <p className="cap-text cost-cal fade_up">get started</p>
                    <h2 className="sec-text fami-cal pb-0 fade_up">Need a job done?</h2>
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
