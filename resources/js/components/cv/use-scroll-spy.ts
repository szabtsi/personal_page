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

        if (container) {
            container.scrollTo({
                top: index * container.clientHeight,
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
        const container = scrollRef.current;

        if (!container) {
            return;
        }

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
            { threshold, root: container },
        );

        container
            .querySelectorAll('[data-section-index]')
            .forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [threshold]);

    return { scrollRef, activeSection, navTo };
}
