import { useEffect, useRef } from 'react';
import { Clock, BookOpen, Award, ChevronDown, Sparkles } from 'lucide-react';
import gsap from 'gsap';

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const trustBadgesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(badgeRef.current,
        { opacity: 0, y: 24, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7 }
      )
      .fromTo(titleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9 },
        '-=0.4'
      )
      .fromTo(subtitleRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.5'
      )
      .fromTo(buttonsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.4'
      )
      .fromTo(imageRef.current,
        { opacity: 0, scale: 0.93, x: 30 },
        { opacity: 1, scale: 1, x: 0, duration: 1.0 },
        '-=0.7'
      )
      .fromTo(trustBadgesRef.current?.children || [],
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
        '-=0.5'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden pt-[72px]"
      style={{
        background: 'radial-gradient(ellipse 100% 80% at 50% -20%, rgba(155, 110, 202, 0.20) 0%, transparent 65%), radial-gradient(ellipse 70% 50% at 90% 60%, rgba(201, 169, 110, 0.10) 0%, transparent 55%), #080810',
      }}
    >
      {/* Ambient glow orbs */}
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none animate-glow-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(155,110,202,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
          transform: 'translate(-50%, -30%)',
        }}
      />
      <div
        className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(201,169,110,0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-160px)]">

          {/* Content */}
          <div className="relative">
            {/* Badge */}
            <div ref={badgeRef} className="mb-7">
              <span
                className="inline-flex items-center gap-2 font-accent text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full"
                style={{
                  background: 'rgba(201,169,110,0.10)',
                  border: '1px solid rgba(201,169,110,0.25)',
                  color: '#C9A96E',
                }}
              >
                <Sparkles className="w-3.5 h-3.5" />
                Онлайн-мастер-класс
              </span>
            </div>

            {/* Title */}
            <h1
              ref={titleRef}
              className="font-heading text-[42px] sm:text-5xl lg:text-[60px] font-bold leading-[1.10] mb-6"
            >
              <span className="text-white">Освой основы </span>
              <span className="text-gradient">проектирования<br />мебели</span>
              <span className="text-white"> за 2 дня</span>
            </h1>

            {/* Subtitle */}
            <p
              ref={subtitleRef}
              className="text-lg text-white/55 leading-relaxed mb-10 max-w-xl font-body"
            >
              Научитесь создавать функциональную и эстетичную мебель для
              интерьеров. Практические навыки от профессионального дизайнера с
              15-летним опытом.
            </p>

            {/* Buttons */}
            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => scrollToSection('#pricing')}
                className="font-accent font-semibold px-8 py-4 rounded-xl text-base text-white transition-all duration-300 animate-pulse-glow"
                style={{
                  background: 'linear-gradient(135deg, #E8943A, #C8641A)',
                  boxShadow: '0 0 0 1px rgba(232,148,58,0.3)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)';
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 30px rgba(232,148,58,0.45), 0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px rgba(232,148,58,0.5)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 0 1px rgba(232,148,58,0.3)';
                }}
              >
                Записаться на курс
              </button>
              <button
                onClick={() => scrollToSection('#program')}
                className="font-accent font-semibold px-8 py-4 rounded-xl text-base transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: 'rgba(255,255,255,0.75)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.07)';
                  (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(201,169,110,0.4)';
                  (e.currentTarget as HTMLButtonElement).style.color = '#fff';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.04)';
                  (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.12)';
                  (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.75)';
                }}
              >
                Смотреть программу
              </button>
            </div>

            {/* Trust badges */}
            <div ref={trustBadgesRef} className="flex flex-wrap gap-3">
              {[
                { icon: Clock, label: '2 дня обучения' },
                { icon: BookOpen, label: 'Практические задания' },
                { icon: Award, label: 'Сертификат' },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-full"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <Icon className="w-4 h-4" style={{ color: '#C9A96E' }} />
                  <span className="text-sm font-medium text-white/70">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div ref={imageRef} className="relative">
            {/* Glow behind image */}
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(201,169,110,0.15) 0%, transparent 70%)',
                filter: 'blur(30px)',
                transform: 'scale(1.1)',
              }}
            />

            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                boxShadow: '0 0 0 1px rgba(255,255,255,0.08), 0 24px 80px rgba(0,0,0,0.7)',
              }}
            >
              <img
                src="/hero-workspace.jpg"
                alt="Дизайн студия"
                className="w-full h-auto object-cover"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,8,16,0.5) 0%, transparent 50%)' }} />
            </div>

            {/* Floating stats card */}
            <div
              className="absolute -bottom-5 -left-5 px-5 py-4 rounded-2xl animate-float"
              style={{
                background: 'rgba(12,12,20,0.9)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(201,169,110,0.2)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(201,169,110,0.15)' }}
                >
                  <Award className="w-5 h-5" style={{ color: '#C9A96E' }} />
                </div>
                <div>
                  <p className="font-heading font-bold text-white text-lg">500+</p>
                  <p className="text-xs text-white/50 font-accent">выпускников</p>
                </div>
              </div>
            </div>

            {/* Decorative corner accent */}
            <div
              className="absolute -top-3 -right-3 w-24 h-24 rounded-2xl pointer-events-none opacity-40"
              style={{
                background: 'linear-gradient(135deg, rgba(155,110,202,0.5), transparent)',
                filter: 'blur(12px)',
              }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle z-10">
        <button
          onClick={() => scrollToSection('#about')}
          className="flex flex-col items-center gap-1.5 transition-all duration-300 group"
          style={{ color: 'rgba(255,255,255,0.35)' }}
          onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.color = '#C9A96E'}
          onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.35)'}
        >
          <span className="text-[11px] font-accent tracking-widest uppercase">Листайте вниз</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #080810)' }}
      />
    </section>
  );
}
