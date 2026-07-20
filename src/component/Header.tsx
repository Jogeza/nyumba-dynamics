import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import LogoSvg from "../assets/images/svg/nyumba-dynamics-logo.svg";
import menu2 from "../assets/images/svg/menu2.svg";
import CloseIcon from "../assets/images/svg/close-icon.svg";
import DropdownArrow from "../assets/images/svg/dropdown-arrow.svg";
import headphoneIcon from "../assets/images/svg/headphone-icon.svg";
import CrossArrow from "../assets/images/svg/cross-arrow.svg";


interface MenuChild {
    label:string;
    link:string;
}


interface MenuItem {
    label:string;
    children:MenuChild[];
}



const Header = () => {


    const [menuOpen,setMenuOpen] = useState(false);

    const [openDropdown,setOpenDropdown] = useState<number | null>(null);


    const location = useLocation();



    useEffect(()=>{

        setMenuOpen(false);
        setOpenDropdown(null);

    },[location.pathname]);





    const toggleDropdown = (index:number)=>{

        setOpenDropdown(

            openDropdown === index
            ? null
            : index

        );

    };





    const isActive = (children:MenuChild[])=>{

        return children.some(

            child => location.pathname === child.link

        );

    };





    const menuItems:MenuItem[] = [


        {
            label:"Services",

            children:[

                {
                    label:"All Services",
                    link:"/services"
                },

                {
                    label:"Electrical Services",
                    link:"/services/electrical"
                },

                {
                    label:"Plumbing Services",
                    link:"/services/plumbing"
                },

                {
                    label:"Masonry Works",
                    link:"/services/masonry"
                },

                {
                    label:"Carpentry & Joinery",
                    link:"/services/carpentry"
                },

                {
                    label:"Welding & Fabrication",
                    link:"/services/welding"
                },

                {
                    label:"Painting & Finishing",
                    link:"/services/painting"
                }

            ]

        },



        {

            label:"Projects",

            children:[

                {
                    label:"Residential Projects",
                    link:"/projects"
                },

                {
                    label:"Commercial Projects",
                    link:"/projects"
                },

                {
                    label:"Smart Home Projects",
                    link:"/projects"
                }

            ]

        },



        {

            label:"Company",

            children:[

                {
                    label:"About Us",
                    link:"/about"
                },

                {
                    label:"Our Team",
                    link:"/team"
                },

                {
                    label:"Request Quote",
                    link:"/consultation"
                }

            ]

        },


        {

            label:"Insights",

            children:[

                {
                    label:"Home Tips",
                    link:"/blog"
                },

                {
                    label:"Latest News",
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

                    onClick={()=>setMenuOpen(false)}

                />

            }





            <header

                className="header"

                id="top-navbar"

            >



                <div className="header-container">



                    <Link

                        to="/"

                        className="logo nyumba-logo"

                    >

                        <img

                            src={LogoSvg}

                            alt="Nyumba Dynamics"

                        />

                    </Link>






                    <button

                        type="button"

                        className="hamburger"

                        aria-label="Toggle Menu"

                        onClick={()=>setMenuOpen(!menuOpen)}

                    >


                        {

                            menuOpen ?

                            <img

                                src={CloseIcon}

                                alt="Close"

                            />

                            :

                            <img

                                src={menu2}

                                alt="Menu"

                            />

                        }


                    </button>







                    <nav

                        className={`nav ${menuOpen ? "open":""}`}

                    >



                        <div className="for-mobile-menu">





                            <Link

                                to="/"

                                className="mobile-logo"

                            >

                                <img

                                    src={LogoSvg}

                                    alt="Nyumba Dynamics"

                                />

                            </Link>







                            <ul className="menu">


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
                                                        
                                                    isActive(item.children)

                                                    ?"active"

                                                    :""

                                                    }`

                                                }

                                                onClick={()=>toggleDropdown(index)}

                                            >


                                                {item.label}


                                                <img

                                                    src={DropdownArrow}

                                                    alt=""

                                                />


                                            </button>







                                            <ul

                                                className={

                                                    `submenu ${
                                                        
                                                    openDropdown===index

                                                    ?"open"

                                                    :""

                                                    }`

                                                }

                                            >


                                                {


                                                    item.children.map((sub,i)=>(


                                                        <li key={i}>


                                                            <Link

                                                                to={sub.link}

                                                                className={

                                                                    location.pathname===sub.link

                                                                    ?"active"

                                                                    :""

                                                                }

                                                            >

                                                                {sub.label}


                                                            </Link>



                                                        </li>


                                                    ))


                                                }


                                            </ul>



                                        </li>


                                    ))


                                }




                                <li>


                                    <Link to="/contact">

                                        Contact

                                    </Link>


                                </li>



                            </ul>




                        </div>









                        <div className="nav-actions">





                            <div className="call">



                                <div className="headphone-main">

                                    <img

                                        src={headphoneIcon}

                                        alt="Phone"

                                    />

                                </div>





                                <div className="need-help-main">


                                    <p>

                                        Talk To An Expert

                                    </p>


                                    <a href="tel:+256751353757">

                                        +256 7513 53757

                                    </a>


                                </div>



                            </div>







                            <Link

                                to="/consultation"

                                className="btn-quote get-quote-btn"

                            >

                                Request Consultation


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