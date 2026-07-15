import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { Link } from 'react-router-dom';
import CrossArrow from '../assets/images/svg/cross-arrow.svg';
import HomeImg1 from '../assets/images/home/home-img1.png';
import Customer1 from '../assets/images/home/customer1.jpg';
import Customer2 from '../assets/images/home/customer2.jpg';
import Customer3 from '../assets/images/home/customer3.jpg';
import Video1 from '../assets/video/video1.mp4';

const HomeHeroSlider: React.FC = () => {
    const heroSlider = {
        modules: [Autoplay, EffectFade],
        speed: 1000,
        loop: true,
        effect: "fade",
        slidesPerView: 1,
        autoplay: { delay: 2000, disableOnInteraction: false },
    }

    return (
        <>
            <Swiper {...heroSlider} className="swiper hero-slider">
                <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide main-swiper-slide" id="hero-slider-img1">
                        <div className="slide-content">
                            <div className="container">
                                <div className="row main-swiper-row">
                                    <div className="col-xxl-6 col-xl-6 col-lg-10 clearfix-space animate-slide">
                                        <p className="needs-text">home and enterprise maintenance services</p>
                                        <h1 className="lets-us-do">Hire The Right Professionals</h1>
                                        <h2 className="residents">From electrical repairs and plumbing to CCTV installation, smart home
                                            automation, interior design, cleaning and maintenance — Nyumba Dynamics delivers
                                            trusted solutions for modern living, under one roof.</h2>
                                        <Link to="/Services" className="btn-quote our-services-btn">Our Services
                                            <img src={CrossArrow} alt="cross-arrow" />
                                        </Link>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-10 position-relative">
                                        <img className="home-img-clening " src={HomeImg1} alt="home-img1" />
                                        <div className="cutomer-img-main-text">
                                            <div className="cutomer-img-main">
                                                <img className="cutome1" src={Customer1} alt="customer1" />
                                                <img className="cutome2" src={Customer2} alt="customer2" />
                                                <img className="cutome3" src={Customer3} alt="customer3" />
                                            </div>
                                            <div className="cutomers-text-main">
                                                <h2>Customers Satisfied</h2>
                                                <p>3.8 (2.3k Reviews)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide main-swiper-slide" id="hero-slider-img2">
                        <div className="slide-content">
                            <div className="container">
                                <div className="row main-swiper-row">
                                    <div className="col-xxl-6 col-xl-6 col-lg-10 clearfix-space animate-slide">
                                        <p className="needs-text">smart homes and security solutions</p>
                                        <h1 className="lets-us-do">Smart Living, Made Simple</h1>
                                        <h2 className="residents">CCTV systems, smart locks, smart lighting and home automation —
                                            professionally installed and maintained by Nyumba Dynamics.</h2>
                                        <Link to="/Services" className="btn-quote our-services-btn">Our Services
                                            <img src={CrossArrow} alt="cross-arrow" />
                                        </Link>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-10 position-relative">
                                        <img className="home-img-clening " src={HomeImg1} alt="home-img1" />
                                        <div className="cutomer-img-main-text">
                                            <div className="cutomer-img-main">
                                                <img className="cutome1" src={Customer1} alt="customer1" />
                                                <img className="cutome2" src={Customer2} alt="customer2" />
                                                <img className="cutome3" src={Customer3} alt="customer3" />
                                            </div>
                                            <div className="cutomers-text-main">
                                                <h2>Customers Satisfied</h2>
                                                <p>3.8 (2.3k Reviews)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide main-swiper-slide video-slide">
                        <video autoPlay muted loop playsInline>
                            <source src={Video1} type="video/mp4" />
                        </video>
                        <div className="slide-content">
                            <div className="container">
                                <div className="row main-swiper-row">
                                    <div className="col-xxl-6 col-xl-6 col-lg-10 clearfix-space animate-slide">
                                        <p className="needs-text">construction, repair and handyman services</p>
                                        <h1 className="lets-us-do">Nyumba Dynamics</h1>
                                        <h2 className="residents">Electrical, plumbing, masonry, carpentry, welding and painting —
                                            delivered by trusted professionals across Kampala.</h2>
                                        <Link to="/Services" className="btn-quote our-services-btn">Our Services
                                            <img src={CrossArrow} alt="cross-arrow" />
                                        </Link>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-10 position-relative">
                                        <img className="home-img-clening " src={HomeImg1} alt="home-img1" />
                                        <div className="cutomer-img-main-text">
                                            <div className="cutomer-img-main">
                                                <img className="cutome1" src={Customer1} alt="customer1" />
                                                <img className="cutome2" src={Customer2} alt="customer2" />
                                                <img className="cutome3" src={Customer3} alt="customer3" />
                                            </div>
                                            <div className="cutomers-text-main">
                                                <h2>Customers Satisfied</h2>
                                                <p>3.8 (2.3k Reviews)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </div>
            </Swiper>
        </>
    )
}

export default HomeHeroSlider