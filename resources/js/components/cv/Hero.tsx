export default function Hero() {
    return (
        <section
            data-section-index={0}
            className="relative flex h-dvh snap-start flex-col items-center justify-center gap-[clamp(28px,6vw,100px)] bg-warm px-[clamp(24px,10vw,140px)] py-[clamp(72px,10vh,96px)] text-center md:flex-row md:justify-start md:py-0 md:text-left"
        >
            <div className="flex flex-1 flex-col items-center md:items-start">
                <span className="mb-[20px] block text-[14px] font-normal tracking-[0.18em] text-tan uppercase">
                    Fullstack fejlesztő
                </span>
                <h1 className="mb-[clamp(24px,4vh,36px)] text-display leading-[0.95] font-semibold tracking-[-0.03em] text-ink">
                    Felföldi
                    <br />
                    Szabolcs
                </h1>
                <div className="flex flex-col gap-[10px]">
                    <a
                        href="mailto:szabolcs.felfoldi10@gmail.com"
                        className="text-body font-light tracking-[0.01em] text-muted no-underline"
                    >
                        szabolcs.felfoldi10@gmail.com
                    </a>
                    <a
                        href="tel:+36306656634"
                        className="text-body font-light text-muted no-underline"
                    >
                        +36 30 665 6634
                    </a>
                </div>
            </div>

            <img
                src="/cv_photo.jpg"
                alt="Felföldi Szabolcs"
                className="order-first size-[clamp(150px,38vw,300px)] shrink-0 rounded-full bg-photo object-cover md:order-none"
            />

            <div className="animate-scroll-bounce absolute bottom-[36px] left-1/2 flex -translate-x-1/2 flex-col items-center gap-[8px]">
                <span className="text-label font-normal tracking-[0.12em] text-tan uppercase">
                    Görgess
                </span>
                <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
                    <path
                        d="M5 0v12M1 9l4 5 4-5"
                        stroke="#C4A882"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        </section>
    );
}
