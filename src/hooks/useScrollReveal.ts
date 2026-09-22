import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HEADING_SELECTOR = 'main h1:not(.v2-hero-heading), main h2, .heroSection h1';
const REVEAL_SELECTOR = '.fade_up, .fade_down, .fade_in, .zoom_in, .cap-text, .sec-sub-text, main .btn-quote, main .btn-quote-outline';
const CARD_SELECTOR = '.cleaning-card, .v2-service-card, .service-category-card, .blog-box-main, .trust-process-grid > div';

const splitHeading = (heading: HTMLElement) => {
    if (heading.dataset.wordReveal === 'true') return;
    const label = heading.textContent?.trim() || '';
    heading.dataset.wordReveal = 'true';
    heading.setAttribute('aria-label', label);
    heading.innerHTML = label.split(/\s+/).map((word) =>
        `<span class="reveal-word" aria-hidden="true"><span class="reveal-word-inner">${word}</span></span>`
    ).join(' ');
};

/**
 * Activates the site's fade_up / fade_down / fade_in / zoom_in reveal
 * classes as elements scroll into view. Re-runs on every route change
 * since React Router swaps page content without a full reload.
 */
const useScrollReveal = () => {
    const location = useLocation();

    useLayoutEffect(() => {
        const headings = gsap.utils.toArray<HTMLElement>(HEADING_SELECTOR);
        headings.forEach(splitHeading);
        const revealElements = gsap.utils.toArray<HTMLElement>(`${REVEAL_SELECTOR}, ${CARD_SELECTOR}`);
        revealElements.forEach((element) => element.setAttribute('data-reveal', ''));
        document.documentElement.classList.add('js-anim');

        const context = gsap.context(() => {
            const media = gsap.matchMedia();
            media.add('(prefers-reduced-motion: no-preference)', () => {
                headings.forEach((heading) => gsap.from(heading.querySelectorAll('.reveal-word-inner'), {
                    yPercent: 100, opacity: 0, duration: .8, stagger: .06, ease: 'power3.out',
                    scrollTrigger: { trigger: heading, start: 'top 85%', once: true },
                }));
                gsap.utils.toArray<HTMLElement>(REVEAL_SELECTOR).forEach((element) => {
                    if (element.closest('.v2-hero')) return;
                    gsap.from(element, { y: 20, opacity: 0, duration: .6, ease: 'power3.out',
                        scrollTrigger: { trigger: element, start: 'top 85%', once: true } });
                });
                gsap.utils.toArray<HTMLElement>(CARD_SELECTOR).forEach((card, index) => {
                    const image = card.querySelector('img');
                    gsap.from(card, { y: 20, opacity: 0, duration: .6, delay: (index % 3) * .08, ease: 'power3.out',
                        scrollTrigger: { trigger: card, start: 'top 85%', once: true } });
                    if (image) gsap.from(image, { scale: 1.06, duration: .8, ease: 'power3.out',
                        scrollTrigger: { trigger: card, start: 'top 85%', once: true } });
                });
            });
            media.add('(prefers-reduced-motion: reduce)', () => {
                gsap.set([...revealElements, ...headings], { clearProps: 'opacity,transform,visibility' });
            });
            return () => media.revert();
        });

        const refresh = () => ScrollTrigger.refresh();
        const imageListeners = Array.from(document.images).filter((image) => !image.complete);
        imageListeners.forEach((image) => image.addEventListener('load', refresh, { once: true }));
        window.addEventListener('load', refresh, { once: true });
        requestAnimationFrame(refresh);

        const failsafe = window.setTimeout(() => {
            gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
                if (element.getBoundingClientRect().top <= window.innerHeight) {
                    gsap.killTweensOf(element);
                    gsap.set(element, { opacity: 1, transform: 'none', visibility: 'visible', overwrite: true });
                    element.setAttribute('data-reveal-ready', 'true');
                }
            });
        }, 2000);

        return () => {
            window.clearTimeout(failsafe);
            window.removeEventListener('load', refresh);
            imageListeners.forEach((image) => image.removeEventListener('load', refresh));
            context.revert();
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            document.documentElement.classList.remove('js-anim');
        };
    }, [location.key, location.pathname]);
};

export default useScrollReveal;
