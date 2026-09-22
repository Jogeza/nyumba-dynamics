import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import LogoSvg from "../assets/images/svg/logo.svg";
import menu2 from "../assets/images/svg/menu2.svg";
import CloseIcon from "../assets/images/svg/close-icon.svg";
import DropdownArrow from "../assets/images/svg/dropdown-arrow.svg";
import CrossArrow from "../assets/images/svg/cross-arrow.svg";


interface MenuChild {
    label: string;
    link: string;
}


const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<number | null>(null);
    const [scrolled, setScrolled] = useState(false);

    const location = useLocation();

    useEffect(() => {
        const updateHeader = () => setScrolled(window.scrollY > 24);
        updateHeader();
        window.addEventListener('scroll', updateHeader, { passive: true });
        return () => window.removeEventListener('scroll', updateHeader);
    }, []);

    useEffect(() => {
        setMenuOpen(false);
        setOpenDropdown(null);
    }, [location.pathname, location.search]);


    const toggleDropdown = (index:number) => {
        setOpenDropdown(
            openDropdown === index ? null : index
        );
    };


    const isParentActive = (children:MenuChild[]) => {

        return children.some(
            child => child.link === location.pathname
        );

    };



    const menuItems = [

        {
            label:"Services",
            children:[
                {
                    label:"All Services",
                    link:"/services"
                },
                {
                    label:"Construction & Repair",
                    link:"/services"
                },
                {
                    label:"Safety & Maintenance",
                    link:"/services"
                },
                {
                    label:"Smart Home Solutions",
                    link:"/smart-home"
                },
                {
                    label:"Lifestyle Enhancements",
                    link:"/services"
                }
            ]
        },


        {
            label:"Projects",
            children:[
                {
                    label:"Residential Projects",
                    link:"/properties"
                },
                {
                    label:"Commercial Projects",
                    link:"/properties"
                },
                {
                    label:"Smart Home Installations",
                    link:"/properties"
                }
            ]
        },


        {
            label:"Company",
            children:[
                {
                    label:"About Nyumba Dynamics",
                    link:"/about"
                },
                {
                    label:"Request a Quote",
                    link:"/consultation"
                },
                {
                    label:"Join Nyumba as a Pro",
                    link:"/contact?type=partner"
                }
            ]
        },


        {
            label:"Insights",
            children:[
                {
                    label:"Home Maintenance Tips",
                    link:"/blog"
                },
                {
                    label:"Smart Living Guides",
                    link:"/blog"
                }
            ]
        }

    ];




    return (

        <>


            {
                menuOpen &&

                <div
                    className="overlay active"
                    onClick={() => setMenuOpen(false)}
                />

            }




            <header 
                className={`header ${scrolled ? "header--scrolled" : ""}`}
                id="top-navbar"
            >



                <div className="header-container">



                    <Link
                        to="/"
                        className="logo nyumba-logo"
                    >

                        <img
                            src={LogoSvg}
                            alt="Nyumba Dynamics - Home and Enterprise Maintenance Services"
                        />

                    </Link>




                    <button
                        type="button"
                        className="hamburger"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-expanded={menuOpen}
                        aria-controls="primary-navigation"
                        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                    >


                        {

                            !menuOpen &&

                            <img
                                src={menu2}
                                className="menu-icon"
                                alt=""
                            />

                        }



                        {

                            menuOpen &&

                            <img
                                src={CloseIcon}
                                className="close-icon"
                                alt=""
                            />

                        }


                    </button>







                    <nav
                        id="primary-navigation"
                        className={`nav ${menuOpen ? "open" : ""}`}
                        aria-label="Primary navigation"
                    >




                        <div className="for-mobile-menu position-relative">



                            <Link
                                to="/"
                                className="mobile-logo nyumba-mobile-logo"
                            >

                                <img
                                    src={LogoSvg}
                                    alt="Nyumba Dynamics Logo"
                                />


                            </Link>





                            <ul className="menu">


                            <li className="dropdown">
                                <Link
                                    to="/"
                                    className={`dropdown-btn ${location.pathname === "/" ? "active" : ""}`}
                                >
                                    Home
                                </Link>
                            </li>


                            {

                                menuItems.map((item,index)=>(


                                    <li
                                        key={index}
                                        className="dropdown"
                                    >




                                        <button
                                            type="button"
                                            className={
                                                `dropdown-btn ${
                                                    isParentActive(item.children)
                                                    ? "active"
                                                    :""
                                                }`
                                            }

                                            onClick={() =>
                                                toggleDropdown(index)
                                            }
                                            aria-expanded={openDropdown === index}
                                        >


                                            {item.label}



                                            <img
                                                src={DropdownArrow}
                                                alt=""
                                            />



                                            <span className="dots-circle"></span>



                                        </button>





                                        <ul
                                            className={
                                                `submenu ${
                                                    openDropdown === index
                                                    ? "open"
                                                    :""
                                                }`
                                            }
                                        >



                                            {

                                                item.children.map(
                                                    (sub,i)=>(


                                                        <li
                                                            key={i}
                                                        >


                                                            <Link

                                                                to={sub.link}

                                                                className={
                                                                    location.pathname === sub.link
                                                                    ?"active"
                                                                    :""
                                                                }


                                                                onClick={() =>
                                                                    setMenuOpen(false)
                                                                }

                                                            >

                                                                {sub.label}

                                                            </Link>


                                                        </li>


                                                    )

                                                )

                                            }



                                        </ul>




                                    </li>


                                ))

                            }



                                <li>

                                    <Link
                                        to="/contact"
                                        onClick={() =>
                                            setMenuOpen(false)
                                        }
                                    >

                                        Contact

                                    </Link>


                                </li>


                            </ul>

                            <Link
                                to="/contact?type=partner"
                                className="mobile-join-pro"
                                onClick={() => setMenuOpen(false)}
                            >
                                Join Nyumba as a Pro
                            </Link>


                        </div>








                        <div className="nav-actions">

                            <Link
                                to="/contact?type=partner"
                                className="join-pro-cta"
                            >
                                Join Nyumba as a Pro
                            </Link>







                            <Link
                                to="/consultation"
                                className="btn-quote get-quote-btn"
                            >


                                Get Free Quote



                                <img
                                    src={CrossArrow}
                                    alt="Arrow"
                                />


                            </Link>





                        </div>





                    </nav>





                </div>



            </header>




        </>

    );

};


export default Header;
