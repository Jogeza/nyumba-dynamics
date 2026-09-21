import { Link, useLocation } from "react-router-dom";
import whatsapp from "../assets/images/svg/whatsapp.svg";

// App-style bottom navigation for mobile only (see media_query.css for the
// breakpoint that shows/hides this bar). Priority order follows the brief:
// Home, Services, Request, Smart Home Solutions, WhatsApp.

const MobileBottomNav = () => {

    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    const navItems = [
        {
            key: "home",
            label: "Home",
            to: "/",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 11l9-8 9 8" /><path d="M5 10v10h14V10" /><path d="M9 20v-6h6v6" />
                </svg>
            )
        },
        {
            key: "services",
            label: "Services",
            to: "/services",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.7 6.3a4 4 0 1 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.8 2.8-2-2z" />
                </svg>
            )
        },
        {
            key: "request",
            label: "Request",
            to: "/consultation",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 11l3 3L22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
            )
        },
        {
            key: "smart-home",
            label: "Smart Home",
            to: "/smart-home",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 11l9-8 9 8" />
                    <path d="M5 10v10a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V10" />
                    <circle cx="12" cy="14" r="1.2" fill="currentColor" stroke="none" />
                </svg>
            )
        }
    ];

    return (

        <nav className="mobile-bottom-nav" aria-label="Quick navigation">

            {
                navItems.map(item => (

                    <Link
                        key={item.key}
                        to={item.to}
                        className={`mobile-bottom-nav-item ${isActive(item.to) ? "active" : ""}`}
                        aria-current={isActive(item.to) ? "page" : undefined}
                    >

                        <span className="mobile-bottom-nav-icon">
                            {item.icon}
                        </span>

                        <span className="mobile-bottom-nav-label">
                            {item.label}
                        </span>

                    </Link>

                ))
            }

            <a
                href="https://wa.me/256761648679"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-bottom-nav-item mobile-bottom-nav-whatsapp"
            >

                <span className="mobile-bottom-nav-icon">
                    <img src={whatsapp} alt="" />
                </span>

                <span className="mobile-bottom-nav-label">
                    WhatsApp
                </span>

            </a>

        </nav>

    );

};


export default MobileBottomNav;
