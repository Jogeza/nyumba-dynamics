import React from 'react'

const Testimonials: React.FC = () => {
    return (
        <div className="container trust-process-section">
            <p className="cap-text fade_up">our working process</p>
            <h2 className="sec-text pb-0 fade_up">Straightforward Service, From Request To Handover</h2>
            <div className="trust-process-grid">
                <div><span>01</span><h3>Request</h3><p>Tell us what needs attention, how best to reach you, and we'll connect you with the right professional within 24 hours.</p></div>
                <div><span>02</span><h3>Assess</h3><p>We clarify the scope and the right professional for the job.</p></div>
                <div><span>03</span><h3>Quote</h3><p>You receive a clear proposal before work begins.</p></div>
                <div><span>04</span><h3>Deliver</h3><p>We carry out the work and complete a final quality check.</p></div>
            </div>
        </div>
    )
}

export default Testimonials
