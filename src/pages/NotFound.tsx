import React from 'react'
import { Link } from 'react-router-dom'
import CrossArrow from '../assets/images/svg/cross-arrow.svg';
import PageSEO from '../component/PageSEO.tsx';

const NotFound: React.FC = () => {
    return (
        <>
            <PageSEO title="Page Not Found" description="The requested Nyumba Dynamics page could not be found." />
            {/* <!-- ====================================== About Hero Section ===================================== --> */}
            <section className="heroSection">
                <div className="container">
                    <h1 className="img-header-text fade_down">404 Page</h1>
                    <div className="breadcrumb-group fade_up">
                        <Link to="/">HOME / </Link>
                        <span>404 PAGE</span>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Nine ===================================== --> */}
            <section className="section-eight testimonial-page">
                <div className="container">
                    <p className="cap-text cost-cal fade_up">404 ERROR</p>
                    <h2 className="sec-text mazing fade_up">We could not find that page.</h2>
                    <p className="sec-sub-text scetur fade_up">The address may be outdated or the page may have moved. Return home to browse Nyumba Dynamics services.</p>
                    <div className="error-img-btn">
                        <Link to="/" className="btn-quote">Back To Home
                            <img src={CrossArrow} alt="cross-arrow" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NotFound
