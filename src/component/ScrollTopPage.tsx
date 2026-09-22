import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function SmoothScrollToTop() {
    const { pathname, search } = useLocation();

    useLayoutEffect(() => {
        const previousRestoration = window.history.scrollRestoration;
        window.history.scrollRestoration = "manual";

        // Reset before the new route paints. A second reset on the next frame
        // prevents late-loading route content from restoring the old position.
        window.scrollTo(0, 0);
        const frame = window.requestAnimationFrame(() => window.scrollTo(0, 0));

        return () => {
            window.cancelAnimationFrame(frame);
            window.history.scrollRestoration = previousRestoration;
        };
    }, [pathname, search]);

    return null;
}
