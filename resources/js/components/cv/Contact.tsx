import { CONTACTS } from '@/components/cv/data';
import type { ContactIconName } from '@/components/cv/data';
import Section from '@/components/cv/Section';

function ContactIcon({ name }: { name: ContactIconName }) {
    const className = 'size-[20px] shrink-0';

    if (name === 'mail') {
        return (
            <svg
                viewBox="0 0 24 24"
                className={className}
                fill="none"
                stroke="#C4A882"
                strokeWidth={1.6}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
                <path d="M3 6l9 6 9-6" />
            </svg>
        );
    }

    if (name === 'phone') {
        return (
            <svg
                viewBox="0 0 24 24"
                className={className}
                fill="none"
                stroke="#C4A882"
                strokeWidth={1.6}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.5 5.2 2 2 0 0 1 6.5 3z" />
            </svg>
        );
    }

    if (name === 'github') {
        return (
            <svg
                viewBox="0 0 24 24"
                className={className}
                fill="#C4A882"
                stroke="none"
            >
                <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85l-.01 2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
            </svg>
        );
    }

    return (
        <svg
            viewBox="0 0 24 24"
            className={className}
            fill="#C4A882"
            stroke="none"
        >
            <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85V21H9z" />
        </svg>
    );
}

export default function Contact() {
    return (
        <Section index={6} className="bg-warm">
            <div className="flex w-full max-w-[700px] flex-col">
                <h2 className="mb-[clamp(32px,6vh,52px)] text-h2 leading-[1.1] font-medium tracking-[-0.02em] text-ink">
                    Kapcsolat
                </h2>
                <div className="flex flex-col">
                    {CONTACTS.map((c) => (
                        <a
                            key={c.label}
                            href={c.href}
                            {...(c.external
                                ? { target: '_blank', rel: 'noreferrer' }
                                : {})}
                            className="flex items-center justify-between gap-[clamp(12px,3vw,20px)] border-b border-divider py-[clamp(18px,3vh,22px)] text-[15px] text-ink no-underline sm:text-body"
                        >
                            <span className="flex min-w-0 items-center gap-[clamp(10px,2vw,16px)] font-light">
                                <ContactIcon name={c.icon} />
                                <span className="truncate">{c.value}</span>
                            </span>
                            <span className="shrink-0 text-label font-medium tracking-[0.12em] text-tan uppercase">
                                {c.label}
                            </span>
                        </a>
                    ))}
                </div>
                <p className="mt-[clamp(32px,5vh,48px)] text-label font-light tracking-[0.04em] text-faint">
                    © 2026 Felföldi Szabolcs
                </p>
            </div>
        </Section>
    );
}
