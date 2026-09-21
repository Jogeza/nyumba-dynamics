import { Link } from 'react-router-dom';
import categories from '../data/serviceCategories.json';
import CrossArrow from '../assets/images/svg/cross-arrow.svg';

import icon1 from '../assets/images/svg/about-svg1.svg';
import icon2 from '../assets/images/svg/about-svg2.svg';
import icon3 from '../assets/images/svg/about-svg3.svg';
import icon4 from '../assets/images/svg/about-svg4.svg';
import { siteImages } from '../data/siteImages.ts';

const iconMap: Record<string, string> = {
    'about-svg1.svg': icon1,
    'about-svg2.svg': icon2,
    'about-svg3.svg': icon3,
    'about-svg4.svg': icon4,
};

const categoryImages: Record<string, { src: string; alt: string; position?: string }> = {
    'construction-repair': { src: siteImages.plumbing, alt: 'Nyumba Dynamics plumber completing a bathroom repair' },
    'safety-maintenance': { src: siteImages.locksmith, alt: 'Nyumba Dynamics technician servicing a window security fitting' },
    'smart-home-solutions': { src: siteImages.electrical, alt: 'Nyumba Dynamics technician installing connected exterior lighting', position: 'center 35%' },
    'lifestyle-enhancements': { src: siteImages.pool, alt: 'Nyumba Dynamics technician maintaining a residential swimming pool' },
};

interface Category {
    slug: string;
    title: string;
    icon: string;
    description: string;
    included: string[];
}

const ServiceCategories = () => {

    return (

        <div className="service-categories-grid">

            {
                (categories as Category[]).map((cat) => (

                    <Link to="/services" key={cat.slug} className="service-category-card zoom_in">

                        <div className="service-category-image">
                            <img src={categoryImages[cat.slug].src} alt={categoryImages[cat.slug].alt} loading="lazy" width="1280" height="853" style={{ objectPosition: categoryImages[cat.slug].position }} />
                        </div>

                        <div className="service-category-icon">
                            <img src={iconMap[cat.icon]} alt={cat.title} />
                        </div>

                        <h3 className="service-category-title">{cat.title}</h3>

                        <p className="service-category-desc">{cat.description}</p>

                        <p className="service-category-included">
                            {cat.included.slice(0, 4).join(' · ')}
                        </p>

                        <span className="service-category-link">
                            View Services
                            <img src={CrossArrow} alt="cross-arrow" />
                        </span>

                    </Link>

                ))
            }

        </div>

    );

};

export default ServiceCategories;
