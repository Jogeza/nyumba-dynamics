import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function SmoothScrollToTop() {
    const { pathname, search, key } = useLocation();

    useEffect(() => {
        const previousRestoration = window.history.scrollRestoration;
        window.history.scrollRestoration = "manual";

        return () => {
            window.history.scrollRestoration = previousRestoration;
        };
    }, []);

    useLayoutEffect(() => {
        const resetPosition = () => {
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        };

        resetPosition();
        let secondFrame = 0;
        const frame = window.requestAnimationFrame(() => {
            resetPosition();
            secondFrame = window.requestAnimationFrame(resetPosition);
        });

        return () => {
            window.cancelAnimationFrame(frame);
            if (secondFrame) window.cancelAnimationFrame(secondFrame);
        };
    }, [pathname, search, key]);

    return null;
}
