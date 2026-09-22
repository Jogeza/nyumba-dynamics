import React from 'react';
import { Link } from 'react-router-dom';
import PageSEO from '../component/PageSEO.tsx';

const Terms: React.FC = () => (
  <>
    <PageSEO title="Terms and Conditions" description="Terms governing use of the Nyumba Dynamics website and requests for property services." />
    <section className="heroSection legal-hero">
      <div className="container"><h1 className="img-header-text">Terms &amp; Conditions</h1><div className="breadcrumb-group"><Link to="/">HOME / </Link><span>TERMS &amp; CONDITIONS</span></div></div>
    </section>
    <main className="legal-page"><div className="container legal-page-inner">
      <p className="legal-updated">Effective 22 September 2026</p>
      <p>These terms govern your use of the Nyumba Dynamics website. A website enquiry is a request for contact and does not by itself create a service contract.</p>
      <h2>Quotes and service agreements</h2>
      <p>Scope, pricing, materials, timing, payment terms, warranties, and responsibilities will be confirmed separately before work begins. Estimates may change if site conditions or requested work differ from the information initially provided.</p>
      <h2>Your responsibilities</h2>
      <p>You agree to provide accurate information, disclose known site hazards or access restrictions, secure any permissions for the property, and provide reasonable access when work is scheduled.</p>
      <h2>Website information</h2>
      <p>We aim to keep website information accurate, but service descriptions, availability, images, and general guidance may change. Website content is informational and is not professional engineering, legal, or safety advice for a specific property.</p>
      <h2>Intellectual property</h2>
      <p>The Nyumba Dynamics name, branding, website design, copy, graphics, and original media may not be copied or used commercially without written permission, except where permitted by law.</p>
      <h2>Third-party services</h2>
      <p>The website may link to WhatsApp, social networks, maps, email delivery, and other third-party services. Their own terms and privacy practices apply when you use them.</p>
      <h2>Liability</h2>
      <p>To the extent permitted by Ugandan law, Nyumba Dynamics is not responsible for indirect loss arising solely from website use, temporary unavailability, or reliance on general website information. Nothing in these terms excludes liability that cannot legally be excluded.</p>
      <h2>Governing law and contact</h2>
      <p>These terms are governed by the laws of Uganda. Questions may be sent to <a href="mailto:info@nyumbadynamics.com">info@nyumbadynamics.com</a> or Nyumba Dynamics, opposite St. Francis Primary School, Ntinda, Kampala, Uganda.</p>
    </div></main>
  </>
);

export default Terms;
