import { Link } from 'react-router-dom';
import CrossArrowSvg from '../assets/images/svg/cross-arrow.svg';
import FooterImg1 from '../assets/images/footer/footer-img1.jpg';
import FooterImg2 from '../assets/images/footer/footer-img2.jpg';
import FooterImg3 from '../assets/images/footer/footer-img3.jpg';
import InstaSvg from '../assets/images/svg/insta.svg';
import WhiteLogoSvg from '../assets/images/svg/nyumba-dynamics-white-logo.svg';
import CallWhite from '../assets/images/svg/callWhite.svg';
import facebook from "../assets/images/svg/facebook.svg";
import twitter from '../assets/images/svg/twitter.svg';
import insta from '../assets/images/svg/insta.svg';
import whatsapp from '../assets/images/svg/whatsapp.svg';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">

                    <div className="subscribe-section">
                        <h2 className="sec-text updat pb-0">
                            Stay Updated With Nyumba Dynamics Projects & Real Estate News.
                        </h2>

                        <div className="subscribe-input-main">
                            <input 
                                type="email" 
                                placeholder="Enter your email address" 
                                name="subscribe" 
                            />

                            <button className="btn-quote">
                                Subscribe Now
                                <img src={CrossArrowSvg} alt="cross-arrow" />
                            </button>
                        </div>
                    </div>


                    <div className="row footer-row-quick">

                        {/* Office Hours */}
                        <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">

                            <h2 className="working-hours">
                                Office Hours
                            </h2>

                            <div className="timing-hrw pt-0">
                                <p>Monday - Friday</p>
                                <p>8:00 AM - 5:00 PM</p>
                            </div>

                            <div className="timing-hrw">
                                <p>Saturday</p>
                                <p>9:00 AM - 2:00 PM</p>
                            </div>

                            <div className="timing-hrw">
                                <p>Location</p>
                                <p>Ntinda, Kampala</p>
                            </div>

                            <div className="timing-hrw border-0 pb-0">
                                <p>Email</p>
                                <p>
                                    info@nyumbadynamics.com
                                </p>
                            </div>

                        </div>



                        {/* Services + Links */}
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 quicklinks-main">

                            <div>

                                <h2 className="working-hours">
                                    Our Services
                                </h2>

                                <ul>

                                    <li>
                                        <Link to="/Residential">
                                            Residential Properties
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/Commercial">
                                            Commercial Properties
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/PropertyManagement">
                                            Property Management
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/RealEstate">
                                            Real Estate Consultancy
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/Construction">
                                            Construction Services
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
                                        <Link to="/About">
                                            About Us
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/Projects">
                                            Our Projects
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/Properties">
                                            Properties
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/Faq">
                                            FAQs
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/Contact">
                                            Contact Us
                                        </Link>
                                    </li>

                                </ul>

                            </div>

                        </div>




                        {/* Project Images */}
                        <div className="col-xxl-4 col-xl-4 col-lg-4">

                            <h2 className="working-hours">
                                Our Projects
                            </h2>


                            <div className="footer-img-group">


                                <a href="#" className="img-container">

                                    <img 
                                        className="footer-imgs" 
                                        src={FooterImg1} 
                                        alt="project-one" 
                                    />

                                    <div className="footer-img-overlay">
                                        <img 
                                            src={InstaSvg} 
                                            className="brand-instagram" 
                                            alt="instagram" 
                                        />
                                    </div>

                                </a>



                                <a href="#" className="img-container">

                                    <img 
                                        className="footer-imgs" 
                                        src={FooterImg2} 
                                        alt="project-two" 
                                    />

                                    <div className="footer-img-overlay">

                                        <img 
                                            src={InstaSvg} 
                                            className="brand-instagram" 
                                            alt="instagram" 
                                        />

                                    </div>

                                </a>




                                <a href="#" className="img-container">

                                    <img 
                                        className="footer-imgs" 
                                        src={FooterImg3} 
                                        alt="project-three" 
                                    />

                                    <div className="footer-img-overlay">

                                        <img 
                                            src={InstaSvg} 
                                            className="brand-instagram" 
                                            alt="instagram" 
                                        />

                                    </div>

                                </a>


                            </div>

                        </div>

                    </div>




                    {/* Logo + Contact + Social */}

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
                                    alt="call" 
                                />

                            </div>


                            <div>
                                 <p>CALL US NOW!</p>

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
                                href="https://www.facebook.com" 
                                className="footer-med-icons"
                            >
                                <img src={facebook} alt="facebook" />
                            </a>


                            <a 
                                href="https://x.com" 
                                className="footer-med-icons"
                            >
                                <img src={twitter} alt="twitter" />
                            </a>



                            <a 
                                href="https://www.instagram.com" 
                                className="footer-med-icons"
                            >
                                <img src={insta} alt="instagram" />
                            </a>



                            <a 
                                href="https://wa.me/256751353757" 
                                className="footer-med-icons"
                            >
                                <img src={whatsapp} alt="whatsapp" />
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
        </>
    )
}

export default Footer;