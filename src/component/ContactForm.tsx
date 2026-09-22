import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CrossArrow from "../assets/images/svg/cross-arrow.svg";
import servicesData from "../data/servicesData.json";

interface ServiceOption {
    title: string;
    slug: string;
}

const REQUEST_TYPES = ["Service request", "Partner", "Vendor"];
const SERVICE_OPTIONS: string[] = (servicesData as ServiceOption[]).map((service) => service.title);

const resolveService = (value?: string) => {
    if (!value) return SERVICE_OPTIONS[0];
    const match = (servicesData as ServiceOption[]).find(
        (service) => service.slug === value || service.title.toLowerCase() === value.toLowerCase()
    );
    return match?.title || value;
};

interface ContactFormProps {
    initialService?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ initialService }) => {
    const location = useLocation();

    const serviceOptions = SERVICE_OPTIONS;

    const requestedType = new URLSearchParams(location.search).get('type');
    const [requestType, setRequestType] = useState<string>(requestedType === 'partner' ? 'Partner' : REQUEST_TYPES[0]);
    const [serviceNeeded, setServiceNeeded] = useState<string>(() => resolveService(initialService));

    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        phone: "",
        location: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [deliveryMode, setDeliveryMode] = useState<'api' | 'email'>('api');
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
    const [website, setWebsite] = useState("");

    useEffect(() => {
        setServiceNeeded(resolveService(initialService));
    }, [initialService]);

    useEffect(() => {
        if (new URLSearchParams(location.search).get('type') === 'partner') setRequestType('Partner');
    }, [location.search]);

    const handleChange = (field: keyof typeof formValues) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormValues((prev) => ({ ...prev, [field]: e.target.value }));
        setFieldErrors((prev) => ({ ...prev, [field]: '' }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        const nextErrors: Record<string, string> = {};
        if (!formValues.name.trim()) nextErrors.name = 'Enter your name.';
        if (!formValues.phone.trim()) nextErrors.phone = 'Enter your phone number.';
        if (!/^\S+@\S+\.\S+$/.test(formValues.email)) nextErrors.email = 'Enter a valid email address.';
        if (!formValues.message.trim()) nextErrors.message = 'Tell us briefly about the job.';
        setFieldErrors(nextErrors);
        if (Object.keys(nextErrors).length) {
            setError("Please check the highlighted fields.");
            return;
        }
        setSubmitting(true);

        const openEmailFallback = () => {
            const subject = encodeURIComponent(`${requestType}: ${serviceNeeded}`);
            const body = encodeURIComponent(
                `Name: ${formValues.name}\nEmail: ${formValues.email}\nPhone: ${formValues.phone}\n` +
                `Location: ${formValues.location}\nRequest type: ${requestType}\nService needed: ${serviceNeeded}\n\n` +
                `Message:\n${formValues.message}`
            );
            setDeliveryMode('email');
            setSubmitted(true);
            window.location.href = `mailto:info@nyumbadynamics.com?subject=${subject}&body=${body}`;
        };

        try {
            const response = await fetch('/api/enquiry', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formValues, requestType, serviceNeeded, website }),
            });
            const result = await response.json().catch(() => ({}));
            if (response.status === 503) {
                openEmailFallback();
                return;
            }
            if (!response.ok) throw new Error(result.error || 'Your request could not be sent.');
            setDeliveryMode('api');
            setSubmitted(true);
        } catch (submissionError) {
            setError(submissionError instanceof Error ? submissionError.message : 'Your request could not be sent.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            {(
                <section className="contact-form-section" id="consultation-form">
                    <div className="container">
                        <div className="row form-sec-row">

                            <div className="col-xxl-6 col-xl-6 col-lg-5">
                                <p className="cap-text fade_up">contact nyumba dynamics</p>
                                <h2 className="sec-text get-toch fade_up">Contact us</h2>
                                <p className="sec-sub-text fade_up">
                                    Request a service or ask about working with us. We reply during office hours.
                                </p>
                                <div className="contact-card-grid fade_up">
                                    <a className="contact-compact-card" href="tel:+256761648679"><span className="contact-icon-chip">☎</span><span><strong>Call</strong><b>+256 7616 48679</b></span></a>
                                    <a className="contact-compact-card" href="https://wa.me/256761648679"><span className="contact-icon-chip">◉</span><span><strong>WhatsApp</strong><small>Start a conversation</small></span></a>
                                    <a className="contact-compact-card" href="mailto:info@nyumbadynamics.com"><span className="contact-icon-chip">✉</span><span><strong>Email</strong><small>info@nyumbadynamics.com</small></span></a>
                                    <div className="contact-compact-card"><span className="contact-icon-chip">⌖</span><span><strong>Visit</strong><small>Opposite St. Francis Primary School, Ntinda, Kampala</small></span></div>
                                </div>
                                <div className="office-hours"><strong>Office hours</strong><p>Mon to Fri: 8:00 to 5:00</p><p>Sat: 9:00 to 2:00</p><p>Sunday: Closed</p></div>
                            </div>

                            <div className="col-xxl-6 col-xl-6 col-lg-7">
                                {submitted ? (
                                    <div className="contac-form-main zoom_in" style={{ textAlign: 'center' }}>
                                        <h3 className="rich">{deliveryMode === 'api' ? "Thanks — we've got your request." : 'Your request is ready to email.'}</h3>
                                        <p className="clane" style={{ marginTop: 10 }}>
                                            {deliveryMode === 'api'
                                                ? 'Your request has been delivered to our team. We will follow up during office hours.'
                                                : 'Your email app should have opened with the request filled in. Please send that email to complete your request.'}
                                            {' '}You can also reach us directly on WhatsApp for a faster response.
                                        </p>
                                        <a
                                            href="https://wa.me/256761648679"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-quote btn-whatsapp"
                                            style={{ marginTop: 20, display: 'inline-flex', alignItems: 'center', gap: 8 }}
                                        >
                                            Chat On WhatsApp
                                        </a>
                                    </div>
                                ) : (
                                    <form className="contac-form-main zoom_in" onSubmit={handleSubmit}>

                                        <div className="calcult-from-grid contac-form">

                                            <div>
                                                <label className="input-label-text" htmlFor="request-type">I am a...*</label>
                                                <select id="request-type" name="requestType" className="input-main" value={requestType} onChange={(e) => setRequestType(e.target.value)} required>{REQUEST_TYPES.map((item) => <option key={item}>{item}</option>)}</select>
                                            </div>

                                            <div>
                                                <label className="input-label-text" htmlFor="service-needed">Service required*</label>
                                                <select id="service-needed" name="serviceNeeded" className="input-main" value={serviceNeeded} onChange={(e) => setServiceNeeded(e.target.value)} required>{serviceOptions.map((item) => <option key={item}>{item}</option>)}</select>
                                            </div>

                                            <div>
                                                <label className="input-label-text" htmlFor="enquiry-name">Full name*</label>
                                                <input
                                                    id="enquiry-name"
                                                    name="name"
                                                    type="text"
                                                    placeholder="Enter your full name"
                                                    autoComplete="name"
                                                    required
                                                    aria-invalid={Boolean(fieldErrors.name)}
                                                    aria-describedby={fieldErrors.name ? "enquiry-name-error" : undefined}
                                                    value={formValues.name}
                                                    onChange={handleChange("name")}
                                                />
                                                {fieldErrors.name && <small id="enquiry-name-error" className="field-error">{fieldErrors.name}</small>}
                                            </div>

                                            <div>
                                                <label className="input-label-text" htmlFor="enquiry-email">Email address*</label>
                                                <input
                                                    id="enquiry-email"
                                                    name="email"
                                                    type="email"
                                                    placeholder="Enter your email"
                                                    autoComplete="email"
                                                    required
                                                    aria-invalid={Boolean(fieldErrors.email)}
                                                    aria-describedby={fieldErrors.email ? "enquiry-email-error" : undefined}
                                                    value={formValues.email}
                                                    onChange={handleChange("email")}
                                                />
                                                {fieldErrors.email && <small id="enquiry-email-error" className="field-error">{fieldErrors.email}</small>}
                                            </div>

                                            <div>
                                                <label className="input-label-text" htmlFor="enquiry-phone">Phone number*</label>
                                                <input
                                                    id="enquiry-phone"
                                                    name="phone"
                                                    type="tel"
                                                    placeholder="Enter phone number"
                                                    autoComplete="tel"
                                                    required
                                                    aria-invalid={Boolean(fieldErrors.phone)}
                                                    aria-describedby={fieldErrors.phone ? "enquiry-phone-error" : undefined}
                                                    value={formValues.phone}
                                                    onChange={handleChange("phone")}
                                                />
                                                {fieldErrors.phone && <small id="enquiry-phone-error" className="field-error">{fieldErrors.phone}</small>}
                                            </div>

                                            <div>
                                                <label className="input-label-text" htmlFor="enquiry-location">Location</label>
                                                <input
                                                    id="enquiry-location"
                                                    name="location"
                                                    type="text"
                                                    placeholder="e.g. Ntinda, Kampala"
                                                    autoComplete="address-level2"
                                                    value={formValues.location}
                                                    onChange={handleChange("location")}
                                                />
                                            </div>
                                        </div>

                                        <div className="your-message-input">
                                            <label className="input-label-text" htmlFor="enquiry-message">Your message*</label>
                                            <textarea
                                                id="enquiry-message"
                                                name="message"
                                                rows={4}
                                                placeholder="Tell us a bit about the job"
                                                required
                                                aria-invalid={Boolean(fieldErrors.message)}
                                                aria-describedby={fieldErrors.message ? "enquiry-message-error" : undefined}
                                                value={formValues.message}
                                                onChange={handleChange("message")}
                                            />
                                            {fieldErrors.message && <small id="enquiry-message-error" className="field-error">{fieldErrors.message}</small>}
                                        </div>

                                        <div className="website-field" aria-hidden="true">
                                            <label htmlFor="website">Website</label>
                                            <input id="website" name="website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
                                        </div>

                                        {error && (
                                            <p className="fessional" role="alert" style={{ color: '#c0392b', marginTop: 12 }}>{error}</p>
                                        )}

                                        <div className="get-cost-estimate send-main-btn">
                                            <button className="btn-quote" type="submit" disabled={submitting}>
                                                {submitting ? 'Sending…' : 'Send request'}
                                                <img src={CrossArrow} alt="cross-arrow" />
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>

                        {location.pathname === "/contact" && (
                            <iframe
                                className="map-iframe"
                                src="https://www.google.com/maps?q=St.+Francis+Primary+School+Ntinda+Kampala+Uganda&output=embed"
                                allowFullScreen
                                loading="lazy"
                                title="Nyumba Dynamics location - Ntinda, Kampala, Uganda"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        )}
                    </div>
                </section>
            )}
        </>
    );
};

export default ContactForm;
