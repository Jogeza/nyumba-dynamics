import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import Img1 from '../assets/images/electrical/electrical-img1.jpg';
import Img2 from '../assets/images/electrical/electrical-img2.jpg';
import Img3 from '../assets/images/electrical/electrical-img3.jpg';
import Img4 from '../assets/images/electrical/electrical-img4.jpg';
import CrossArrow from '../assets/images/svg/cross-arrow.svg';
import AddImg from '../assets/images/shared/promo-img.jpg';
import DownloadImg from '../assets/images/shared/download-icon.png';
import Brochure from '../assets/images/svg/brochure.svg';
import Brochure2 from '../assets/images/svg/brochure2.svg';


const Electrical: React.FC = () => {
    return (
        <>
            {/* <!-- ====================================== About Hero Section ===================================== --> */}
            <section className="heroSection">
                <div className="container">
                    <h1 className="img-header-text fade_down">Electrical Services</h1>
                    <div className="breadcrumb-group fade_up">
                        <Link to="/">HOME / </Link>
                        <Link to="/services">Service / </Link>
                        <Link to="/services/electrical">Electrical Services</Link>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Nine ===================================== --> */}
            <section className="section-eight">
                <div className="container">
                    <div className="row all-services-row">
                        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
                            <h2 className="sec-text pb-0 fade_up">Safe, Reliable Electrical Installation & Repairs</h2>
                            <img className="layers-img1 zoom_in" src={Img1} alt="electrical-img1" />
                            <p className="fusce pb-2">From rewiring an ageing home to fitting out a new office, our licensed electricians handle wiring, lighting, distribution boards and fault-finding to full safety-code standard. Every job starts with a proper site assessment, so you get an accurate quote and no surprises once work begins.</p>
                            <p className="fusce mt-0 ">We work on both domestic and commercial properties, and every technician on our team is background-checked, insured, and trained on current electrical safety regulations. Whether it's a single socket repair or a full building rewire, we test everything before we leave and stand behind the work with our workmanship guarantee.</p>
                            <h3 className="ourServicesPrcoes mt-0">What's Included In Every Electrical Job</h3>
                            <p className="fusce pb-0">Every visit includes a safety inspection of the surrounding circuit, clear written pricing before we start, and a certificate of compliance for any new installation work. We carry standard parts on the van so most repairs are completed in a single visit.</p>
                            <div className="swiper singleServicesSlider">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <img src={Img2} alt="electrical-img2" />
                                    </div>
                                    <div className="swiper-slide">
                                        <img src={Img3} alt="electrical-img3" />
                                    </div>
                                    <div className="swiper-slide">
                                        <img src={Img4} alt="electrical-img4" />
                                    </div>
                                </div>
                            </div>
                            <h3 className="ourServicesPrcoes mt-0">Frequently Asked Questions</h3>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading1">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                            What electrical work needs a licensed electrician?
                                        </button>
                                    </h2>
                                    <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Anything involving new circuits, distribution boards, or permanent wiring must be done by a licensed electrician to meet safety code — this includes rewiring, new sockets or lighting circuits, and consumer unit upgrades. Simple bulb changes or plugging in appliances don't require a professional, but anything behind the wall does.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading2">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                            How quickly can you respond to an electrical emergency?
                                        </button>
                                    </h2>
                                    <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            For urgent issues like sparking outlets, power loss, or a tripped board that won't reset, we prioritise same-day callouts. Call our emergency line and we'll get a technician to you as fast as possible.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading3">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                            Do you provide a certificate after installation work?
                                        </button>
                                    </h2>
                                    <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Yes. Any new circuit, rewire, or consumer unit installation comes with a signed compliance certificate confirming the work meets current safety standards.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading4">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                            Can you upgrade an old fuse box to a modern consumer unit?
                                        </button>
                                    </h2>
                                    <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Absolutely — this is one of our most common jobs in older properties. We'll assess your existing setup, recommend the right unit for your load, and complete the swap with minimal downtime.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading5">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                            Do electricians handle outdoor and garden lighting?
                                        </button>
                                    </h2>
                                    <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Yes, we install outdoor lighting, garden power points, and weatherproof circuits, all wired to withstand the elements and meet outdoor safety requirements.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-8 all-service-col">
                            <div className="services-list-box zoom_in">
                                <h2 className="all-service-text">Our All Service</h2>
                                <div className="roofing-services-list-main">
                                    <NavLink to="/services/electrical"
                                        className={({ isActive }) =>
                                            `service-list-arow-main ${isActive ? "active" : ""}`
                                        }
                                    >
                                        <p>Electrical Services</p>
                                        <img src={CrossArrow} alt="right-arrow" />
                                    </NavLink>

                                    <NavLink to="/services/plumbing"
                                        className={({ isActive }) =>
                                            `service-list-arow-main ${isActive ? "active" : ""}`
                                        }
                                    >
                                        <p>Plumbing Services</p>
                                        <img src={CrossArrow} alt="right-arrow" />
                                    </NavLink>

                                    <NavLink to="/services/masonry"
                                        className={({ isActive }) =>
                                            `service-list-arow-main ${isActive ? "active" : ""}`
                                        }
                                    >
                                        <p>Masonry Works</p>
                                        <img src={CrossArrow} alt="right-arrow" />
                                    </NavLink>

                                    <NavLink to="/services/carpentry"
                                        className={({ isActive }) =>
                                            `service-list-arow-main ${isActive ? "active" : ""}`
                                        }
                                    >
                                        <p>Carpentry & Joinery</p>
                                        <img src={CrossArrow} alt="right-arrow" />
                                    </NavLink>

                                    <NavLink to="/services/welding"
                                        className={({ isActive }) =>
                                            `service-list-arow-main ${isActive ? "active" : ""}`
                                        }
                                    >
                                        <p>Welding & Fabrication</p>
                                        <img src={CrossArrow} alt="right-arrow" />
                                    </NavLink>

                                    <NavLink to="/services/painting"
                                        className={({ isActive }) =>
                                            `service-list-arow-main mb-0 ${isActive ? "active" : ""}`
                                        }
                                    >
                                        <p>Painting & Finishing</p>
                                        <img src={CrossArrow} alt="right-arrow" />
                                    </NavLink>
                                </div>
                            </div>
                            <div className="card-adds-main zoom_in">
                                <div className="adds-details-main">
                                    <img className="adds-img-home w-100" src={AddImg} alt="adds-img-home" />
                                    <img className="shape-img" src={DownloadImg} alt="download" />
                                    <h3>Get 10% Off on Your First Service</h3>
                                    <Link to="/contact" className="btn-quote">Contact Us
                                        <img src={CrossArrow} alt="right-arrow" />
                                    </Link>
                                </div>
                            </div>
                            <div className="documents-box zoom_in">
                                <button className="brochure-main">
                                    <div className="brochure">
                                        <img src={Brochure} alt="brochure" />
                                    </div>
                                    <h3>Service Price List.doc</h3>
                                </button>
                                <button className="brochure-main mb-0">
                                    <div className="brochure">
                                        <img src={Brochure2} alt="brochure2" />
                                    </div>
                                    <h3>Service Details.pdf</h3>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Electrical
