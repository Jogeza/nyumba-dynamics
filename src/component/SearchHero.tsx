import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import servicesData from '../data/servicesData.json';
import { siteImages } from '../data/siteImages.ts';
import { gsap } from 'gsap';

const POPULAR_CHIPS = [
    { label: 'Electrical', serviceId: 'electrical-services' },
    { label: 'Plumbing', serviceId: 'plumbing-services' },
    { label: 'Smart Homes', serviceId: 'smart-homes' },
    { label: 'CCTV Installation', serviceId: 'cctv-installation' },
    { label: 'Preventive Maintenance', serviceId: 'preventive-maintenance' },
    { label: 'Air Conditioning', serviceId: 'air-conditioning' },
    { label: 'Swimming Pool', serviceId: 'swimming-pool-maintenance' },
    { label: 'Masonry', serviceId: 'masonry-works' }
];

export const SearchHero: React.FC = () => {
    const [query, setQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [suggestions, setSuggestions] = useState<typeof servicesData>([]);
    const navigate = useNavigate();
    const wrapperRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        const context = gsap.context(() => {
            const media = gsap.matchMedia();
            media.add('(prefers-reduced-motion: no-preference)', () => {
                gsap.from('.v2-hero-tagline, .v2-hero-heading, .v2-hero-search-wrap, .v2-hero-chips', {
                    opacity: 0, y: 20, duration: 0.6, stagger: 0.1, ease: 'power3.out',
                });
            });
            return () => media.revert();
        }, heroRef);

        return () => context.revert();
    }, []);

    useEffect(() => {
        if (query.trim().length >= 2) {
            const q = query.toLowerCase();
            const matches = servicesData.filter(
                (s) =>
                    s.title.toLowerCase().includes(q) ||
                    s.desc.toLowerCase().includes(q) ||
                    s.category.toLowerCase().includes(q)
            ).slice(0, 6);
            setSuggestions(matches);
            setIsOpen(matches.length > 0);
        } else {
            setSuggestions([]);
            setIsOpen(false);
        }
    }, [query]);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelectService = (serviceId: string) => {
        navigate(`/consultation?service=${encodeURIComponent(serviceId)}`);
    };

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (suggestions.length > 0) {
            handleSelectService(suggestions[0].id);
        } else if (query.trim()) {
            navigate(`/consultation?service=${encodeURIComponent(query.trim())}`);
        }
    };

    return (
        <section ref={heroRef} className="v2-hero" aria-label="Find property and facility services in Kampala">
            <img
                src={siteImages.hero}
                alt="Nyumba Dynamics property engineering and facility management team at work"
                className="v2-hero-bg"
                loading="eager"
            />
            <div className="v2-hero-overlay" />
            <div className="container">
                <div className="v2-hero-inner">
                    <p className="v2-hero-tagline">Hire the right pros.</p>
                    <h1 className="v2-hero-heading">What do you need done on your property?</h1>

                    <div className="v2-hero-search-wrap" ref={wrapperRef}>
                        <form onSubmit={handleSearchSubmit} className="v2-search-input-wrap" role="search">
                            <svg
                                className="v2-search-icon"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                            <input
                                type="text"
                                className="v2-search-input"
                                placeholder="Try electrical, plumbing or smart home..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                aria-label="Search property engineering and maintenance services"
                                aria-autocomplete="list"
                            />
                            <button type="submit" className="v2-search-btn" aria-label="Find professional service">
                                Find Service
                            </button>
                        </form>

                        {isOpen && (
                            <ul className="v2-search-suggestions" role="listbox">
                                {suggestions.map((s) => (
                                    <li key={s.slug} role="option" aria-selected={false}>
                                        <button
                                            type="button"
                                            className="v2-search-suggestion-item"
                                            onClick={() => handleSelectService(s.slug)}
                                        >
                                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                            <span>{s.title}</span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className="v2-hero-chips" aria-label="Popular services">
                        <span className="v2-chips-label">Popular:</span>
                        {POPULAR_CHIPS.map((chip) => (
                            <button
                                key={chip.serviceId}
                                type="button"
                                className="v2-chip"
                                onClick={() => handleSelectService(chip.serviceId)}
                            >
                                {chip.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SearchHero;
