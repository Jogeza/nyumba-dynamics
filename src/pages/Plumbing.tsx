import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import Img1 from '../assets/images/plumbing/plumbing-img1.jpg';
import Img2 from '../assets/images/plumbing/plumbing-img2.jpg';
import Img3 from '../assets/images/plumbing/plumbing-img3.jpg';
import Img4 from '../assets/images/plumbing/plumbing-img4.jpg';
import CrossArrow from '../assets/images/svg/cross-arrow.svg';
import AddImg from '../assets/images/shared/promo-img.jpg';
import DownloadImg from '../assets/images/shared/download-icon.png';
import Brochure from '../assets/images/svg/brochure.svg';
import Brochure2 from '../assets/images/svg/brochure2.svg';


const Plumbing: React.FC = () => {
    return (
        <>
            {/* <!-- ====================================== About Hero Section ===================================== --> */}
            <section className="heroSection">
                <div className="container">
                    <h1 className="img-header-text fade_down">Plumbing Services</h1>
                    <div className="breadcrumb-group fade_up">
                        <Link to="/">HOME / </Link>
                        <Link to="/services">Service / </Link>
                        <Link to="/services/plumbing">Plumbing Services</Link>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Nine ===================================== --> */}
            <section className="section-eight">
                <div className="container">
                    <div className="row all-services-row">
                        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
                            <h2 className="sec-text pb-0 fade_up">Dependable Plumbing Repairs & Installations</h2>
                            <img className="layers-img1 zoom_in" src={Img1} alt="plumbing-img1" />
                            <p className="fusce pb-2">Leaking pipes, blocked drains, low water pressure, or a full bathroom re-plumb — our plumbers diagnose the real problem first, rather than just patching symptoms, so the fix actually lasts.</p>
                            <p className="fusce mt-0 ">We work with copper, PEX, and PVC systems, and handle everything from kitchen and bathroom fit-outs to water heater installation and drainage repair. Every job is quoted up front, and we clean up after ourselves before we leave.</p>
                            <h3 className="ourServicesPrcoes mt-0">What's Included In Every Plumbing Job</h3>
                            <p className="fusce pb-0">We arrive with the tools and common parts needed to fix most issues on the first visit, pressure-test all new connections, and walk you through what was done and why.</p>
                            <div className="swiper singleServicesSlider">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <img src={Img2} alt="plumbing-img2" />
                                    </div>
                                    <div className="swiper-slide">
                                        <img src={Img3} alt="plumbing-img3" />
                                    </div>
                                    <div className="swiper-slide">
                                        <img src={Img4} alt="plumbing-img4" />
                                    </div>
                                </div>
                            </div>
                            <h3 className="ourServicesPrcoes mt-0">Frequently Asked Questions</h3>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading1">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                            What causes low water pressure in a home?
                                        </button>
                                    </h2>
                                    <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            It's usually a partially closed valve, a clogged aerator, mineral buildup in older pipes, or a failing pressure regulator. We test the system to pinpoint the cause rather than guessing.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading2">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                            Can you fix a leak without tearing out the wall?
                                        </button>
                                    </h2>
                                    <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            In many cases, yes — we use leak-detection equipment to pinpoint the source before opening anything up, which usually means a smaller, cheaper repair.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading3">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                            Do you install water heaters and boilers?
                                        </button>
                                    </h2>
                                    <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Yes, we install, replace, and service both tank and tankless water heaters as well as domestic boilers.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading4">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                            How do I know if I have a blocked drain versus a sewer issue?
                                        </button>
                                    </h2>
                                    <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Slow drains in just one fixture usually point to a local blockage; multiple fixtures backing up at once often means a main line issue. We can inspect and confirm before recommending work.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading5">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                            Can plumbing work be done myself?
                                        </button>
                                    </h2>
                                    <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Simple maintenance like clearing an aerator is fine, but anything touching supply lines, gas connections, or drainage should go through a licensed plumber to avoid water damage or code violations.
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

export default Plumbing
