import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import CrossArrow from '../assets/images/svg/cross-arrow.svg';
import servicesData from "../data/servicesData.json";
import img1 from "../assets/images/services/slider-img1.jpg";
import img2 from "../assets/images/services/slider-img2.jpg";
import img3 from "../assets/images/services/slider-img3.jpg";
import img4 from "../assets/images/services/slider-img4.jpg";
import img5 from "../assets/images/services/slider-img5.jpg";
import img6 from "../assets/images/services/slider-img6.jpg";
import { serviceImages, serviceAlt } from '../data/siteImages.ts';

import ServiceLineIcon from './ServiceLineIcon.tsx';

export const serviceImageMap = {
    "slider-img1.jpg": img1,
    "slider-img2.jpg": img2,
    "slider-img3.jpg": img3,
    "slider-img4.jpg": img4,
    "slider-img5.jpg": img5,
    "slider-img6.jpg": img6,
} as const;

export interface ServiceItem {
    id: number;
    slug: string;
    category: string;
    img: keyof typeof serviceImageMap;
    svg: string;
    title: string;
    desc: string;
    description: string;
    benefits: string[];
    process: string[];
    link: string;
}

function ServicesFeatured() {
    const servicesSlider = {
        loop: true,
        speed: 1000,
        slidesPerView: 4,
        spaceBetween: 30,
        modules: [Autoplay],
        autoplay: { delay: 2000, disableOnInteraction: false },
        breakpoints: {
            991: {
                slidesPerView: 4,
                spaceBetween: 20
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            400: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            220: {
                slidesPerView: 1,
                spaceBetween: 12
            },
        }
    };

    return (
        <>
            <Swiper {...servicesSlider} className="swiper services-slider">
                {(servicesData as ServiceItem[]).map((item) => (
                    <SwiperSlide key={item.id} className="swiper-slide cleaning-card">
                        <div className="cleaning-card-img-main">
                            <img
                                src={serviceImages[item.slug] || serviceImageMap[item.img]}
                                alt={serviceAlt[item.slug] || item.title}
                                loading="lazy"
                                width="1280"
                                height="853"
                            />
                        </div>

                        <div className="services-svg-main" aria-hidden="true">
                            <ServiceLineIcon slug={item.slug} />
                        </div>

                        <div className="card-containe">
                            <h3 className="services-name">{item.title}</h3>
                            <p className="services-card-sub-text">{item.desc}</p>
                        </div>

                        <Link to={item.link} className="card-learn-more">
                            Learn More <img src={CrossArrow} alt="cross-arrow" />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default ServicesFeatured
