import { useEffect, useRef } from 'react';
import { Calendar, Clock, MapPin, ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { MessengerButtons } from '../components/MessengerButtons';

// Concrete palette
const BG = '#3E3C39';
const BG_DARK = '#2A2825';

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.fromTo(badgeRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 })
        .fromTo(titleRef.current, { opacity: 0, y: 36 }, { opacity: 1, y: 0, duration: 0.85 }, '-=0.35')
        .fromTo(subtitleRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.65 }, '-=0.45')
        .fromTo(buttonsRef.current, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.55 }, '-=0.4')
        .fromTo(metaRef.current?.children || [], { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.45, stagger: 0.08 }, '-=0.35')
        .fromTo(imageRef.current, { opacity: 0, scale: 0.94, x: 24 }, { opacity: 1, scale: 1, x: 0, duration: 0.9 }, '-=0.8');
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden pt-16 lg:pt-[72px]"
      style={{ background: `radial-gradient(ellipse 120% 70% at 60% 0%, rgba(255,255,255,0.04) 0%, transparent 55%), ${BG_DARK}` }}
    >
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[calc(100vh-120px)]">

          {/* Content */}
          <div className="flex flex-col justify-center">

            {/* Badge */}
            <div ref={badgeRef} className="mb-6">
              <span className="inline-flex items-center gap-2 font-accent text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full"
                style={{ background: 'rgba(212,169,106,0.12)', border: '1px solid rgba(212,169,106,0.30)', color: '#D4A96A' }}>
                Мастер-класс · 18 и 19 апреля
              </span>
            </div>

            {/* Title */}
            <h1 ref={titleRef}
              className="font-heading text-4xl sm:text-5xl lg:text-[58px] font-bold leading-[1.08] mb-5 text-white">
              Освой основы{' '}
              <span className="text-gradient">проектирования<br className="hidden sm:block" /> мебели</span>{' '}
              за 2 дня
            </h1>

            {/* Subtitle */}
            <p ref={subtitleRef} className="text-base sm:text-lg text-white/65 leading-relaxed mb-8 max-w-lg font-body">
              Практический мастер-класс от <strong className="text-white/85 font-semibold">TERRIA</strong> и хоумстейджера <strong className="text-white/85 font-semibold">Галины Гусаровой</strong> — для хоумстейджеров и дизайнеров интерьера
            </p>

            {/* Price + CTA */}
            <div ref={buttonsRef} className="mb-8">
              <div className="flex flex-wrap items-center gap-4 mb-5">
                <div className="flex items-baseline gap-1">
                  <span className="font-heading text-4xl font-bold text-white">15 000</span>
                  <span className="font-heading text-xl text-white/50">₽</span>
                </div>
                <span className="text-white/40 text-sm font-body">· за двухдневный курс</span>
              </div>
              <MessengerButtons size="large" />
              <p className="mt-4 flex items-center gap-2 text-white/45 text-sm font-accent">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400/70 animate-pulse" />
                Количество мест ограничено
              </p>
            </div>

            {/* Meta badges */}
            <div ref={metaRef} className="flex flex-wrap gap-2.5">
              {[
                { icon: Calendar, label: '18–19 апреля' },
                { icon: Clock, label: '3 часа в день' },
                { icon: MapPin, label: 'БЦ Технопарк плаза' },
              ].map(({ icon: Icon, label }) => (
                <div key={label}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-full"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)' }}>
                  <Icon className="w-3.5 h-3.5 text-[#D4A96A]" />
                  <span className="text-xs font-medium text-white/70">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div ref={imageRef} className="relative hidden sm:block">
            <div className="relative rounded-2xl overflow-hidden"
              style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.08), 0 32px 80px rgba(0,0,0,0.5)' }}>
              <img src="/hero-workspace.jpg" alt="Мастер-класс по проектированию мебели"
                className="w-full h-auto object-cover" />
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(30,28,26,0.7) 0%, transparent 55%)' }} />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-4 -left-4 px-5 py-4 rounded-2xl animate-float"
              style={{
                background: 'rgba(28,27,25,0.92)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.10)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
              }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(212,169,106,0.15)' }}>
                  <Calendar className="w-4.5 h-4.5" style={{ color: '#D4A96A', width: 18, height: 18 }} />
                </div>
                <div>
                  <p className="font-heading font-bold text-white text-sm">18–19 апреля</p>
                  <p className="text-xs text-white/50 font-accent">2 дня · 3 ч/день</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce-subtle z-10">
        <button onClick={() => scrollTo('#for-whom')}
          className="flex flex-col items-center gap-1 text-white/30 hover:text-white/60 transition-colors duration-300">
          <span className="text-[10px] font-accent tracking-widest uppercase">Листайте</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: `linear-gradient(to bottom, transparent, ${BG})` }} />
    </section>
  );
}
