import { NAV_LABELS } from '@/components/cv/data';
import { cn } from '@/lib/utils';

type NavProps = {
    activeSection: number;
    onNavigate: (index: number) => void;
};

export default function Nav({ activeSection, onNavigate }: NavProps) {
    const onDark = activeSection === 2 || activeSection === 5;
    const textColor = onDark ? 'text-nav-dark' : 'text-ink';

    return (
        <nav className="pointer-events-none absolute inset-x-0 top-0 z-[200] flex items-center justify-between px-[clamp(24px,6vw,56px)] py-[clamp(18px,4vw,22px)]">
            <button
                type="button"
                onClick={() => onNavigate(0)}
                className={cn(
                    'pointer-events-auto cursor-pointer border-0 bg-transparent p-0 text-[15px] leading-none font-semibold tracking-[0.14em] transition-colors duration-[400ms]',
                    textColor,
                )}
            >
                FSZ
            </button>
            <div className="pointer-events-auto hidden items-center gap-[clamp(16px,2.4vw,32px)] sm:flex">
                {NAV_LABELS.map((label, i) => (
                    <button
                        key={label}
                        type="button"
                        onClick={() => onNavigate(i + 1)}
                        className={cn(
                            'cursor-pointer border-0 bg-transparent p-0 text-[13px] leading-none tracking-[0.12em] uppercase transition-[color,opacity] duration-300',
                            textColor,
                            activeSection === i + 1
                                ? 'opacity-100'
                                : 'opacity-[0.36]',
                        )}
                    >
                        {label}
                    </button>
                ))}
            </div>
        </nav>
    );
}
