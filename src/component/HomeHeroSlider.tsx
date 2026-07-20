import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import { Link } from "react-router-dom";

import CrossArrow from "../assets/images/svg/cross-arrow.svg";

import HomeImg1 from "../assets/images/home/home-img1.png";
import HomeImg2 from "../assets/images/home/home-img2.png";
import HomeImg3 from "../assets/images/home/home-img3.png";

import Customer1 from "../assets/images/home/customer1.jpg";
import Customer2 from "../assets/images/home/customer2.jpg";
import Customer3 from "../assets/images/home/customer3.jpg";

import Video1 from "../assets/video/video1.mp4";


const HomeHeroSlider: React.FC = () => {

    const heroSlider = {
        modules: [Autoplay, EffectFade],
        speed: 1200,
        loop: true,
        effect: "fade",
        slidesPerView: 1,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    };


    const customers = (
        <div className="cutomer-img-main-text">

            <div className="cutomer-img-main">

                <img 
                    className="cutome1" 
                    src={Customer1} 
                    alt="Nyumba Dynamics customer"
                />

                <img 
                    className="cutome2" 
                    src={Customer2} 
                    alt="Nyumba Dynamics customer"
                />

                <img 
                    className="cutome3" 
                    src={Customer3} 
                    alt="Nyumba Dynamics customer"
                />

            </div>


            <div className="cutomers-text-main">

                <h2>
                    Trusted Professionals
                </h2>

                <p>
                    Quality Solutions Across Kampala
                </p>

            </div>

        </div>
    );


    const slides = [

        {
            tag: "Complete Home & Property Solutions",

            title: "Your Trusted Partner For Modern Living",

            description:
            "From electrical installations and plumbing to smart homes, CCTV, renovations, interior design and property maintenance — Nyumba Dynamics connects you with trusted professionals for every project.",

            image: HomeImg1,

            button: "Explore Services"
        },


        {
            tag: "Smart Home & Security Solutions",

            title: "Technology That Protects Your Home",

            description:
            "Experience smarter living with CCTV installation, access control, smart lighting, automation and security solutions designed for homes and businesses.",

            image: HomeImg2,

            button: "View Solutions"
        },


        {
            tag: "Construction & Property Care",

            title: "Building Better Spaces",

            description:
            "Professional construction, renovations, painting, carpentry, welding and maintenance services delivered with quality workmanship.",

            image: HomeImg3,

            button: "Get Started"
        }

    ];



    return (
<<<<<<< HEAD
=======
        <>
            <Swiper {...heroSlider} className="swiper hero-slider">
                <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide main-swiper-slide" id="hero-slider-img1">
                        <div className="slide-content">
                            <div className="container">
                                <div className="row main-swiper-row">
                                    <div className="col-xxl-6 col-xl-6 col-lg-10 clearfix-space animate-slide">
                                        <p className="needs-text">Hire The Right Professionals</p>
                                        <h1 className="lets-us-do">Home and Enterprise Maintenance Services, Smart Homes, and Security Solutions Under One Roof</h1>
                                        <h2 className="residents">From electrical repairs and plumbing to CCTV installation, smart home
                                            automation, interior design, cleaning and maintenance, Nyumba Dynamics delivers
                                            trusted solutions for modern living.</h2>
                                        <div className="hero-cta-group">
                                            <Link to="/consultation" className="btn-quote our-services-btn">Request a Service
                                                <img src={CrossArrow} alt="cross-arrow" />
                                            </Link>
                                            <Link to="/consultation" className="btn-quote-outline">Get Free Quote</Link>
                                            <Link to="/contact" className="btn-quote-outline">Become a Service Provider</Link>
                                        </div>
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
                                        <Link to="/services" className="btn-quote our-services-btn">Our Services
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
                                        <Link to="/services" className="btn-quote our-services-btn">Our Services
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
>>>>>>> phase1-import

        <Swiper 
            {...heroSlider} 
            className="swiper hero-slider"
        >


            {
                slides.map((slide,index)=>(

                    <SwiperSlide 
                        key={index}
                        className="swiper-slide main-swiper-slide"
                    >

                        <div className="slide-content">


                            <div className="container">

                                <div className="row main-swiper-row">


                                    <div className="col-xxl-6 col-xl-6 col-lg-10 clearfix-space animate-slide">


                                        <p className="needs-text">
                                            {slide.tag}
                                        </p>


                                        <h1 className="lets-us-do">
                                            {slide.title}
                                        </h1>


                                        <h2 className="residents">
                                            {slide.description}
                                        </h2>



                                        <Link 
                                            to="/Services" 
                                            className="btn-quote our-services-btn"
                                        >

                                            {slide.button}

                                            <img 
                                                src={CrossArrow} 
                                                alt="arrow"
                                            />

                                        </Link>


                                    </div>



                                    <div className="col-xxl-6 col-xl-6 col-lg-10 position-relative">


                                        <img

                                            className="home-img-clening"

                                            src={slide.image}

                                            alt={slide.title}

                                        />


                                        {customers}


                                    </div>



                                </div>


                            </div>


                        </div>


                    </SwiperSlide>


                ))
            }



            <SwiperSlide className="swiper-slide main-swiper-slide video-slide">


                <video 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                >

                    <source 
                        src={Video1} 
                        type="video/mp4" 
                    />

                </video>



                <div className="slide-content">

                    <div className="container">

                        <div className="row main-swiper-row">


                            <div className="col-xxl-6 col-xl-6 col-lg-10 clearfix-space animate-slide">


                                <p className="needs-text">
                                    Nyumba Dynamics
                                </p>


                                <h1 className="lets-us-do">
                                    Creating Better Spaces
                                </h1>


                                <h2 className="residents">
                                    Reliable property solutions combining technology,
                                    craftsmanship and professional service.
                                </h2>



                                <Link 
                                    to="/Services" 
                                    className="btn-quote our-services-btn"
                                >

                                    Start Your Project

                                    <img 
                                        src={CrossArrow} 
                                        alt="arrow"
                                    />

                                </Link>


                            </div>


                        </div>


                    </div>


                </div>



            </SwiperSlide>



        </Swiper>

    );
};


export default HomeHeroSlider;