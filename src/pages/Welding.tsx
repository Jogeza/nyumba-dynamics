import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import Img1 from '../assets/images/welding/welding-img1.jpg';
import Img2 from '../assets/images/welding/welding-img2.jpg';
import Img3 from '../assets/images/welding/welding-img3.jpg';
import Img4 from '../assets/images/welding/welding-img4.jpg';
import CrossArrow from '../assets/images/svg/cross-arrow.svg';
import AddImg from '../assets/images/shared/promo-img.jpg';
import DownloadImg from '../assets/images/shared/download-icon.png';
import Brochure from '../assets/images/svg/brochure.svg';
import Brochure2 from '../assets/images/svg/brochure2.svg';


const Welding: React.FC = () => {
    return (
        <>
            {/* <!-- ====================================== About Hero Section ===================================== --> */}
            <section className="heroSection">
                <div className="container">
                    <h1 className="img-header-text fade_down">Welding & Fabrication</h1>
                    <div className="breadcrumb-group fade_up">
                        <Link to="/">HOME / </Link>
                        <Link to="/services">Service / </Link>
                        <Link to="/services/welding">Welding & Fabrication</Link>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Nine ===================================== --> */}
            <section className="section-eight">
                <div className="container">
                    <div className="row all-services-row">
                        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
                            <h2 className="sec-text pb-0 fade_up">Structural Welding & Metal Fabrication</h2>
                            <img className="layers-img1 zoom_in" src={Img1} alt="welding-img1" />
                            <p className="fusce pb-2">Security gates, steel security doors, structural steel repairs, custom railings — our welders fabricate and install metalwork built for the loads and conditions it'll actually face.</p>
                            <p className="fusce mt-0 ">We work with mild steel, stainless steel, and aluminium, and handle both new fabrication and on-site repair welding. Every structural piece is built to the required load spec, not just to look right.</p>
                            <h3 className="ourServicesPrcoes mt-0">What's Included In Every Welding Job</h3>
                            <p className="fusce pb-0">We assess the site and load requirements before fabricating, prime and finish all steelwork against corrosion, and test every gate or door for smooth operation before handover.</p>
                            <div className="swiper singleServicesSlider">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <img src={Img2} alt="welding-img2" />
                                    </div>
                                    <div className="swiper-slide">
                                        <img src={Img3} alt="welding-img3" />
                                    </div>
                                    <div className="swiper-slide">
                                        <img src={Img4} alt="welding-img4" />
                                    </div>
                                </div>
                            </div>
                            <h3 className="ourServicesPrcoes mt-0">Frequently Asked Questions</h3>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading1">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                            Can you fabricate custom security gates?
                                        </button>
                                    </h2>
                                    <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Yes — we design and fabricate gates to your exact opening size and style, from simple sliding gates to decorative driveway entrances.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading2">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                            Do you weld on-site or only in a workshop?
                                        </button>
                                    </h2>
                                    <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Both — small fabrications are often built in the workshop for precision, while repairs and installations are done on-site.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading3">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                            What's the difference between mild steel and stainless steel for outdoor work?
                                        </button>
                                    </h2>
                                    <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Stainless resists corrosion much better and needs less maintenance, but costs more; mild steel is more affordable but needs a protective coating and occasional touch-up, especially near the coast.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading4">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                            Can you repair a broken steel gate or railing?
                                        </button>
                                    </h2>
                                    <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Yes, most repairs — cracked welds, bent frames, worn hinges — can be fixed on-site without replacing the whole structure.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading5">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                            Do you offer rust-proofing on fabricated steelwork?
                                        </button>
                                    </h2>
                                    <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Every piece we fabricate is primed and coated before it leaves, and we can apply additional galvanising or powder-coating for high-exposure locations.
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

export default Welding
