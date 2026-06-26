import Section from '@/components/cv/Section';
import { cn } from '@/lib/utils';

type EduEntryProps = {
    dates: [string, string];
    degree: string;
    institution: string;
    note?: string;
    className?: string;
};

function EduEntry({
    dates,
    degree,
    institution,
    note,
    className,
}: EduEntryProps) {
    return (
        <div
            className={cn(
                'flex items-start gap-[clamp(24px,5vw,72px)] border-b border-divider-edu pb-[44px]',
                className,
            )}
        >
            <div className="w-[130px] shrink-0">
                <p className="text-meta leading-[1.7] font-light text-edu-date">
                    {dates[0]}
                    <br />
                    {dates[1]}
                </p>
            </div>
            <div className="flex flex-1 flex-col gap-[4px]">
                <h3 className="text-title leading-[1.2] font-medium text-ink">
                    {degree}
                </h3>
                <p className="mt-[4px] text-body font-normal text-muted">
                    {institution}
                </p>
                {note && (
                    <p className="mt-[2px] text-meta font-light tracking-[0.04em] text-faint">
                        {note}
                    </p>
                )}
            </div>
        </div>
    );
}

export default function Education() {
    return (
        <Section index={3} className="bg-warm">
            <div className="flex w-full max-w-[740px] flex-col">
                <h2 className="mb-[52px] text-h2 leading-[1.1] font-medium tracking-[-0.02em] text-ink">
                    Tanulmányok
                </h2>

                <div className="flex flex-col">
                    <EduEntry
                        dates={['2022. szept.', '— 2023. jún.']}
                        degree="Webfejlesztő"
                        institution="Webler Oktatóstúdió"
                        note="OKJ: 55 213 02"
                        className="mb-[44px]"
                    />
                    <EduEntry
                        dates={['2013. szept.', '— 2016. jún.']}
                        degree="Földtudományi kutató"
                        institution="Debreceni Egyetem (BSc)"
                        className="mb-[48px]"
                    />
                </div>

                {/* Languages */}
                <div className="flex flex-col gap-[14px]">
                    <p className="text-label font-medium tracking-[0.14em] text-tan uppercase">
                        Nyelvismeret
                    </p>
                    <div className="flex items-center gap-[24px]">
                        <span className="text-body font-normal text-ink">
                            Magyar
                        </span>
                        <span className="block h-[14px] w-px bg-divider" />
                        <span className="text-body font-normal text-ink">
                            Angol
                        </span>
                    </div>
                </div>
            </div>
        </Section>
    );
}
