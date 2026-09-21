import React from 'react'
import { Link } from 'react-router-dom';
import CrossArrow from '../assets/images/svg/cross-arrow.svg';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import projectData from '../data/projectData.json'
import { siteImages } from '../data/siteImages.ts';

/* ---------------- Image Map ---------------- */
export const projectImages: Record<string, string> = {
    "project-img1.jpg": siteImages.electrical,
    "project-img2.jpg": siteImages.plumbing,
    "project-img3.jpg": siteImages.welding,
    "project-img4.jpg": siteImages.pool,
    "project-img5.jpg": siteImages.garden,
    "project-img6.jpg": siteImages.locksmith,
    "project-img7.jpg": siteImages.cleaning,
    "project-img8.jpg": siteImages.maintenance,
};

export interface ProjectItem {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    link: string;
}


const ProjectSlider: React.FC = () => {
    const projectSlider = {
        loop: true,
        speed: 1000,
        slidesPerView: 4,
        modules: [Autoplay, Navigation],
        autoplay: { delay: 2000, disableOnInteraction: false },
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

    return (
        <>
            <Swiper {...projectSlider} className="swiper projectSlider">
                {projectData.map((item: ProjectItem) => (
                    <SwiperSlide key={item.id}>
                        <div className="single-img">
                            <img
                                src={projectImages[item.image] ?? siteImages.hero}
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
        </>
    )
}

export default ProjectSlider
