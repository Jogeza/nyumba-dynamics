import React from 'react';
import { Link } from 'react-router-dom';
import CrossArrow from '../assets/images/svg/cross-arrow.svg';
import { siteImages } from '../data/siteImages.ts';

const PremiumHero: React.FC = () => (
  <section className="nyumba-hero">
    <img className="nyumba-hero-image" src={siteImages.hero} alt="Nyumba Dynamics technician installing an exterior light" width="1280" height="853" fetchPriority="high" />
    <div className="nyumba-hero-overlay" />
    <div className="container nyumba-hero-content">
      <p className="needs-text">Hire The Right Professionals</p>
      <h1 className="lets-us-do">Professional Care For Every Part Of Your Property.</h1>
      <p className="residents">Construction, repairs, maintenance and connected-home solutions delivered by a dependable Kampala team.</p>
      <div className="hero-cta-group">
        <Link to="/consultation" className="btn-quote our-services-btn">Request A Service <img src={CrossArrow} alt="" /></Link>
        <Link to="/contact" className="btn-quote-outline">Get A Free Quote</Link>
      </div>
    </div>
  </section>
);

export default PremiumHero;
