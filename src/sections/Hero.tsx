import { useEffect, useRef } from 'react';
import { Calendar, Clock, MapPin, ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { MessengerButtons } from '../components/MessengerButtons';

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.fromTo(eyebrowRef.current,  { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.6 })
        .fromTo(titleRef.current,    { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.95 }, '-=0.3')
        .fromTo(subtitleRef.current, { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.65 }, '-=0.5')
        .fromTo(ctaRef.current,      { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.55 }, '-=0.4')
        .fromTo(metaRef.current?.children || [], { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.4, stagger: 0.08 }, '-=0.35')
        .fromTo(imageRef.current,    { opacity: 0, x: 30, scale: 0.95 }, { opacity: 1, x: 0, scale: 1, duration: 1.0 }, '-=0.9');
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden pt-16 lg:pt-[72px]"
      style={{ background: 'linear-gradient(160deg, #1E1C1A 0%, #2A2825 40%, #302E2B 70%, #353330 100%)' }}>

      {/* ── Фоновая текстура бетона ── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '300px 300px',
        }} />

      {/* ── Архитектурный блюпринт-паттерн ── */}
      <div className="absolute inset-0 pointer-events-none pattern-blueprint opacity-60" />

      {/* ── Терракотовое свечение верх-слева ── */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(196,112,79,0.14) 0%, rgba(196,112,79,0.05) 35%, transparent 65%)', filter: 'blur(80px)' }} />

      {/* ── Песочное свечение снизу-справа ── */}
      <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(212,169,106,0.08) 0%, transparent 60%)', filter: 'blur(60px)' }} />

      {/* ── Декоративный ромб — верхний правый ── */}
      <div className="absolute top-32 right-[15%] w-16 h-16 pointer-events-none animate-diamond hidden lg:block"
        style={{ background: 'rgba(196,112,79,0.08)', border: '1px solid rgba(196,112,79,0.15)', transform: 'rotate(45deg)' }} />

      {/* ── Декоративный ромб — малый ── */}
      <div className="absolute top-[60%] right-[8%] w-8 h-8 pointer-events-none animate-diamond animation-delay-500 hidden lg:block"
        style={{ background: 'rgba(212,169,106,0.06)', border: '1px solid rgba(212,169,106,0.12)', transform: 'rotate(45deg)' }} />

      {/* ── Тонкие вертикальные линии — архитектурный мотив ── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, rgba(245,240,235,0.6) 0px, rgba(245,240,235,0.6) 1px, transparent 1px, transparent 120px)',
        }} />

      {/* ── Терракотовая полоса сверху ── */}
      <div className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: 'linear-gradient(90deg, #C4704F, #D4845A 40%, #C49A5A 70%, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center min-h-[calc(100vh-72px)] py-12 lg:py-16">

          {/* ── Контент ── */}
          <div className="flex flex-col justify-center">

            {/* Eyebrow */}
            <div ref={eyebrowRef} className="flex items-center gap-3 mb-7">
              <span className="badge-terra">Мастер-класс · 18–19 апреля</span>
            </div>

            {/* Title */}
            <h1 ref={titleRef}
              className="font-heading font-bold leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', color: '#F5F0EB' }}>
              Освой основы{' '}
              <em className="not-italic text-gradient">проектирования<br />мебели</em>
              {' '}за 2 дня
            </h1>

            {/* Декоративная линия под заголовком */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12" style={{ background: 'linear-gradient(90deg, #C4704F, transparent)' }} />
              <div className="w-2 h-2" style={{ background: '#C4704F', transform: 'rotate(45deg)', opacity: 0.6 }} />
              <div className="h-[1px] w-8" style={{ background: 'linear-gradient(90deg, rgba(196,112,79,0.5), transparent)' }} />
            </div>

            {/* Subtitle */}
            <p ref={subtitleRef} className="font-body leading-relaxed mb-8"
              style={{ fontSize: '1.05rem', color: '#B8AFA5', maxWidth: '34rem' }}>
              Практический мастер-класс от команды <strong style={{ color: '#E8E0D8', fontWeight: 600 }}>TERRIA</strong> и{' '}
              <strong style={{ color: '#E8E0D8', fontWeight: 600 }}>Галины Гусаровой</strong> — для хоумстейджеров и дизайнеров интерьера
            </p>

            {/* Price + CTA */}
            <div ref={ctaRef} className="mb-8">
              <div className="flex flex-wrap items-baseline gap-3 mb-5">
                <span className="font-heading font-bold" style={{ fontSize: '2.6rem', color: '#F5F0EB', lineHeight: 1 }}>
                  15 000
                </span>
                <span className="font-heading text-xl" style={{ color: '#8C837A' }}>₽</span>
                <span className="font-body text-sm" style={{ color: '#8C837A' }}>· двухдневный курс</span>
              </div>
              <MessengerButtons size="large" />
              <p className="mt-4 flex items-center gap-2 text-sm font-accent" style={{ color: '#8C837A' }}>
                <span className="inline-block w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#C4704F' }} />
                Количество мест ограничено
              </p>
            </div>

            {/* Meta */}
            <div ref={metaRef} className="flex flex-wrap gap-2.5">
              {[
                { icon: Calendar, label: '18–19 апреля' },
                { icon: Clock,    label: '3 часа в день' },
                { icon: MapPin,   label: 'БЦ Технопарк плаза' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 px-3.5 py-2 rounded-full"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <Icon className="w-3.5 h-3.5" style={{ color: '#C4704F' }} />
                  <span className="font-accent text-xs font-medium" style={{ color: '#B8AFA5' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Картинка ── */}
          <div ref={imageRef} className="relative hidden sm:block">
            {/* Терракотовое свечение за изображением */}
            <div className="absolute -inset-8 rounded-3xl pointer-events-none"
              style={{ background: 'radial-gradient(circle at 60% 50%, rgba(196,112,79,0.20) 0%, transparent 65%)', filter: 'blur(40px)' }} />

            {/* Декоративная рамка со смещением */}
            <div className="absolute -top-3 -right-3 -bottom-3 -left-3 rounded-2xl pointer-events-none"
              style={{ border: '1px solid rgba(196,112,79,0.12)' }} />
            <div className="absolute -top-6 -right-6 w-12 h-12 pointer-events-none"
              style={{ borderTop: '2px solid rgba(196,112,79,0.35)', borderRight: '2px solid rgba(196,112,79,0.35)' }} />
            <div className="absolute -bottom-6 -left-6 w-12 h-12 pointer-events-none"
              style={{ borderBottom: '2px solid rgba(196,112,79,0.35)', borderLeft: '2px solid rgba(196,112,79,0.35)' }} />

            <div className="relative rounded-2xl overflow-hidden"
              style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.07), 0 32px 80px rgba(0,0,0,0.55), 0 0 60px rgba(196,112,79,0.08)' }}>
              <img src="https://static.tildacdn.com/tild3435-6436-4333-a333-396639396165/Rectangle_42.png" alt="Мастер-класс по проектированию мебели"
                className="w-full h-[480px] object-cover" />
              {/* Градиент снизу */}
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(30,28,26,0.85) 0%, rgba(30,28,26,0.15) 50%, transparent 100%)' }} />

              {/* Тонкая терракотовая рамка по периметру изображения */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{ boxShadow: 'inset 0 0 0 1px rgba(196,112,79,0.15)' }} />

              {/* Нижний текстовый блок на фото */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-heading text-lg font-semibold" style={{ color: '#F5F0EB' }}>
                  TERRIA <span style={{ color: 'rgba(245,240,235,0.3)' }}>×</span> Галина Гусарова
                </p>
                <p className="font-accent text-xs mt-0.5" style={{ color: '#B8AFA5' }}>
                  Мастер-класс по проектированию мебели
                </p>
              </div>
            </div>

            {/* Плавающая карточка с датой */}
            <div className="absolute -bottom-5 -right-5 px-5 py-4 rounded-2xl animate-float"
              style={{
                background: 'linear-gradient(145deg, #2E2C29, #2A2825)',
                border: '1px solid rgba(196,112,79,0.25)',
                boxShadow: '0 12px 40px rgba(0,0,0,0.5), 0 0 20px rgba(196,112,79,0.06)',
              }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(196,112,79,0.15)', border: '1px solid rgba(196,112,79,0.20)' }}>
                  <Calendar style={{ width: 18, height: 18, color: '#C4704F' }} />
                </div>
                <div>
                  <p className="font-heading font-semibold text-sm" style={{ color: '#F5F0EB' }}>18–19 апреля</p>
                  <p className="font-accent text-xs" style={{ color: '#8C837A' }}>2 дня · 3 ч/день</p>
                </div>
              </div>
            </div>

            {/* Декоративный угловой акцент */}
            <div className="absolute -top-2 -right-2 w-20 h-20 pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(196,112,79,0.25), transparent)',
                borderRadius: '0 16px 0 0',
                filter: 'blur(12px)',
              }} />
          </div>
        </div>
      </div>

      {/* Скролл-индикатор */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce-subtle z-10">
        <button onClick={() => scrollTo('#for-whom')}
          className="flex flex-col items-center gap-1 transition-colors duration-300"
          style={{ color: 'rgba(184,175,165,0.4)' }}
          onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.color = '#C4704F'}
          onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.color = 'rgba(184,175,165,0.4)'}>
          <span className="font-accent text-[10px] tracking-widest uppercase">Листайте</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {/* Плавный переход в следующую секцию */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #3E3C39)' }} />
    </section>
  );
}
