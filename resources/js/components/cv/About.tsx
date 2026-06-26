import Section from '@/components/cv/Section';

export default function About() {
    return (
        <Section index={1} className="bg-warm-alt">
            <div className="flex max-w-[740px] flex-col gap-[28px]">
                <h2 className="text-h2 leading-[1.1] font-medium tracking-[-0.02em] text-ink">
                    Rólam
                </h2>
                <p className="text-body leading-[1.72] font-light [text-wrap:pretty] text-copy">
                    Gyerekkorom óta elhivatott vagyok az informatika iránt.
                    Tapasztalt fullstack webfejlesztőként az önálló tanulás
                    erejében és a folyamatos fejlődésben hiszek. Szakmai
                    alapjaimat a Webler Oktatóstúdió webfejlesztő kurzusán
                    fektettem le, majd 2023 januárjában csatlakoztam a Wenerate
                    Kft.-hez, ahol a gyors tanulási készségemnek köszönhetően
                    junior backend fejlesztőből rövid időn belül fullstack
                    fejlesztővé léptem elő.
                </p>
                <p className="text-body leading-[1.72] font-light [text-wrap:pretty] text-copy">
                    Munkám során magabiztosan mozgok mind a backend, mind a
                    frontend oldalon, és a mindennapi fejlesztésbe az AI-alapú
                    eszközöket is hatékonyan beépítem. Eredetileg reál területen
                    – labortechnikusnak és geológusnak (BSc) – tanultam, ami
                    kiváló analitikus gondolkodást és rendszerszemléletet adott
                    a programozáshoz.
                </p>
            </div>
        </Section>
    );
}
