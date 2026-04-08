import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessengerButtons } from '../components/MessengerButtons';

gsap.registerPlugin(ScrollTrigger);

export function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current?.children || [],
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.65, stagger: 0.13, ease: 'power3.out',
          scrollTrigger: { trigger: contentRef.current, start: 'top 85%', toggleActions: 'play none none none' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef}
      className="py-20 lg:py-32 relative overflow-hidden"
      style={{ backgroundColor: '#3E3C39' }}>

      {/* Subtle bg glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(212,169,106,0.06) 0%, transparent 70%)' }} />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.10)',
            boxShadow: '0 24px 70px rgba(0,0,0,0.35)',
          }}>

          {/* Top line */}
          <div className="absolute top-0 left-0 right-0 h-0.5"
            style={{ background: 'linear-gradient(90deg, transparent, #D4A96A, transparent)' }} />

          <div ref={contentRef} className="px-6 sm:px-12 py-12 sm:py-16 text-center">

            {/* Badge */}
            <div>
              <span className="inline-flex items-center gap-2 font-accent text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full"
                style={{ background: 'rgba(212,169,106,0.12)', border: '1px solid rgba(212,169,106,0.28)', color: '#D4A96A' }}>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400/80 animate-pulse" />
                Количество мест ограничено
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Места заканчиваются —<br />
              <span className="text-gradient">запишись сейчас</span>
            </h2>

            {/* Details */}
            <p className="text-white/55 font-body text-sm sm:text-base">
              18 и 19 апреля · БЦ Технопарк плаза · 15 000 ₽
            </p>

            {/* Buttons */}
            <div className="flex justify-center">
              <MessengerButtons size="large" />
            </div>

            {/* Fine print */}
            <p className="text-white/30 text-sm font-body">
              Свяжитесь в любом удобном мессенджере
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
