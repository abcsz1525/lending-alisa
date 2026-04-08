import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessengerButtons } from '../components/MessengerButtons';

gsap.registerPlugin(ScrollTrigger);

export function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const innerRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(innerRef.current?.children || [],
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.65, stagger: 0.13, ease: 'power3.out',
          scrollTrigger: { trigger: innerRef.current, start: 'top 85%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #2E2C29, #2A2825)' }}>

      {/* Фоновая текстура */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '300px 300px',
        }} />

      {/* Терракотовое свечение по центру */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(196,112,79,0.10) 0%, transparent 70%)' }} />

      {/* Блюпринт */}
      <div className="absolute inset-0 pointer-events-none pattern-blueprint opacity-30" />

      {/* Терракотовая полоса сверху */}
      <div className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: 'linear-gradient(90deg, transparent, #C4704F 30%, #D4845A 60%, transparent)' }} />

      {/* Декоративные ромбы */}
      <div className="absolute top-16 left-[8%] w-8 h-8 pointer-events-none animate-diamond hidden lg:block"
        style={{ border: '1px solid rgba(196,112,79,0.12)', transform: 'rotate(45deg)' }} />
      <div className="absolute bottom-20 right-[8%] w-6 h-6 pointer-events-none animate-diamond animation-delay-300 hidden lg:block"
        style={{ border: '1px solid rgba(212,169,106,0.10)', transform: 'rotate(45deg)' }} />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl overflow-hidden"
          style={{
            background: 'linear-gradient(145deg, #3A3835, #353330)',
            border: '1px solid rgba(196,112,79,0.22)',
            boxShadow: '0 24px 70px rgba(0,0,0,0.50), 0 0 40px rgba(196,112,79,0.06)',
          }}>

          {/* Верхний терракотовый акцент */}
          <div className="absolute top-0 left-0 right-0 h-[2px]"
            style={{ background: 'linear-gradient(90deg, #C4704F, #D4845A 50%, #D4A96A)' }} />

          {/* Угловые декоративные элементы */}
          <div className="absolute top-4 left-4 w-6 h-6 pointer-events-none"
            style={{ borderTop: '1px solid rgba(196,112,79,0.18)', borderLeft: '1px solid rgba(196,112,79,0.18)' }} />
          <div className="absolute top-4 right-4 w-6 h-6 pointer-events-none"
            style={{ borderTop: '1px solid rgba(196,112,79,0.18)', borderRight: '1px solid rgba(196,112,79,0.18)' }} />
          <div className="absolute bottom-4 left-4 w-6 h-6 pointer-events-none"
            style={{ borderBottom: '1px solid rgba(196,112,79,0.18)', borderLeft: '1px solid rgba(196,112,79,0.18)' }} />
          <div className="absolute bottom-4 right-4 w-6 h-6 pointer-events-none"
            style={{ borderBottom: '1px solid rgba(196,112,79,0.18)', borderRight: '1px solid rgba(196,112,79,0.18)' }} />

          {/* Угловые свечения */}
          <div className="absolute top-0 left-0 w-24 h-24 pointer-events-none"
            style={{ background: 'linear-gradient(135deg, rgba(196,112,79,0.08) 0%, transparent 60%)' }} />
          <div className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none"
            style={{ background: 'linear-gradient(315deg, rgba(196,112,79,0.06) 0%, transparent 60%)' }} />

          <div ref={innerRef} className="px-6 sm:px-12 py-12 sm:py-14 text-center flex flex-col items-center gap-6">

            {/* Бейдж */}
            <span className="badge-terra animate-pulse-glow">
              <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: '#C4704F' }} />
              Количество мест ограничено
            </span>

            {/* Заголовок */}
            <h2 className="font-heading font-bold leading-tight"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', color: '#F5F0EB' }}>
              Места заканчиваются —<br />
              <span className="text-gradient">запишись сейчас</span>
            </h2>

            {/* Декоративная линия */}
            <div className="section-divider max-w-[200px]">
              <div className="diamond" />
            </div>

            {/* Детали */}
            <p className="font-body" style={{ color: '#8C837A', fontSize: '0.95rem' }}>
              18 и 19 апреля · БЦ Технопарк плаза · 15 000 ₽
            </p>

            {/* Кнопки */}
            <MessengerButtons size="large" />

            {/* Сноска */}
            <p className="font-body text-sm" style={{ color: '#6C635A' }}>
              Свяжитесь в любом удобном мессенджере
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
