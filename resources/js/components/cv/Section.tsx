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
                'flex h-dvh snap-start items-center overflow-y-auto px-[clamp(24px,10vw,140px)] py-[clamp(80px,14vh,100px)] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
                className,
            )}
        >
            {children}
        </section>
    );
}
