import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, BookOpen, Star, Instagram, Youtube } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const credentials = [
  { icon: BookOpen, text: 'Образование: МГХПА им. Строганова' },
  { icon: Award, text: 'Член Союза дизайнеров России' },
  { icon: Star, text: 'Публикации в AD, ELLE DECORATION, INMYROOM' },
];

export function Instructor() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(imageRef.current,
        { opacity: 0, scale: 0.94, x: -30 },
        { opacity: 1, scale: 1, x: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: imageRef.current, start: 'top 78%', toggleActions: 'play none none none' } }
      );
      gsap.fromTo(contentRef.current?.children || [],
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: contentRef.current, start: 'top 78%', toggleActions: 'play none none none' } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-36 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #080810 0%, #0D0D18 100%)' }}
    >
      {/* Decorative background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 0% 50%, rgba(155,110,202,0.08) 0%, transparent 60%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 60% at 100% 50%, rgba(201,169,110,0.06) 0%, transparent 60%)',
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image */}
          <div ref={imageRef} className="relative">
            {/* Glow behind */}
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(155,110,202,0.20) 0%, transparent 70%)',
                filter: 'blur(40px)',
                transform: 'scale(1.15)',
              }}
            />

            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                boxShadow: '0 0 0 1px rgba(255,255,255,0.08), 0 32px 80px rgba(0,0,0,0.7)',
              }}
            >
              <img
                src="/instructor-portrait.jpg"
                alt="Елена Воробьева"
                className="w-full h-auto object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(8,8,16,0.6) 0%, transparent 50%)' }}
              />
            </div>

            {/* Gold border accent */}
            <div
              className="absolute -bottom-4 -left-4 w-full h-full rounded-2xl -z-10 pointer-events-none"
              style={{ border: '1px solid rgba(201,169,110,0.20)' }}
            />

            {/* Experience badge */}
            <div
              className="absolute bottom-6 right-6 px-5 py-4 rounded-2xl text-center"
              style={{
                background: 'rgba(8,8,16,0.90)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(201,169,110,0.25)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
              }}
            >
              <p className="font-heading text-3xl font-bold text-gradient">15+</p>
              <p className="text-xs text-white/50 font-accent mt-0.5">лет опыта</p>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-0">
            <p className="font-accent text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C9A96E' }}>
              Ваш преподаватель
            </p>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-white leading-tight mb-3">
              Елена Воробьева
            </h2>

            <p className="mb-6" style={{ color: 'rgba(201,169,110,0.85)', fontSize: '1.05rem' }}>
              Главный дизайнер студии VOROBEY DESIGN
            </p>

            <p className="text-white/55 leading-relaxed font-body mb-8 text-[0.95rem]">
              Практикующий дизайнер интерьеров и мебели с 15-летним опытом.
              Автор более 200 успешных проектов от квартир до загородных домов.
              Сертифицированный специалист по работе с итальянскими и
              немецкими фабриками.
            </p>

            {/* Credentials */}
            <div className="space-y-3 mb-8">
              {credentials.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(201,169,110,0.12)', border: '1px solid rgba(201,169,110,0.20)' }}
                    >
                      <Icon className="w-4 h-4" style={{ color: '#C9A96E' }} />
                    </div>
                    <span className="text-sm text-white/65 font-body">{item.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {[
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Youtube, label: 'YouTube' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.10)',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = 'rgba(201,169,110,0.15)';
                    el.style.borderColor = 'rgba(201,169,110,0.4)';
                    el.style.boxShadow = '0 0 16px rgba(201,169,110,0.2)';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = 'rgba(255,255,255,0.06)';
                    el.style.borderColor = 'rgba(255,255,255,0.10)';
                    el.style.boxShadow = 'none';
                  }}
                >
                  <Icon className="w-4.5 h-4.5 text-white/70" style={{ width: '18px', height: '18px' }} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
