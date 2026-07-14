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
            label: "Home",
            children: [
                { label: "Home Slider", link: "/" },
                { label: "Home Video", link: "/HomeVideo" },
                { label: "Home Solid", link: "/HomeSolid" },
            ],
        },
        {
            label: "Pages",
            children: [
                { label: "About Us", link: "/About" },
                { label: "Our Team", link: "/Team" },
                { label: "Team Details", link: "/TeamDetails" },
                { label: "Pricing Plan", link: "/PricingPlan" },
                { label: "Our Clients", link: "/OurClients" },
                { label: "Testimonials", link: "/TestimonialsPage" },
                { label: "FAQs", link: "/Faq" },
                { label: "Get Your Quote", link: "/GetQuote" },
                { label: "404 Page", link: "/NotFound" },
            ],
        },
        {
            label: "Services",
            children: [
                { label: "Services", link: "/Services" },
                { label: "House Cleaning", link: "/HouseCleaning" },
                { label: "Kitchen Cleaning", link: "/KitchenCleaning" },
                { label: "Office Cleaning", link: "/OfficeCleaning" },
                { label: "Window Cleaning", link: "/WindowCleaning" },
                { label: "Corporate Cleaning", link: "/CorporateCleaning" },
                { label: "Carpet Cleaning", link: "/CarpetCleaning" },
            ],
        },
        {
            label: "Projects",
            children: [
                { label: "Project 1", link: "/Project1" },
                { label: "Project 2", link: "/Project2" },
                { label: "Project 3", link: "/Project3" },
                { label: "Single Project 1", link: "/Project1Single" },
                { label: "Single Project 2", link: "/Project2Single" },
                { label: "Single Project 3", link: "/Project3Single" },
            ],
        },
        {
            label: "Blogs",
            children: [
                { label: "Blog 1", link: "/OurBlog" },
                { label: "Blog 2", link: "/Blog2" },
                { label: "Blog 3", link: "/Blog3" },
                { label: "Blog Details 1", link: "/BlogDetails1" },
                { label: "Blog Details 2", link: "/BlogDetails2" },
                { label: "Blog Details 3", link: "/BlogDetails3" },
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