import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, Users, Gift } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current?.children || [],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: contentRef.current, start: 'top 82%', toggleActions: 'play none none none' } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToPricing = () => {
    const element = document.querySelector('#pricing');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-36 overflow-hidden"
      style={{ backgroundColor: '#080810' }}
    >
      {/* Background: dark with purple-gold radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(155,110,202,0.12) 0%, rgba(201,169,110,0.06) 40%, transparent 70%)',
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Top/bottom fade */}
      <div className="absolute top-0 left-0 right-0 h-24 pointer-events-none" style={{ background: 'linear-gradient(to bottom, #080810, transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" style={{ background: 'linear-gradient(to top, #080810, transparent)' }} />

      {/* Large orb decorations */}
      <div
        className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full pointer-events-none animate-glow-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(155,110,202,0.15) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(201,169,110,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Central card */}
        <div
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 0 0 1px rgba(201,169,110,0.08), 0 32px 80px rgba(0,0,0,0.6)',
          }}
        >
          {/* Gradient top border */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(155,110,202,0.6), rgba(201,169,110,0.6), transparent)' }}
          />

          <div ref={contentRef} className="px-8 py-14 lg:px-16 lg:py-16 text-center">
            {/* Badge */}
            <div className="mb-6">
              <span
                className="inline-flex items-center gap-2 font-accent text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full"
                style={{
                  background: 'rgba(232,148,58,0.12)',
                  border: '1px solid rgba(232,148,58,0.25)',
                  color: '#E8943A',
                }}
              >
                <Gift className="w-3.5 h-3.5" />
                Специальное предложение
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
              Готовы освоить{' '}
              <span className="text-gradient">проектирование мебели</span>?
            </h2>

            {/* Subtext */}
            <p className="text-lg text-white/55 mb-10 max-w-2xl mx-auto font-body leading-relaxed">
              Запишитесь на мастер-класс прямо сейчас и получите бонус:{' '}
              <span className="text-white/80">чек-лист «10 ошибок при заказе мебели»</span>
            </p>

            {/* CTA Button */}
            <button
              onClick={scrollToPricing}
              className="font-accent font-semibold px-10 py-5 rounded-xl text-lg text-white transition-all duration-300 animate-pulse-glow"
              style={{
                background: 'linear-gradient(135deg, #E8943A, #C8641A)',
                boxShadow: '0 0 0 1px rgba(232,148,58,0.4)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.transform = 'translateY(-2px)';
                el.style.boxShadow = '0 0 40px rgba(232,148,58,0.5), 0 12px 40px rgba(0,0,0,0.4)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = '0 0 0 1px rgba(232,148,58,0.4)';
              }}
            >
              Записаться на курс
            </button>

            {/* Info badges */}
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <div
                className="flex items-center gap-2 px-4 py-2.5 rounded-full"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <Calendar className="w-4 h-4" style={{ color: 'rgba(201,169,110,0.8)' }} />
                <span className="text-sm text-white/60 font-accent">Следующий поток: 15–16 июня</span>
              </div>
              <div
                className="flex items-center gap-2 px-4 py-2.5 rounded-full"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <Users className="w-4 h-4" style={{ color: 'rgba(201,169,110,0.8)' }} />
                <span className="text-sm text-white/60 font-accent">Осталось 12 мест</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
