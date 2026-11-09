import Section from '@/components/cv/Section';

export default function About() {
    return (
        <Section index={1} className="bg-warm-alt">
            <div className="flex max-w-[740px] flex-col gap-[28px]">
                <h2 className="text-h2 leading-[1.1] font-medium tracking-[-0.02em] text-ink">
                    Rólam
                </h2>
                <p className="text-body leading-[1.72] font-light [text-wrap:pretty] text-copy">
                    Fullstack webfejlesztő vagyok, 2022 óta dolgozom a
                    szakmában, elsősorban PHP/Laravel és React alapokon. A
                    Wenerate Kft.-nél egy energiamenedzsment szoftvert
                    fejlesztek, ahol a funkciók megvalósítása mellett a
                    fejlesztői környezet, a kódminőség és a csapat
                    munkafolyamatainak alakításában is szerepet vállalok.
                </p>
                <p className="text-body leading-[1.72] font-light [text-wrap:pretty] text-copy">
                    Erősségem, hogy más szakterületek üzleti és mérnöki igényeit jól
                    karbantartható, tesztelt megoldásokká alakítom. A mindennapi
                    fejlesztésbe az AI coding agenteket is tudatosan beépítem.
                    Eredetileg reál területen – geológusnak (BSc) – tanultam,
                    ami erős analitikus gondolkodást és rendszerszemléletet
                    adott a programozáshoz.
                </p>
            </div>
        </Section>
    );
}
