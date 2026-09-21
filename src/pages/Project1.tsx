import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom';
import CrossArrow from '../assets/images/svg/cross-arrow.svg';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import projectData from '../data/projectData.json';
import { projectImages, ProjectItem } from '../component/ProjectSlider.tsx';
import PageSEO from '../component/PageSEO.tsx';

const CATEGORIES = [
    "All",
    "Electrical & Lighting", "Plumbing", "Welding & Fabrication", "Lifestyle Maintenance",
    "Landscaping", "Locks & Security", "Cleaning", "Maintenance",
];

const Project1: React.FC = () => {

    const [activeCategory, setActiveCategory] = useState<string>("All");

    const projectSlider2 = {
        modules: [Autoplay, Navigation],
        loop: true,
        speed: 1000,
        slidesPerView: 4,
        autoplay: {
            reverseDirection: true,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            1300: {
                slidesPerView: 4,
            },
            991: {
                slidesPerView: 3,
            },
            670: {
                slidesPerView: 2,
            },
            220: {
                slidesPerView: 1,
            },
        }
    }

    const filteredProjects = useMemo(() => {
        const items = projectData as ProjectItem[];
        if (activeCategory === "All") return items;
        return items.filter((item) => item.category === activeCategory);
    }, [activeCategory]);

    return (
        <>
            <PageSEO
                title="Service Showcase | Nyumba Dynamics Uganda"
                description="See Nyumba Dynamics technicians delivering practical maintenance, plumbing, fabrication, landscaping and property-care services."
            />
            {/* <!-- ====================================== About Hero Section ===================================== --> */}
            <section className="heroSection">
                <div className="container">
                    <h1 className="img-header-text fade_down">Service Showcase</h1>
                    <div className="breadcrumb-group fade_up">
                        <Link to="/">HOME / </Link>
                        <Link to="/properties"> Showcase</Link>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== About Section Two ===================================== --> */}
            <section className="section-two">
                <div className="container">
                    <p className="cap-text fade_up">OUR WORK</p>
                    <div className="section-main-text-flex">
                        <h2 className="sec-text pb-0 fade_up">See Our Team At Work</h2>
                        <p className="sec-sub-text ornare fade_up">Authentic Nyumba Dynamics field imagery showing the capabilities and care we bring to property service work.</p>
                    </div>

                    <div className="project-category-filters" style={{ marginTop: 40 }}>
                        {CATEGORIES.map((category) => (
                            <button
                                key={category}
                                type="button"
                                className={`project-category-filter-btn ${activeCategory === category ? "active" : ""}`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <Swiper {...projectSlider2} key={activeCategory} className="swiper projectSlider2">
                    {filteredProjects.map((item: ProjectItem) => (
                        <SwiperSlide key={item.id}>
                            <div className="single-img">
                                <img
                                    src={projectImages[item.image]}
                                    alt={item.title}
                                    className="home-project-img"
                                />
                                <div className="img-overlay">
                                    <div>
                                        <h3 className="project-name-home">{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                    <Link to={item.link} className="btn-quote view-project-btn">
                                        View Capability
                                        <img src={CrossArrow} alt="cross-arrow" />
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="swiper-button-next project-button-next"></div>
                    <div className="swiper-button-prev project-button-prev"></div>
                </Swiper>
            </section>
        </>
    )
}

export default Project1
