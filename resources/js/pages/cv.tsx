import { Head } from '@inertiajs/react';
import About from '@/components/cv/About';
import Contact from '@/components/cv/Contact';
import Education from '@/components/cv/Education';
import Experience from '@/components/cv/Experience';
import Hero from '@/components/cv/Hero';
import Hobbies from '@/components/cv/Hobbies';
import Nav from '@/components/cv/Nav';
import Skills from '@/components/cv/Skills';
import { useScrollSpy } from '@/components/cv/use-scroll-spy';

export default function CV() {
    const { scrollRef, activeSection, navTo } = useScrollSpy();

    return (
        <>
            <Head title="Felföldi Szabolcs — Fullstack fejlesztő" />
            <div className="md:fixed md:inset-0 md:overflow-hidden">
                <Nav activeSection={activeSection} onNavigate={navTo} />
                <div
                    id="cv-scroll"
                    ref={scrollRef}
                    className="md:h-dvh md:snap-y md:snap-mandatory md:overflow-y-scroll"
                >
                    <Hero />
                    <About />
                    <Experience />
                    <Education />
                    <Skills />
                    <Hobbies />
                    <Contact />
                </div>
            </div>
        </>
    );
}
