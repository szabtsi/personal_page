import { Head, Link } from '@inertiajs/react';
import type { ReactNode } from 'react';

const CONTROLLER_EMAIL = 'szabolcs.felfoldi10@gmail.com';
const LAST_UPDATED = '2026. június 27.';

function Block({ title, children }: { title: string; children: ReactNode }) {
    return (
        <section className="flex flex-col gap-[10px]">
            <h2 className="text-title font-medium tracking-[-0.01em] text-ink">
                {title}
            </h2>
            <div className="flex flex-col gap-[10px] text-[15px] leading-[1.65] text-copy">
                {children}
            </div>
        </section>
    );
}

export default function Privacy() {
    return (
        <>
            <Head title="Adatkezelési tájékoztató — Felföldi Szabolcs" />

            <main className="min-h-dvh bg-warm px-[clamp(24px,8vw,140px)] py-[clamp(56px,10vh,96px)]">
                <div className="mx-auto flex w-full max-w-[760px] flex-col gap-[clamp(28px,5vh,44px)]">
                    <div className="flex flex-col gap-[14px]">
                        <Link
                            href="/"
                            className="text-label font-medium tracking-[0.14em] text-tan uppercase no-underline transition-colors hover:text-ink"
                        >
                            ← Vissza a főoldalra
                        </Link>
                        <h1 className="text-h2 leading-[1.1] font-semibold tracking-[-0.02em] text-ink">
                            Adatkezelési tájékoztató
                        </h1>
                        <p className="text-meta text-muted">
                            Utolsó frissítés: {LAST_UPDATED}
                        </p>
                    </div>

                    <p className="text-[15px] leading-[1.65] text-copy">
                        Ez a tájékoztató az oldalon működő AI csevegő használata
                        során kezelt személyes adatokra vonatkozik, az Európai
                        Unió általános adatvédelmi rendelete (GDPR) és a
                        vonatkozó magyar jogszabályok szerint.
                    </p>

                    <Block title="1. Az adatkezelő">
                        <p>
                            Felföldi Szabolcs (a továbbiakban: „Adatkezelő”).
                            Kapcsolat:{' '}
                            <a
                                href={`mailto:${CONTROLLER_EMAIL}`}
                                className="text-ink underline decoration-tan underline-offset-2"
                            >
                                {CONTROLLER_EMAIL}
                            </a>
                            .
                        </p>
                    </Block>

                    <Block title="2. Milyen adatokat kezelünk">
                        <p>
                            Kizárólag azt a szöveget, amelyet te magad írsz be a
                            csevegőbe. Nem kérünk és nem gyűjtünk nevet,
                            elérhetőséget vagy más azonosító adatot, és nem
                            vezetünk IP-naplót. Kérjük, ne adj meg érzékeny vagy
                            bizalmas személyes adatot a csevegőben.
                        </p>
                    </Block>

                    <Block title="3. Az adatkezelés célja">
                        <p>
                            A beírt üzeneteket kizárólag azért dolgozzuk fel,
                            hogy a csevegő megválaszolja a Felföldi Szabolcsról
                            (szakmai tapasztalat, készségek, elérhetőség)
                            feltett kérdéseidet.
                        </p>
                    </Block>

                    <Block title="4. Az adatkezelés jogalapja">
                        <p>
                            A hozzájárulásod (GDPR 6. cikk (1) bekezdés a)
                            pont), amelyet a csevegő használata előtti
                            jelölőnégyzet bepipálásával adsz meg. A
                            hozzájárulást bármikor visszavonhatod azzal, hogy
                            nem használod tovább a csevegőt.
                        </p>
                    </Block>

                    <Block title="5. Címzettek, harmadik országba továbbítás">
                        <p>
                            A válasz előállításához a beírt üzeneteket
                            továbbítjuk a Google nyelvi modell szolgáltatásának
                            (Google Gemini API; üzemeltető: Google LLC / Google
                            Ireland Ltd.) mint adatfeldolgozónak. Ez az Európai
                            Unión kívüli (pl. egyesült államokbeli)
                            adattovábbítást is jelenthet, amelyre a Google
                            általános szerződési feltételei és általános
                            adatvédelmi kikötései (SCC) nyújtanak garanciát. A
                            Google adatkezeléséről a{' '}
                            <a
                                href="https://policies.google.com/privacy"
                                target="_blank"
                                rel="noreferrer"
                                className="text-ink underline decoration-tan underline-offset-2"
                            >
                                Google Adatvédelmi irányelveiben
                            </a>{' '}
                            tájékozódhatsz.
                        </p>
                    </Block>

                    <Block title="6. Tárolás és megőrzés">
                        <p>
                            A weboldal nem tárolja és nem naplózza a
                            beszélgetéseket. Az üzenetek csak a böngésződben
                            léteznek, és az oldal bezárásakor vagy
                            újratöltésekor elvesznek. A visszaélések (pl.
                            automatizált terhelés) megakadályozásához kizárólag
                            ideiglenes, téged nem azonosító kérésszámlálót
                            használunk.
                        </p>
                    </Block>

                    <Block title="7. Sütik">
                        <p>
                            Az oldal csak a működéshez feltétlenül szükséges
                            munkamenet- és biztonsági (CSRF) sütit használ.
                            Nincs nyomkövető vagy analitikai süti.
                        </p>
                    </Block>

                    <Block title="8. A te jogaid">
                        <p>
                            A GDPR alapján jogod van a hozzáféréshez,
                            helyesbítéshez, törléshez, az adatkezelés
                            korlátozásához, valamint a hozzájárulás
                            visszavonásához. Mivel nem tárolunk adatot, a törlés
                            a beszélgetés bezárásával gyakorlatilag megtörténik.
                            Kérdés esetén írj az Adatkezelőnek a fenti e-mail
                            címen.
                        </p>
                    </Block>

                    <Block title="9. Panasztétel">
                        <p>
                            Ha úgy ítéled meg, hogy az adatkezelés sérti a
                            jogaidat, panaszt tehetsz a Nemzeti Adatvédelmi és
                            Információszabadság Hatóságnál (NAIH): 1055
                            Budapest, Falk Miksa utca 9–11.; e-mail:{' '}
                            <a
                                href="mailto:ugyfelszolgalat@naih.hu"
                                className="text-ink underline decoration-tan underline-offset-2"
                            >
                                ugyfelszolgalat@naih.hu
                            </a>
                            ; web:{' '}
                            <a
                                href="https://naih.hu"
                                target="_blank"
                                rel="noreferrer"
                                className="text-ink underline decoration-tan underline-offset-2"
                            >
                                naih.hu
                            </a>
                            .
                        </p>
                    </Block>

                    <hr className="border-divider" />

                    <div className="flex flex-col gap-[clamp(20px,4vh,32px)]">
                        <h2 className="text-title font-medium tracking-[-0.01em] text-ink">
                            Privacy Policy (English summary)
                        </h2>
                        <div className="flex flex-col gap-[10px] text-[15px] leading-[1.65] text-copy">
                            <p>
                                This notice covers the AI chat on this site
                                under the EU GDPR. <strong>Controller:</strong>{' '}
                                Felföldi Szabolcs ({CONTROLLER_EMAIL}).
                            </p>
                            <p>
                                <strong>Data:</strong> only the text you type
                                into the chat — no names, contact details or IP
                                logs. Please don't enter sensitive personal
                                data.
                            </p>
                            <p>
                                <strong>Purpose &amp; basis:</strong> to answer
                                your questions about Szabolcs, on the basis of
                                your consent (the checkbox before using the
                                chat).
                            </p>
                            <p>
                                <strong>Recipients:</strong> your messages are
                                sent to Google's Gemini API (Google LLC / Google
                                Ireland Ltd.) to generate the reply, which may
                                involve a transfer outside the EU under Google's
                                standard contractual clauses.
                            </p>
                            <p>
                                <strong>Storage:</strong> the site stores and
                                logs nothing — messages live only in your
                                browser and are gone on reload. Only a
                                temporary, non-identifying counter is used to
                                prevent abuse.
                            </p>
                            <p>
                                <strong>Your rights:</strong> access,
                                rectification, erasure, restriction and
                                withdrawal of consent. Contact the controller
                                above; complaints may be lodged with the
                                Hungarian DPA (NAIH).
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
