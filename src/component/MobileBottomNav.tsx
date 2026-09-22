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
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3.5 10.8 12 3.75l8.5 7.05" />
                    <path d="M5.75 9.45v10.3h12.5V9.45" />
                    <path d="M9.25 19.75v-5.5h5.5v5.5" />
                </svg>
            )
        },
        {
            key: "services",
            label: "Services",
            to: "/services",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M14.1 6.2a4.15 4.15 0 0 0-5.25 5.25l-5.6 5.6a2.1 2.1 0 0 0 2.97 2.97l5.6-5.6a4.15 4.15 0 0 0 5.25-5.25l-2.2 2.2-2.25-.6-.6-2.25 2.08-2.32Z" />
                    <path d="m5.1 18.15.02.02" />
                </svg>
            )
        },
        {
            key: "request",
            label: "Request",
            to: "/consultation",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="4" y="3.75" width="16" height="16.5" rx="2.5" />
                    <path d="M8 8.25h8M8 12h3.25" />
                    <path d="m13.5 15.6 1.55 1.55L18.5 13.7" />
                </svg>
            )
        },
        {
            key: "smart-home",
            label: "Smart Home",
            to: "/smart-home",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3.5 10.75 12 3.7l8.5 7.05" />
                    <path d="M5.75 9.4v10.35h12.5V9.4" />
                    <path d="M8.6 13.05a4.8 4.8 0 0 1 6.8 0M10.4 14.95a2.25 2.25 0 0 1 3.2 0" />
                    <circle cx="12" cy="17.15" r=".65" fill="currentColor" stroke="none" />
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
