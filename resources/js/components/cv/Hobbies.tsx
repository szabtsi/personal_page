import { useEffect, useRef, useState } from 'react';
import { HOBBIES } from '@/components/cv/data';
import Section from '@/components/cv/Section';
import { cn } from '@/lib/utils';

export default function Hobbies() {
    const [hoveredHobby, setHoveredHobby] = useState<number | null>(null);
    const [pinnedHobby, setPinnedHobby] = useState<number | null>(null);
    const openHobby = hoveredHobby ?? pinnedHobby;
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const drawStars = () => {
            const canvas = canvasRef.current;

            if (!canvas) {
                return;
            }

            const W = (canvas.width = canvas.offsetWidth || 1200);
            const H = (canvas.height = canvas.offsetHeight || 900);
            const ctx = canvas.getContext('2d');

            if (!ctx) {
                return;
            }

            // Background gradient
            const bg = ctx.createLinearGradient(0, 0, W, H);
            bg.addColorStop(0, '#060612');
            bg.addColorStop(1, '#0A0820');
            ctx.fillStyle = bg;
            ctx.fillRect(0, 0, W, H);

            // Stars
            for (let i = 0; i < 320; i++) {
                const x = Math.random() * W;
                const y = Math.random() * H;
                const r = Math.random() * 1.3 + 0.1;
                const a = Math.random() * 0.6 + 0.2;
                ctx.beginPath();
                ctx.arc(x, y, r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(240,235,226,${a.toFixed(2)})`;
                ctx.fill();
            }

            // Brighter stars
            for (let i = 0; i < 18; i++) {
                const x = Math.random() * W;
                const y = Math.random() * H;
                const r = Math.random() * 0.8 + 0.5;
                ctx.beginPath();
                ctx.arc(x, y, r, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255,248,235,0.92)';
                ctx.fill();
            }

            // Purple nebula
            const n1 = ctx.createRadialGradient(
                W * 0.75,
                H * 0.32,
                0,
                W * 0.75,
                H * 0.32,
                W * 0.36,
            );
            n1.addColorStop(0, 'rgba(100,55,190,0.14)');
            n1.addColorStop(0.5, 'rgba(70,30,140,0.07)');
            n1.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = n1;
            ctx.fillRect(0, 0, W, H);

            // Blue nebula
            const n2 = ctx.createRadialGradient(
                W * 0.2,
                H * 0.65,
                0,
                W * 0.2,
                H * 0.65,
                W * 0.28,
            );
            n2.addColorStop(0, 'rgba(28,65,160,0.11)');
            n2.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = n2;
            ctx.fillRect(0, 0, W, H);

            // Warm orange glow
            const n3 = ctx.createRadialGradient(
                W * 0.88,
                H * 0.78,
                0,
                W * 0.88,
                H * 0.78,
                W * 0.2,
            );
            n3.addColorStop(0, 'rgba(180,100,40,0.07)');
            n3.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = n3;
            ctx.fillRect(0, 0, W, H);
        };

        const timer = window.setTimeout(() => drawStars(), 300);

        return () => window.clearTimeout(timer);
    }, []);

    return (
        <Section index={5} className="relative overflow-hidden bg-space">
            <canvas
                ref={canvasRef}
                id="star-canvas"
                className="absolute inset-0 block size-full"
            />
            <div className="relative z-[2] flex max-w-[640px] flex-col">
                <h2 className="mb-[clamp(32px,6vh,52px)] text-h2 leading-[1.1] font-medium tracking-[-0.02em] text-light">
                    Érdeklődési körök
                </h2>
                <div className="flex flex-col">
                    {HOBBIES.map((hobby, i) => {
                        const open = openHobby === i;

                        return (
                            <div
                                key={hobby.title}
                                onMouseEnter={() => setHoveredHobby(i)}
                                onMouseLeave={() => setHoveredHobby(null)}
                                onClick={() =>
                                    setPinnedHobby((p) => (p === i ? null : i))
                                }
                                className={cn(
                                    'flex cursor-pointer flex-col border-t border-divider-space py-[20px]',
                                    i === HOBBIES.length - 1 && 'border-b',
                                )}
                            >
                                <span
                                    className={cn(
                                        'text-title font-light tracking-[-0.01em] transition-colors duration-300',
                                        open ? 'text-light' : 'text-space-fg',
                                    )}
                                >
                                    {hobby.title}
                                </span>
                                <div
                                    className="overflow-hidden"
                                    style={{
                                        maxHeight: open ? '160px' : 0,
                                        opacity: open ? 1 : 0,
                                        transition:
                                            'max-height 0.45s ease, opacity 0.35s ease',
                                    }}
                                >
                                    <p className="mt-[12px] max-w-[560px] text-body leading-[1.7] font-light [text-wrap:pretty] text-hobby-body">
                                        {hobby.body}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
}
