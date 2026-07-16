import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import Img1 from '../assets/images/masonry/masonry-img1.jpg';
import Img2 from '../assets/images/masonry/masonry-img2.jpg';
import Img3 from '../assets/images/masonry/masonry-img3.jpg';
import Img4 from '../assets/images/masonry/masonry-img4.jpg';
import CrossArrow from '../assets/images/svg/cross-arrow.svg';
import AddImg from '../assets/images/shared/promo-img.jpg';
import DownloadImg from '../assets/images/shared/download-icon.png';
import Brochure from '../assets/images/svg/brochure.svg';
import Brochure2 from '../assets/images/svg/brochure2.svg';


const Masonry: React.FC = () => {
    return (
        <>
            {/* <!-- ====================================== About Hero Section ===================================== --> */}
            <section className="heroSection">
                <div className="container">
                    <h1 className="img-header-text fade_down">Masonry Works</h1>
                    <div className="breadcrumb-group fade_up">
                        <Link to="/">HOME / </Link>
                        <Link to="/services">Service / </Link>
                        <Link to="/services/masonry">Masonry Works</Link>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Nine ===================================== --> */}
            <section className="section-eight">
                <div className="container">
                    <div className="row all-services-row">
                        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
                            <h2 className="sec-text pb-0 fade_up">Skilled Masonry, Built To Last</h2>
                            <img className="layers-img1 zoom_in" src={Img1} alt="masonry-img1" />
                            <p className="fusce pb-2">From foundations and retaining walls to boundary walls and paving, our masons combine traditional bricklaying skill with modern reinforcement techniques so the work holds up for decades, not years.</p>
                            <p className="fusce mt-0 ">We handle brickwork, blockwork, concrete works, plastering, and renovation of existing structures. Every project starts with a site survey to check ground conditions and load requirements before we quote.</p>
                            <h3 className="ourServicesPrcoes mt-0">What's Included In Every Masonry Job</h3>
                            <p className="fusce pb-0">We source and price materials up front, protect the surrounding site during work, and finish with a clean, level result — whether that's a rendered wall or a paved driveway.</p>
                            <div className="swiper singleServicesSlider">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <img src={Img2} alt="masonry-img2" />
                                    </div>
                                    <div className="swiper-slide">
                                        <img src={Img3} alt="masonry-img3" />
                                    </div>
                                    <div className="swiper-slide">
                                        <img src={Img4} alt="masonry-img4" />
                                    </div>
                                </div>
                            </div>
                            <h3 className="ourServicesPrcoes mt-0">Frequently Asked Questions</h3>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading1">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                            How long does a boundary wall take to build?
                                        </button>
                                    </h2>
                                    <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            A standard garden boundary wall typically takes 3-5 days depending on length and ground conditions; larger retaining or load-bearing walls take longer to allow for proper curing.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading2">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                            Do you handle plastering as well as bricklaying?
                                        </button>
                                    </h2>
                                    <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Yes, our team covers both structural masonry and finishing plaster work, so you don't need to coordinate two separate contractors.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading3">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                            What causes cracks in masonry walls?
                                        </button>
                                    </h2>
                                    <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Common causes include ground settlement, poor original drainage, or foundations that weren't deep enough for the soil type. We inspect the crack pattern to identify the real cause before repairing.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading4">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                            Can you match existing brick or stone on a renovation?
                                        </button>
                                    </h2>
                                    <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            We do our best to source a close match for renovations and extensions, and will show you samples before starting so there are no surprises.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading5">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                            Do I need planning permission for a new wall?
                                        </button>
                                    </h2>
                                    <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            It depends on the height and location — we can advise on typical requirements in your area, though final confirmation should come from your local authority.
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

export default Masonry
