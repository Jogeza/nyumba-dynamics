import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import PageSEO from '../component/PageSEO.tsx';

const GetQuote: React.FC = () => {
    const location = useLocation();
    const requestedService = new URLSearchParams(location.search).get('service');
    return (
        <>
            <PageSEO title="Request a Property Service Quote" description="Tell Nyumba Dynamics what your property needs in Kampala. We will confirm the scope, timing and price before work is scheduled." />
            {/* <!-- ====================================== Hero Section ===================================== --> */}
            <section className="heroSection">
                <div className="container">
                    <h1 className="img-header-text fade_down">Get Your Quote</h1>
                    <div className="breadcrumb-group fade_up">
                        <Link to="/">HOME / </Link>
                        <Link to="/consultation">Get Your Quote</Link>
                    </div>
                </div>
            </section>
            {/* The service request form itself renders globally via ContactForm.tsx
                on every page except this one is now included too (it no longer
                excludes /consultation) — see App.jsx / ContactForm.tsx. */}
            <section className="quote-process-section">
                <div className="container">
                    <div className="quote-process-head">
                        <div>
                            <p className="cap-text fade_up">What happens next</p>
                            <h2 className="sec-text fade_up">Request the work. We handle the next steps.</h2>
                        </div>
                        <p className="quote-process-intro fade_up">Share the service, property location and a short description of the work. We will review the details and contact you to confirm the scope, timing and price.</p>
                    </div>
                    {requestedService && (
                        <p className="quote-service-context">
                            Selected service: <strong>{requestedService.replace(/-/g, ' ')}</strong>
                        </p>
                    )}
                    <div className="quote-process-grid">
                        <article className="fade_up"><span>01</span><h3>Send the details</h3><p>Choose the service, add your location and describe what needs attention. Photos are helpful when available.</p></article>
                        <article className="fade_up"><span>02</span><h3>Confirm the scope</h3><p>We contact you to clarify the work and arrange a site assessment when the job cannot be priced remotely.</p></article>
                        <article className="fade_up"><span>03</span><h3>Approve and schedule</h3><p>Once you accept the scope and price, we agree on a suitable date and assign the professional for the job.</p></article>
                    </div>
                    <a href={`https://wa.me/256761648679?text=${encodeURIComponent(`Hello Nyumba Dynamics, I would like a quote${requestedService ? ` for ${requestedService.replace(/-/g, ' ')}` : ''}.`)}`} target="_blank" rel="noopener noreferrer" className="btn-quote btn-whatsapp quote-whatsapp-cta">Send details on WhatsApp</a>
                </div>
            </section>
        </>
    )
}

export default GetQuote
