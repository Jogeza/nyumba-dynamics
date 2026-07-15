import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoSvg from '../assets/images/svg/logo.svg';
import menu2 from '../assets/images/svg/menu2.svg';
import CloseIcon from '../assets/images/svg/close-icon.svg';
import dsad from '../assets/images/home/dsad.png';
import DropdownArrow from '../assets/images/svg/dropdown-arrow.svg';
import headphoneIcon from '../assets/images/svg/headphone-icon.svg';
import CrossArrow from '../assets/images/svg/cross-arrow.svg';


interface MenuChild {
    label: string;
    link: string;
}


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<number | null>(null);
    const location = useLocation();

    const toggleDropdown = (index: number) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    const isParentActive = (children: MenuChild[]) => {
        return children.some((child: MenuChild) => child.link === location.pathname);
    };

    const menuItems = [
        {
            label: "Services",
            children: [
                { label: "All Services", link: "/Services" },
                { label: "Electrical Services", link: "/HouseCleaning" },
                { label: "Plumbing Services", link: "/KitchenCleaning" },
                { label: "Masonry Works", link: "/OfficeCleaning" },
                { label: "Carpentry & Joinery", link: "/WindowCleaning" },
                { label: "Welding & Fabrication", link: "/CorporateCleaning" },
                { label: "Painting & Finishing", link: "/CarpetCleaning" },
            ],
        },
        {
            label: "Smart Homes",
            children: [
                { label: "Smart Home Solutions", link: "/HomeVideo" },
                { label: "Security System Installation", link: "/HomeSolid" },
                { label: "Preventive Maintenance", link: "/PricingPlan" },
            ],
        },
        {
            label: "Company",
            children: [
                { label: "About Us", link: "/About" },
                { label: "Our Team", link: "/Team" },
                { label: "Our Partners", link: "/OurClients" },
                { label: "Testimonials", link: "/TestimonialsPage" },
                { label: "FAQs", link: "/Faq" },
                { label: "Get a Free Quote", link: "/GetQuote" },
            ],
        },
        {
            label: "Projects",
            children: [
                { label: "Residential Projects", link: "/Project1" },
                { label: "Commercial Projects", link: "/Project2" },
                { label: "Smart Home Installations", link: "/Project3" },
            ],
        },
        {
            label: "Blog",
            children: [
                { label: "Home Maintenance Tips", link: "/OurBlog" },
                { label: "Smart Home Trends", link: "/Blog2" },
                { label: "Security Advice", link: "/Blog3" },
            ],
        },
    ];

    return (
        <>
            {/* Overlay */}
            {menuOpen && <div className="overlay active" onClick={() => setMenuOpen(false)}></div>}
            <header className={`header`} id="top-navbar">
                <div className="header-container">
                    <Link to="/" className="logo">
                        <img src={LogoSvg} alt="Logo" />
                    </Link>

                    <div className="hamburger" id="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        {!menuOpen && <img src={menu2} className="menu-icon" alt="menu2" />}
                        {menuOpen && <img src={CloseIcon} alt="close-icon" className="close-icon" />}
                    </div>

                    <nav className={`nav ${menuOpen ? "open" : ""}`} id="main-menu">

                        <img className="dsad" src={dsad} alt="dsad" />

                        <div className="for-mobile-menu position-relative">
                            <Link to="/" className="mobile-logo">
                                <img src={LogoSvg} alt="Logo" />
                            </Link>
                            <ul className="menu">
                                {menuItems.map((item, index) => (
                                    <li key={index} className="dropdown">
                                        <button className={`dropdown-btn ${isParentActive(item.children) ? "active" : ""}`} onClick={() => toggleDropdown(index)}>
                                            {item.label}
                                            <img src={DropdownArrow} alt="dropdown-arrow" />
                                            <span className="dots-circle"></span>
                                        </button>
                                        <ul className={`submenu ${openDropdown === index ? "open" : ""}`}>
                                            {item.children.map((sub, i) => (
                                                <li key={i}>
                                                    <Link to={sub.link}
                                                        className={location.pathname === sub.link ? "active" : ""}
                                                        onClick={() => setMenuOpen(false)}
                                                    >
                                                        {sub.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                                <li>
                                    <Link
                                        to="/Contact"
                                        className={location.pathname === "/Contact" ? "active" : ""}
                                        onClick={() => setMenuOpen(false)}>
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="nav-actions">
                            <div className="call">
                                <div className="headphone-main">
                                    <img src={headphoneIcon} alt="headphone-icon" />
                                </div>
                                <div className="need-help-main">
                                    <p>Need Help Now?</p>
                                    <a href="tel:+12483578866">+1 (248) 357 8866</a>
                                </div>
                            </div>
                            <Link to="/GetQuote" className="btn-quote get-quote-btn">Get A Quote
                                <img src={CrossArrow} alt="cross-arrow" />
                            </Link>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header