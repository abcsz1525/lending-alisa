import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const audiences = [
  {
    emoji: '🏠',
    title: 'Хоумстейджеры',
    description: 'Узнаете основы проектирования и заказа мебели для клиента, которая подчеркнет достоинства любого пространства. Научитесь точно просчитывать проекты и общаться с мебельщиками на одном языке.',
    accent: '#C4704F',
    accentLight: 'rgba(196,112,79,0.12)',
  },
  {
    emoji: '🎨',
    title: 'Дизайнеры интерьера',
    description: 'Расширите компетенции и начнёте создавать уникальную мебель под конкретные проекты. Научитесь отличать качественные решения от маркетинговых уловок и правильно составлять ТЗ.',
    accent: '#D4A96A',
    accentLight: 'rgba(212,169,106,0.12)',
  },
  {
    emoji: '✨',
    title: 'Новички',
    description: 'Тем, кто интересуется дизайном, хоумстейджингом и хотел бы прикоснуться к этим профессиям',
    accent: '#B8917A',
    accentLight: 'rgba(184,145,122,0.12)',
  },
];

export function ForWhom() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef   = useRef<HTMLDivElement>(null);
  const cardsRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: titleRef.current, start: 'top 85%' } }
      );
      gsap.fromTo(cardsRef.current?.children || [],
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.16, ease: 'power3.out',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 82%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="for-whom" ref={sectionRef} className="relative py-20 lg:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #3E3C39 0%, #3A3835 50%, #353330 100%)' }}>

      {/* Фоновая текстура */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '300px 300px',
        }} />

      {/* Блюпринт-паттерн */}
      <div className="absolute inset-0 pointer-events-none pattern-blueprint opacity-40" />

      {/* Декоративный ромб */}
      <div className="absolute top-20 right-[10%] w-12 h-12 pointer-events-none animate-diamond hidden lg:block"
        style={{ border: '1px solid rgba(196,112,79,0.12)', transform: 'rotate(45deg)' }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Заголовок */}
        <div ref={titleRef} className="text-center mb-12 lg:mb-16">
          <span className="badge-terra mb-5 inline-flex">Аудитория</span>
          <h2 className="font-heading font-bold leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#F5F0EB' }}>
            Для кого этот{' '}
            <span className="text-gradient">мастер-класс</span>
          </h2>
          {/* Декоративная линия */}
          <div className="section-divider max-w-xs mx-auto mt-5">
            <div className="diamond" />
          </div>
        </div>

        {/* Карточки */}
        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
          {audiences.map((item) => (
            <div key={item.title} className="relative rounded-2xl p-7 lg:p-9 overflow-hidden group"
              style={{
                background: 'linear-gradient(145deg, #3A3835, #353330)',
                border: '1px solid rgba(255,255,255,0.07)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = 'translateY(-5px)';
                el.style.boxShadow = `0 20px 55px rgba(0,0,0,0.40), 0 0 30px ${item.accentLight}`;
                el.style.borderColor = `${item.accent}35`;
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = 'none';
                el.style.borderColor = 'rgba(255,255,255,0.07)';
              }}>

              {/* Горизонтальная терракотовая линия сверху */}
              <div className="absolute top-0 left-0 w-16 h-[2px] rounded-br-full"
                style={{ background: item.accent }} />

              {/* Уголки */}
              <div className="absolute top-3 right-3 w-5 h-5 pointer-events-none"
                style={{ borderTop: `1px solid ${item.accent}25`, borderRight: `1px solid ${item.accent}25` }} />
              <div className="absolute bottom-3 left-3 w-5 h-5 pointer-events-none"
                style={{ borderBottom: `1px solid ${item.accent}25`, borderLeft: `1px solid ${item.accent}25` }} />

              {/* Emoji */}
              <div className="text-4xl mb-5">{item.emoji}</div>

              <h3 className="font-heading font-semibold mb-3"
                style={{ fontSize: '1.5rem', color: '#F5F0EB' }}>
                {item.title}
              </h3>

              <p className="font-body leading-relaxed" style={{ color: '#B8AFA5', fontSize: '0.95rem' }}>
                {item.description}
              </p>

              {/* Угловой декор — ромб */}
              <div className="absolute bottom-5 right-5 w-6 h-6 opacity-[0.08]"
                style={{ background: item.accent, transform: 'rotate(45deg)' }} />
            </div>
          ))}
        </div>
      </div>

      {/* Переход вниз */}
      <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #353330)' }} />
    </section>
  );
}
