import { Link, useLocation } from "react-router-dom";

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
                    <svg viewBox="0 0 32 32" width="22" height="22" fill="currentColor" aria-hidden="true">
                        <path d="M16.04 3C8.86 3 3 8.8 3 15.94c0 2.52.74 4.98 2.12 7.08L3.73 28l5.12-1.34a13.1 13.1 0 0 0 7.18 2.05h.01C23.22 28.71 29 22.9 29 15.76 29 8.62 23.22 3 16.04 3Zm7.62 18.28c-.32.9-1.88 1.72-2.6 1.82-.66.1-1.5.14-2.42-.15-.56-.18-1.28-.42-2.2-.82-3.86-1.66-6.38-5.54-6.58-5.8-.2-.26-1.57-2.08-1.57-3.98 0-1.9.99-2.83 1.34-3.22.35-.39.77-.49 1.03-.49h.74c.24 0 .56-.09.88.67.32.78 1.1 2.68 1.2 2.88.1.19.16.42.03.68-.13.26-.2.42-.39.65-.2.23-.41.51-.58.68-.2.2-.4.41-.17.8.23.39 1.02 1.67 2.18 2.7 1.5 1.33 2.76 1.74 3.15 1.94.39.2.62.16.84-.1.23-.26.97-1.13 1.23-1.52.26-.39.52-.32.87-.19.36.13 2.26 1.06 2.65 1.26.39.2.65.29.74.45.1.16.1.94-.22 1.84Z" />
                    </svg>
                </span>

                <span className="mobile-bottom-nav-label">
                    WhatsApp
                </span>

            </a>

        </nav>

    );

};


export default MobileBottomNav;
