import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import Img1 from '../assets/images/painting/painting-img1.jpg';
import Img2 from '../assets/images/painting/painting-img2.jpg';
import Img3 from '../assets/images/painting/painting-img3.jpg';
import Img4 from '../assets/images/painting/painting-img4.jpg';
import CrossArrow from '../assets/images/svg/cross-arrow.svg';
import AddImg from '../assets/images/shared/promo-img.jpg';
import DownloadImg from '../assets/images/shared/download-icon.png';
import Brochure from '../assets/images/svg/brochure.svg';
import Brochure2 from '../assets/images/svg/brochure2.svg';


const Painting: React.FC = () => {
    return (
        <>
            {/* <!-- ====================================== About Hero Section ===================================== --> */}
            <section className="heroSection">
                <div className="container">
                    <h1 className="img-header-text fade_down">Painting & Finishing</h1>
                    <div className="breadcrumb-group fade_up">
                        <Link to="/">HOME / </Link>
                        <Link to="/services">Service / </Link>
                        <Link to="/services/painting">Painting & Finishing</Link>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Nine ===================================== --> */}
            <section className="section-eight">
                <div className="container">
                    <div className="row all-services-row">
                        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
                            <h2 className="sec-text pb-0 fade_up">Interior & Exterior Painting, Done Properly</h2>
                            <img className="layers-img1 zoom_in" src={Img1} alt="painting-img1" />
                            <p className="fusce pb-2">A good paint job is 80% preparation. We fill, sand, and prime properly before a single coat of colour goes on, which is why our finishes hold up rather than peeling within a year.</p>
                            <p className="fusce mt-0 ">We handle interior rooms, full exterior repaints, decorative finishes, and feature walls, using quality paint systems suited to the surface and climate. Furniture and flooring are covered and protected for every job.</p>
                            <h3 className="ourServicesPrcoes mt-0">What's Included In Every Painting Job</h3>
                            <p className="fusce pb-0">We provide a colour consultation if needed, prep all surfaces properly before painting, and do a final walk-through with you to check every wall before we call the job done.</p>
                            <div className="swiper singleServicesSlider">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <img src={Img2} alt="painting-img2" />
                                    </div>
                                    <div className="swiper-slide">
                                        <img src={Img3} alt="painting-img3" />
                                    </div>
                                    <div className="swiper-slide">
                                        <img src={Img4} alt="painting-img4" />
                                    </div>
                                </div>
                            </div>
                            <h3 className="ourServicesPrcoes mt-0">Frequently Asked Questions</h3>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading1">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                            How many coats of paint do I actually need?
                                        </button>
                                    </h2>
                                    <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Most jobs need two coats over a primed surface for even coverage and durability — one coat often looks patchy once it dries, especially with a colour change.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading2">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                            Do you paint exteriors or just interiors?
                                        </button>
                                    </h2>
                                    <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Both. Exterior work includes extra prep like pressure washing, scraping, and weatherproof primer suited to your climate.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading3">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                            How long before I can use a freshly painted room?
                                        </button>
                                    </h2>
                                    <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Paint is usually dry to the touch within a few hours, but we recommend waiting 24 hours before hanging anything or pushing furniture back against the walls.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading4">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                            Can you help me choose a colour?
                                        </button>
                                    </h2>
                                    <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Yes, we offer a colour consultation and can bring sample swatches so you can see how a colour looks in your actual lighting before committing.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading5">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                            Do you cover and protect furniture and floors?
                                        </button>
                                    </h2>
                                    <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Always — we sheet and tape off furniture, fixtures, and flooring before we open a single tin of paint.
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

export default Painting
