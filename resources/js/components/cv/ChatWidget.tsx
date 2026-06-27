import { useEffect, useRef, useState, useSyncExternalStore } from 'react';

import { useChat } from '@/components/cv/use-chat';
import { cn } from '@/lib/utils';
import { privacy } from '@/routes';

const CONSENT_KEY = 'chat-consent';

// Consent lives in localStorage and is read via useSyncExternalStore so it
// stays SSR-safe (server snapshot is always false) and survives reloads.
const consentListeners = new Set<() => void>();

function subscribeConsent(listener: () => void): () => void {
    consentListeners.add(listener);

    return () => {
        consentListeners.delete(listener);
    };
}

function readConsent(): boolean {
    return localStorage.getItem(CONSENT_KEY) === '1';
}

function writeConsent(value: boolean): void {
    if (value) {
        localStorage.setItem(CONSENT_KEY, '1');
    } else {
        localStorage.removeItem(CONSENT_KEY);
    }

    consentListeners.forEach((listener) => listener());
}

const SUGGESTIONS = [
    'Milyen technológiákkal dolgozik?',
    'Mik a legfontosabb projektjei?',
    'Elérhető új lehetőségekre?',
];

function LauncherIcon({ open }: { open: boolean }) {
    return (
        <svg
            viewBox="0 0 24 24"
            className="size-[22px]"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.7}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
            ) : (
                <path d="M4 5.5h16v10H9l-4 3.5v-3.5H4z" />
            )}
        </svg>
    );
}

function SendIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            className="size-[18px]"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.7}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 12l16-7-7 16-2.5-6.5z" />
        </svg>
    );
}

function PrivacyLink({ children }: { children: React.ReactNode }) {
    return (
        <a
            href={privacy.url()}
            target="_blank"
            rel="noreferrer"
            className="text-ink underline decoration-tan underline-offset-2"
        >
            {children}
        </a>
    );
}

export default function ChatWidget() {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');
    const [consentChecked, setConsentChecked] = useState(false);
    const accepted = useSyncExternalStore(
        subscribeConsent,
        readConsent,
        () => false,
    );
    const { messages, isStreaming, error, send } = useChat();
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        scrollRef.current?.scrollTo({
            top: scrollRef.current.scrollHeight,
            behavior: 'smooth',
        });
    }, [messages, open]);

    function submit(text: string) {
        if (!accepted) {
            return;
        }

        send(text);
        setInput('');
    }

    function onSubmit(event: React.FormEvent) {
        event.preventDefault();
        submit(input);
    }

    return (
        <>
            <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                aria-label={open ? 'Csevegő bezárása' : 'Kérdezz Szabolcsról'}
                aria-expanded={open}
                className="fixed right-[clamp(16px,4vw,32px)] bottom-[clamp(16px,4vw,32px)] z-50 flex size-[56px] items-center justify-center rounded-full bg-ink text-light shadow-[0_8px_28px_rgba(44,44,44,0.28)] transition-transform duration-200 hover:scale-105"
            >
                <LauncherIcon open={open} />
            </button>

            <div
                className={cn(
                    'fixed z-50 flex flex-col overflow-hidden bg-warm-alt shadow-[0_16px_48px_rgba(44,44,44,0.22)] transition-[opacity,transform] duration-300',
                    'inset-x-0 bottom-0 h-[80dvh] rounded-t-[20px]',
                    'sm:inset-x-auto sm:right-[clamp(16px,4vw,32px)] sm:bottom-[84px] sm:h-[min(560px,70dvh)] sm:w-[400px] sm:rounded-[20px]',
                    open
                        ? 'pointer-events-auto translate-y-0 opacity-100'
                        : 'pointer-events-none translate-y-4 opacity-0',
                )}
                role="dialog"
                aria-label="Csevegő Felföldi Szabolcsról"
                aria-hidden={!open}
            >
                <header className="flex items-start justify-between gap-3 border-b border-divider px-[20px] py-[16px]">
                    <div className="flex flex-col gap-[2px]">
                        <span className="text-label font-medium tracking-[0.14em] text-tan uppercase">
                            AI asszisztens
                        </span>
                        <h2 className="text-title font-medium tracking-[-0.01em] text-ink">
                            Kérdezz Rólam
                        </h2>
                    </div>
                    <button
                        type="button"
                        onClick={() => setOpen(false)}
                        aria-label="Bezárás"
                        className="-mr-1 shrink-0 p-1 text-muted transition-colors hover:text-ink"
                    >
                        <LauncherIcon open />
                    </button>
                </header>

                <div
                    ref={scrollRef}
                    className="flex flex-1 [scrollbar-width:thin] flex-col gap-[14px] overflow-y-auto px-[20px] py-[18px] [-ms-overflow-style:none] [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-divider"
                >
                    {messages.length === 0 ? (
                        <div className="flex flex-col gap-[14px]">
                            <p className="text-[15px] leading-[1.5] text-copy">
                                Igen, nem vicc, egy chatbot. Kérdezz rólam bátran.
                            </p>

                            {accepted ? (
                                <div className="flex flex-col gap-[8px]">
                                    {SUGGESTIONS.map((suggestion) => (
                                        <button
                                            key={suggestion}
                                            type="button"
                                            onClick={() => submit(suggestion)}
                                            className="rounded-[12px] border border-divider bg-warm px-[14px] py-[10px] text-left text-[14px] text-ink transition-colors hover:border-tan"
                                        >
                                            {suggestion}
                                        </button>
                                    ))}
                                </div>
                            ) : (
                                <div className="flex flex-col gap-[12px]">
                                    <label className="flex items-start gap-[10px] rounded-[12px] border border-divider bg-warm px-[14px] py-[12px] text-[13px] leading-[1.5] text-copy">
                                        <input
                                            type="checkbox"
                                            checked={consentChecked}
                                            onChange={(event) =>
                                                setConsentChecked(
                                                    event.target.checked,
                                                )
                                            }
                                            className="mt-[2px] size-[16px] shrink-0 accent-tan"
                                        />
                                        <span>
                                            Elfogadom az{' '}
                                            <PrivacyLink>
                                                adatkezelési tájékoztatót
                                            </PrivacyLink>
                                            . Az üzeneteimet a Google Gemini
                                            dolgozza fel a válaszhoz; a
                                            beszélgetést nem tároljuk.
                                        </span>
                                    </label>
                                    <button
                                        type="button"
                                        disabled={!consentChecked}
                                        onClick={() => writeConsent(true)}
                                        className="self-start rounded-[12px] bg-ink px-[18px] py-[10px] text-[14px] font-medium text-light transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
                                    >
                                        Beszélgetés indítása
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        messages.map((message, index) => (
                            <div
                                key={index}
                                className={cn(
                                    'max-w-[85%] rounded-[14px] px-[14px] py-[10px] text-[15px] leading-[1.5] whitespace-pre-wrap',
                                    message.role === 'user'
                                        ? 'self-end bg-ink text-light'
                                        : 'self-start bg-warm text-copy',
                                )}
                            >
                                {message.content === '' && isStreaming ? (
                                    <span className="inline-flex gap-[4px] py-[2px]">
                                        <span className="size-[6px] animate-pulse rounded-full bg-muted" />
                                        <span className="size-[6px] animate-pulse rounded-full bg-muted [animation-delay:0.2s]" />
                                        <span className="size-[6px] animate-pulse rounded-full bg-muted [animation-delay:0.4s]" />
                                    </span>
                                ) : (
                                    message.content
                                )}
                            </div>
                        ))
                    )}

                    {error !== null && (
                        <p className="self-start text-[13px] text-copy italic">
                            {error}
                        </p>
                    )}
                </div>

                <form
                    onSubmit={onSubmit}
                    className="flex items-center gap-[10px] border-t border-divider px-[16px] py-[14px]"
                >
                    <input
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                        placeholder={
                            accepted
                                ? 'Írd ide a kérdésed…'
                                : 'Fogadd el a tájékoztatót a kezdéshez…'
                        }
                        aria-label="Üzenet"
                        maxLength={1000}
                        disabled={!accepted}
                        className="min-w-0 flex-1 bg-transparent text-[15px] text-ink placeholder:text-muted focus:outline-none disabled:cursor-not-allowed"
                    />
                    <button
                        type="submit"
                        disabled={
                            !accepted || input.trim() === '' || isStreaming
                        }
                        aria-label="Küldés"
                        className="flex size-[38px] shrink-0 items-center justify-center rounded-full bg-tan text-light transition-opacity disabled:opacity-40"
                    >
                        <SendIcon />
                    </button>
                </form>

                <p className="border-t border-divider px-[16px] py-[8px] text-[11px] leading-[1.4] text-muted">
                    A válaszokat a Google Gemini készíti.{' '}
                    <PrivacyLink>Adatkezelési tájékoztató</PrivacyLink>
                </p>
            </div>
        </>
    );
}
