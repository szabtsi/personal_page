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
                'flex min-h-dvh items-center px-[clamp(24px,10vw,140px)] pt-[clamp(72px,11vh,88px)] pb-[clamp(44px,7vh,64px)] md:h-dvh md:snap-start md:overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
                className,
            )}
        >
            {children}
        </section>
    );
}
