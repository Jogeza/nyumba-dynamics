import React from 'react';
import { Link } from 'react-router-dom';
import PageSEO from '../component/PageSEO.tsx';

const PrivacyPolicy: React.FC = () => (
  <>
    <PageSEO title="Privacy Policy" description="How Nyumba Dynamics collects, uses, protects and retains information submitted through our website." />
    <section className="heroSection legal-hero">
      <div className="container"><h1 className="img-header-text">Privacy Policy</h1><div className="breadcrumb-group"><Link to="/">HOME / </Link><span>PRIVACY POLICY</span></div></div>
    </section>
    <main className="legal-page"><div className="container legal-page-inner">
      <p className="legal-updated">Effective 22 September 2026</p>
      <p>Nyumba Dynamics respects your privacy. This policy explains how we handle information when you visit our website, request a service, contact us, or enquire about working with us.</p>
      <h2>Information we collect</h2>
      <p>We may collect your name, email address, telephone number, location, requested service, message, and any information you choose to provide. Our hosting provider may also process basic technical data such as IP address, browser type, device information, and request logs for security and reliability.</p>
      <h2>How we use information</h2>
      <p>We use submitted information to respond to enquiries, assess requested work, prepare quotations, arrange services, maintain business records, prevent abuse, and improve our website and customer experience.</p>
      <h2>Sharing and service providers</h2>
      <p>We do not sell personal information. We may share information with staff, contractors, and service providers only when needed to respond to your request, deliver a service, operate the website, or comply with law. Website enquiries are processed through our hosting and email-delivery providers.</p>
      <h2>Retention and security</h2>
      <p>We retain information only for as long as reasonably needed for enquiries, service delivery, legal obligations, and business records. We use reasonable administrative and technical safeguards, but no internet transmission or storage system is completely secure.</p>
      <h2>Your choices and rights</h2>
      <p>You may ask us to access, correct, or delete personal information we hold about you, subject to applicable legal requirements. You may also choose to contact us by telephone or WhatsApp instead of submitting the website form.</p>
      <h2>Contact</h2>
      <p>For privacy questions or requests, email <a href="mailto:info@nyumbadynamics.com">info@nyumbadynamics.com</a>, call <a href="tel:+256761648679">+256 761 648 679</a>, or write to Nyumba Dynamics, opposite St. Francis Primary School, Ntinda, Kampala, Uganda.</p>
      <h2>Changes to this policy</h2>
      <p>We may update this policy when our services or legal obligations change. The effective date above identifies the current version.</p>
    </div></main>
  </>
);

export default PrivacyPolicy;
