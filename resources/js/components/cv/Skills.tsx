import { SKILL_GROUPS } from '@/components/cv/data';
import Section from '@/components/cv/Section';

export default function Skills() {
    return (
        <Section index={4} className="bg-warm-alt">
            <div className="flex w-full flex-col">
                <h2 className="mb-[clamp(32px,6vh,52px)] text-h2 leading-[1.1] font-medium tracking-[-0.02em] text-ink">
                    Készségek
                </h2>
                <div className="grid grid-cols-1 gap-[clamp(28px,4vw,60px)] sm:grid-cols-3">
                    {SKILL_GROUPS.map((group) => (
                        <div
                            key={group.label}
                            className="flex flex-col gap-[20px]"
                        >
                            <p className="text-label font-semibold tracking-[0.14em] text-muted uppercase">
                                {group.label}
                            </p>
                            <div className="flex flex-wrap gap-[8px]">
                                {group.items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-[2px] bg-skill-bg px-[15px] py-[7px] text-tag leading-none font-normal text-skill-text"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
