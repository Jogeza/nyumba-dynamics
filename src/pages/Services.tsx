import React from 'react'
import { Link } from 'react-router-dom'
import servicesData from "../data/servicesData.json";
import categoriesData from "../data/serviceCategories.json";
import { ServiceItem } from '../component/ServicesFeatured.tsx';
import ServiceLineIcon from '../component/ServiceLineIcon.tsx';
import PageSEO from '../component/PageSEO.tsx';

interface Category {
    slug: string;
    title: string;
    description: string;
    serviceSlugs: string[];
}

const Services: React.FC = () => {

    const services = servicesData as ServiceItem[];
    const categories = categoriesData as Category[];

    return (
        <>
            <PageSEO
                title="Property Services Uganda | Electrical, Plumbing, Smart Home & More"
                description="Fourteen property services in Kampala: electrical, plumbing, masonry, carpentry, welding, painting, CCTV, smart homes, cleaning, landscaping, interior design, pest control and air conditioning."
            />
            {/* <!-- ====================================== About Hero Section ===================================== --> */}
            <section className="heroSection">
                <div className="container">
                    <h1 className="img-header-text fade_down">Our Services</h1>
                    <div className="breadcrumb-group fade_up">
                        <Link to="/">HOME / </Link>
                        <Link to="/services">SERVICES</Link>
                    </div>
                </div>
            </section>

            {/* <!-- ====================================== Services By Category ===================================== --> */}
            {categories.map((category, index) => {
                const categoryServices = services.filter((s) =>
                    category.serviceSlugs.includes(s.slug)
                );

                if (categoryServices.length === 0) return null;

                return (
                    <section
                        className={`section-eight ${index % 2 === 1 ? 'testimonial-page' : ''}`}
                        key={category.slug}
                    >
                        <div className="container">
                            <p className="cap-text fade_up">nyumba dynamics services</p>
                            <div className="section-main-text-flex">
                                <h2 className="sec-text pb-0 fade_up">{category.title}</h2>
                                <p className="sec-sub-text ornare fade_up">{category.description}</p>
                            </div>
                            <div className="row services-page-row" style={{ marginTop: 30 }}>
                                {categoryServices.map((item) => (
                                    <div
                                        className="col-xxl-4 col-xl-4 col-lg-4 col-md-6" key={item.id}
                                    >
                                        <Link to={`/consultation?service=${encodeURIComponent(item.slug)}`} className="cleaning-card service-request-card">
                                            <div className="card-containe">
                                                <div className="services-svg-main" aria-hidden="true">
                                                    <ServiceLineIcon slug={item.slug} />
                                                </div>
                                                <h3 className="services-name">{item.title}</h3>
                                                <p className="services-card-sub-text">{item.desc}</p>
                                                <span className="service-request-action">Request</span>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                );
            })}
        </>
    )
}

export default Services
