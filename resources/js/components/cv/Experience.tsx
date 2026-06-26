import type { ReactNode } from 'react';
import { PROJECT_LINKS } from '@/components/cv/data';
import Section from '@/components/cv/Section';

function Responsibility({ children }: { children: ReactNode }) {
    return (
        <div className="flex items-baseline gap-[14px]">
            <span className="shrink-0 text-body leading-[1.6] text-bullet">
                –
            </span>
            <span className="text-body leading-[1.6] font-light text-faint">
                {children}
            </span>
        </div>
    );
}

export default function Experience() {
    return (
        <Section index={2} className="bg-dark">
            <div className="flex w-full max-w-[800px] flex-col">
                <h2 className="mb-[52px] text-h2 leading-[1.1] font-medium tracking-[-0.02em] text-light">
                    Tapasztalat
                </h2>

                {/* Job 1 — current */}
                <div className="mb-[52px] flex gap-[28px]">
                    <div className="flex shrink-0 flex-col items-center pt-[6px]">
                        <div className="size-[7px] shrink-0 rounded-full bg-tan" />
                        <div className="mt-[10px] w-px flex-1 bg-line" />
                    </div>
                    <div className="flex flex-1 flex-col">
                        <div className="mb-[4px] flex items-baseline justify-between gap-[20px]">
                            <h3 className="text-title font-medium text-light">
                                Szoftverfejlesztő
                            </h3>
                            <span className="shrink-0 text-meta font-light whitespace-nowrap text-muted">
                                2023. jan. —
                            </span>
                        </div>
                        <p className="mb-[20px] text-meta font-normal tracking-[0.07em] text-muted uppercase">
                            Wenerate Kft.
                        </p>
                        <div className="flex flex-col gap-[10px]">
                            <Responsibility>
                                Új funkciók tervezése, fejlesztése és tesztelése
                            </Responsibility>
                            <Responsibility>
                                Meglévő funkciók refaktorálása
                            </Responsibility>
                            <Responsibility>
                                Részvétel termékfejlesztésben
                            </Responsibility>
                            <Responsibility>
                                Új kollégák betanítása, oktatása
                            </Responsibility>
                        </div>
                    </div>
                </div>

                {/* Job 2 — freelance */}
                <div className="flex gap-[28px]">
                    <div className="flex shrink-0 flex-col items-center pt-[6px]">
                        <div className="size-[7px] shrink-0 rounded-full border-[1.5px] border-tan" />
                    </div>
                    <div className="flex flex-1 flex-col">
                        <div className="mb-[4px] flex items-baseline justify-between gap-[20px]">
                            <h3 className="text-title font-medium text-light">
                                Szabadúszó fejlesztő
                            </h3>
                            <span className="shrink-0 text-meta font-light whitespace-nowrap text-muted">
                                2022 —
                            </span>
                        </div>
                        <p className="mb-[20px] text-meta font-normal tracking-[0.07em] text-muted uppercase">
                            Egyéni projektek
                        </p>
                        <div className="flex flex-col gap-[8px]">
                            {PROJECT_LINKS.map((url) => (
                                <a
                                    key={url}
                                    href={url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-body font-light tracking-[0.02em] text-proj no-underline"
                                >
                                    {url.replace('https://', '')}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
