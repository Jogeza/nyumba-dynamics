import { Link } from "react-router-dom";

import CrossArrowSvg from "../assets/images/svg/cross-arrow.svg";

import FooterImg1 from "../assets/images/footer/footer-img1.jpg";
import FooterImg2 from "../assets/images/footer/footer-img2.jpg";
import FooterImg3 from "../assets/images/footer/footer-img3.jpg";

import InstaSvg from "../assets/images/svg/insta.svg";
import WhiteLogoSvg from "../assets/images/svg/nyumba-dynamics-white-logo.svg";
import CallWhite from "../assets/images/svg/callWhite.svg";

import facebook from "../assets/images/svg/facebook.svg";
import twitter from "../assets/images/svg/twitter.svg";
import insta from "../assets/images/svg/insta.svg";
import whatsapp from "../assets/images/svg/whatsapp.svg";


const Footer = () => {

    return (

        <footer>

            <div className="container">


                {/* Newsletter */}

                <div className="subscribe-section">

                    <h2 className="sec-text updat pb-0">
                        Stay Updated With Nyumba Dynamics Projects & Property News
                    </h2>


                    <div className="subscribe-input-main">

                        <input
                            type="email"
                            placeholder="Enter your email address"
                            name="subscribe"
                        />


                        <button className="btn-quote">

                            Subscribe Now

                            <img
                                src={CrossArrowSvg}
                                alt="arrow"
                            />

                        </button>


                    </div>


                </div>





                <div className="row footer-row-quick">



                    {/* Contact */}

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">


                        <h2 className="working-hours">
                            Contact Us
                        </h2>


                        <div className="timing-hrw pt-0">

                            <p>
                                Location
                            </p>

                            <p>
                                Ntinda, Kampala
                            </p>

                        </div>




                        <div className="timing-hrw">

                            <p>
                                Email
                            </p>

                            <p>
                                info@nyumbadynamics.com
                            </p>

                        </div>




                        <div className="timing-hrw border-0 pb-0">

                            <p>
                                Office Hours
                            </p>

                            <p>
                                Mon - Fri: 8AM - 5PM
                            </p>

                        </div>


                    </div>







                    {/* Services */}

                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 quicklinks-main">


                        <div>

                            <h2 className="working-hours">
                                Our Services
                            </h2>


                            <ul>

                                <li>
                                    <Link to="/services/electrical">
                                        Electrical Services
                                    </Link>
                                </li>


                                <li>
                                    <Link to="/services/plumbing">
                                        Plumbing Services
                                    </Link>
                                </li>


                                <li>
                                    <Link to="/services/masonry">
                                        Masonry Works
                                    </Link>
                                </li>


                                <li>
                                    <Link to="/services/carpentry">
                                        Carpentry & Joinery
                                    </Link>
                                </li>


                                <li>
                                    <Link to="/services/painting">
                                        Painting & Finishing
                                    </Link>
                                </li>


                            </ul>


                        </div>





                        <div>


                            <h2 className="working-hours">
                                Quick Links
                            </h2>


                            <ul>


                                <li>
                                    <Link to="/about">
                                        About Us
                                    </Link>
                                </li>


                                <li>
                                    <Link to="/projects">
                                        Our Projects
                                    </Link>
                                </li>


                                <li>
                                    <Link to="/blog">
                                        Insights
                                    </Link>
                                </li>


                                <li>
                                    <Link to="/consultation">
                                        Request Consultation
                                    </Link>
                                </li>


                                <li>
                                    <Link to="/contact">
                                        Contact Us
                                    </Link>
                                </li>


                            </ul>


                        </div>


                    </div>








                    {/* Projects */}

                    <div className="col-xxl-4 col-xl-4 col-lg-4">


                        <h2 className="working-hours">
                            Our Projects
                        </h2>



                        <div className="footer-img-group">



                            <Link 
                                to="/projects" 
                                className="img-container"
                            >

                                <img
                                    className="footer-imgs"
                                    src={FooterImg1}
                                    alt="Nyumba Dynamics Project"
                                />


                                <div className="footer-img-overlay">

                                    <img
                                        src={InstaSvg}
                                        alt="project"
                                    />

                                </div>


                            </Link>






                            <Link 
                                to="/projects" 
                                className="img-container"
                            >

                                <img
                                    className="footer-imgs"
                                    src={FooterImg2}
                                    alt="Nyumba Dynamics Project"
                                />


                                <div className="footer-img-overlay">

                                    <img
                                        src={InstaSvg}
                                        alt="project"
                                    />

                                </div>


                            </Link>







                            <Link 
                                to="/projects" 
                                className="img-container"
                            >

                                <img
                                    className="footer-imgs"
                                    src={FooterImg3}
                                    alt="Nyumba Dynamics Project"
                                />


                                <div className="footer-img-overlay">

                                    <img
                                        src={InstaSvg}
                                        alt="project"
                                    />

                                </div>


                            </Link>



                        </div>


                    </div>



                </div>









                {/* Bottom Footer */}



                <div className="media-logo-call-footer fade_up show">


                    <Link to="/">

                        <img
                            src={WhiteLogoSvg}
                            alt="Nyumba Dynamics Logo"
                        />

                    </Link>






                    <div className="call-detl">


                        <div className="img-main-call">

                            <img
                                src={CallWhite}
                                alt="phone"
                            />

                        </div>





                        <div>

                            <p>
                                CALL US NOW!
                            </p>


                            <a href="tel:+256751353757">
                                +256 7513 53757
                            </a>


                            <span> / </span>


                            <a href="tel:+256761648679">
                                +256 7616 48679
                            </a>


                        </div>


                    </div>








                    <div className="footer-med-icons-main">



                        <a
                            href="https://www.facebook.com/nyumbadynamics"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-med-icons"
                        >

                            <img
                                src={facebook}
                                alt="facebook"
                            />

                        </a>





                        <a
                            href="https://twitter.com/nyumbadynamics"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-med-icons"
                        >

                            <img
                                src={twitter}
                                alt="twitter"
                            />

                        </a>






                        <a
                            href="https://www.instagram.com/nyumbadynamics"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-med-icons"
                        >

                            <img
                                src={insta}
                                alt="instagram"
                            />

                        </a>







                        <a
                            href="https://wa.me/256751353757"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-med-icons"
                        >

                            <img
                                src={whatsapp}
                                alt="whatsapp"
                            />

                        </a>



                    </div>


                </div>







                <div className="copyrights-main">


                    <p>
                        Copyright © {new Date().getFullYear()}
                        Nyumba Dynamics. All Rights Reserved.
                    </p>



                    <p>
                        Privacy Policy | Terms & Conditions
                    </p>


                </div>




            </div>


        </footer>


    );

};


export default Footer;