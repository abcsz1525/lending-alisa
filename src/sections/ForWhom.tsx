import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const audiences = [
  {
    emoji: '🏠',
    title: 'Хоумстейджеры',
    description: 'Узнаете, как подбирать и заказывать мебель для staging, которая подчёркивает достоинства любого пространства. Научитесь точно просчитывать проекты и грамотно общаться с мебельщиками.',
    color: '#D4A96A',
  },
  {
    emoji: '🎨',
    title: 'Дизайнеры интерьера',
    description: 'Расширите компетенции и начнёте создавать уникальную мебель под конкретные проекты. Научитесь отличать качественные решения от маркетинговых уловок и правильно составлять ТЗ.',
    color: '#A09890',
  },
];

export function ForWhom() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: titleRef.current, start: 'top 85%', toggleActions: 'play none none none' } }
      );
      gsap.fromTo(cardsRef.current?.children || [],
        { opacity: 0, y: 32, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 80%', toggleActions: 'play none none none' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="for-whom" ref={sectionRef}
      className="py-20 lg:py-32"
      style={{ backgroundColor: '#3E3C39' }}>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-12 lg:mb-16">
          <p className="font-accent text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#D4A96A' }}>
            Аудитория
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-white leading-tight">
            Для кого этот <span className="text-gradient">мастер-класс</span>
          </h2>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="grid sm:grid-cols-2 gap-5 lg:gap-7">
          {audiences.map((item) => (
            <div key={item.title}
              className="rounded-2xl p-7 lg:p-9 relative overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.10)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = 'translateY(-4px)';
                el.style.boxShadow = '0 20px 50px rgba(0,0,0,0.35)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = 'none';
              }}>
              {/* Top line */}
              <div className="absolute top-0 left-8 right-8 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${item.color}60, transparent)` }} />

              <div className="text-4xl mb-5">{item.emoji}</div>
              <h3 className="font-heading text-xl sm:text-2xl font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-white/60 leading-relaxed font-body text-sm sm:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
