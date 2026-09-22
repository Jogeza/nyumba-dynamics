import React from 'react';
import { Link } from 'react-router-dom';
import PageSEO from '../component/PageSEO.tsx';
import Testimonials from '../component/Testimonials.tsx';
import fieldHero from '../assets/images/to use/IMG_20260920_083927_709.jpg.jpeg';
import plumbingWork from '../assets/images/to use/IMG_20260920_083945_256.jpg.jpeg';
import toolsWork from '../assets/images/to use/IMG_20260920_084009_121.jpg.jpeg';
import landscapingWork from '../assets/images/to use/IMG_20260920_083934_899.jpg.jpeg';

const values = [
    { number: '01', title: 'Professional conduct', text: 'We arrive prepared, communicate clearly and treat every property with care.' },
    { number: '02', title: 'Honest scope and pricing', text: 'You know what the work covers and what it costs before the job begins.' },
    { number: '03', title: 'Work built to last', text: 'We use the right skills, tools and materials for a dependable finish.' },
    { number: '04', title: 'Accountability', text: 'We coordinate the work, check the result and remain available after handover.' },
];

const capabilities = ['Construction & repair', 'Property maintenance', 'Smart-home systems', 'Outdoor & lifestyle care'];

const About: React.FC = () => (
    <main className="about-modern">
        <PageSEO title="About Nyumba Dynamics | Property Services Uganda" description="Meet Nyumba Dynamics, Kampala's coordinated property-services company for construction, repairs, maintenance and smart-home solutions." />

        <section className="about-modern-hero">
            <img src={fieldHero} alt="Nyumba Dynamics technician working at a Kampala property" />
            <div className="about-modern-hero-shade" />
            <div className="container about-modern-hero-content">
                <p className="about-kicker">About Nyumba Dynamics</p>
                <h1>One dependable partner for your property.</h1>
                <p>We coordinate skilled people, clear scopes and practical solutions for homes and businesses across Kampala.</p>
                <div className="about-hero-actions">
                    <Link className="about-btn about-btn-primary" to="/consultation">Request a service <span aria-hidden="true">↗</span></Link>
                    <Link className="about-btn about-btn-secondary" to="/services">Explore our services</Link>
                </div>
            </div>
        </section>

        <section className="about-intro-section">
            <div className="container about-intro-grid">
                <div className="about-intro-copy" data-reveal>
                    <p className="about-kicker">Who we are</p>
                    <h2>Property work, properly managed.</h2>
                    <p className="about-lead">HEMS Nyumba Dynamics Company Limited is a Kampala-based property services company. We bring construction, maintenance and connected-home work under one accountable point of contact.</p>
                    <p>From a leaking tap to a renovation or smart-security installation, we assess what is needed, match the right professional and keep the work moving through final checks.</p>
                    <div className="about-capability-list">{capabilities.map((item) => <span key={item}>{item}</span>)}</div>
                </div>
                <div className="about-photo-stack" data-reveal>
                    <img className="about-photo-main" src={plumbingWork} alt="Nyumba Dynamics plumber checking a bathroom fitting" />
                    <img className="about-photo-small" src={toolsWork} alt="Nyumba Dynamics professional preparing tools for a job" />
                    <div className="about-photo-note"><strong>Kampala based</strong><span>Serving homes and businesses</span></div>
                </div>
            </div>
        </section>

        <section className="about-purpose-section">
            <div className="container">
                <div className="about-purpose-heading"><p className="about-kicker">What guides us</p><h2>Useful work. Clear communication. Lasting trust.</h2></div>
                <div className="about-purpose-grid">
                    <article><span>Our mission</span><h3>Make property care easier.</h3><p>Deliver professional, trustworthy services that keep homes and businesses safe, functional and efficient.</p></article>
                    <article><span>Our vision</span><h3>Set a better service standard.</h3><p>Become Uganda's most trusted property-services partner through reliable work and accountable follow-through.</p></article>
                </div>
            </div>
        </section>

        <section className="about-values-section">
            <div className="container">
                <div className="about-values-head"><div><p className="about-kicker">How we work</p><h2>Standards you can feel on every job.</h2></div><p>Good service is more than technical skill. It is how we prepare, communicate and leave your property when the work is complete.</p></div>
                <div className="about-values-grid">{values.map((value) => <article key={value.number} data-reveal><span>{value.number}</span><h3>{value.title}</h3><p>{value.text}</p></article>)}</div>
            </div>
        </section>

        <section className="about-proof-section">
            <div className="container about-proof-grid">
                <img src={landscapingWork} alt="Nyumba Dynamics professional maintaining a landscaped property" />
                <div>
                    <p className="about-kicker">Why Nyumba Dynamics</p>
                    <h2>One team coordinating the whole job.</h2>
                    <ul>
                        <li><strong>Clear from the start</strong><span>A written scope, practical recommendations and agreed pricing.</span></li>
                        <li><strong>Matched to the work</strong><span>The right professional and tools for the service requested.</span></li>
                        <li><strong>Checked before handover</strong><span>We review the completed work and follow up where needed.</span></li>
                    </ul>
                    <a className="about-text-link" href="https://wa.me/256761648679" target="_blank" rel="noreferrer">Talk to us on WhatsApp <span aria-hidden="true">↗</span></a>
                </div>
            </div>
        </section>

        <section className="about-process-section"><Testimonials /></section>

        <section className="about-cta-section"><div className="container about-cta-inner"><div><p className="about-kicker">Ready when you are</p><h2>Tell us what your property needs.</h2></div><Link className="about-btn about-btn-primary" to="/consultation">Request a free quote <span aria-hidden="true">↗</span></Link></div></section>
    </main>
);

export default About;
