import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type SectionProps = {
    index: number;
    className?: string;
    children: ReactNode;
};

/**
 * Full-viewport snap section with the shared base layout (centered flex,
 * responsive horizontal padding). Background and any per-section overrides
 * are passed through `className`.
 */
export default function Section({ index, className, children }: SectionProps) {
    return (
        <section
            data-section-index={index}
            className={cn(
                'flex h-screen snap-start items-center px-[clamp(40px,10vw,140px)] py-[100px]',
                className,
            )}
        >
            {children}
        </section>
    );
}
