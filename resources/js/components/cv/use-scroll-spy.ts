import { useEffect, useRef, useState } from 'react';

/**
 * Tracks which full-viewport section is in view inside a snap-scroll container
 * and exposes a smooth programmatic scroll. Sections must be tagged with a
 * `data-section-index` attribute.
 */
export function useScrollSpy(threshold = 0.55) {
    const [activeSection, setActiveSection] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    const navTo = (index: number) => {
        const container = scrollRef.current;

        container
            ?.querySelector(`[data-section-index="${index}"]`)
            ?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const container = scrollRef.current;

        if (!container) {
            return;
        }

        const desktop = window.matchMedia('(min-width: 768px)');

        const observe = () => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            const index = parseInt(
                                (entry.target as HTMLElement).dataset
                                    .sectionIndex ?? '',
                                10,
                            );

                            if (!isNaN(index)) {
                                setActiveSection(index);
                            }
                        }
                    });
                },
                // On desktop the container itself scrolls; on mobile the
                // document scrolls, so observe against the viewport.
                { threshold, root: desktop.matches ? container : null },
            );

            container
                .querySelectorAll('[data-section-index]')
                .forEach((el) => observer.observe(el));

            return observer;
        };

        let observer = observe();

        const onBreakpointChange = () => {
            observer.disconnect();
            observer = observe();
        };

        desktop.addEventListener('change', onBreakpointChange);

        return () => {
            observer.disconnect();
            desktop.removeEventListener('change', onBreakpointChange);
        };
    }, [threshold]);

    return { scrollRef, activeSection, navTo };
}
