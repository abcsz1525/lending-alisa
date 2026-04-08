import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 15, suffix: '+', label: 'Лет опыта преподавателя' },
  { value: 500, suffix: '+', label: 'Выпускников курса' },
  { value: 98, suffix: '%', label: 'Положительных отзывов' },
  { value: 2, suffix: '', label: 'Дня интенсива' },
];

export function AboutCourse() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: titleRef.current, start: 'top 82%', toggleActions: 'play none none none' } }
      );
      gsap.fromTo(contentRef.current?.children || [],
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: contentRef.current, start: 'top 78%', toggleActions: 'play none none none' } }
      );
      gsap.fromTo(imageRef.current,
        { opacity: 0, x: -30, scale: 0.97 },
        { opacity: 1, x: 0, scale: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: imageRef.current, start: 'top 78%', toggleActions: 'play none none none' } }
      );

      // Count-up animation for stats
      const statElements = statsRef.current?.querySelectorAll('.stat-value');
      statElements?.forEach((el, index) => {
        const targetValue = stats[index].value;
        gsap.fromTo({ value: 0 }, { value: targetValue }, {
          duration: 2.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
          onUpdate: function () {
            el.textContent = Math.round(this.targets()[0].value).toString();
          },
        });
      });

      gsap.fromTo(
        statsRef.current?.children || [],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: statsRef.current, start: 'top 82%', toggleActions: 'play none none none' } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 lg:py-36 relative overflow-hidden"
      style={{ backgroundColor: '#080810' }}
    >
      {/* Subtle background accent */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(155,110,202,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-20">
          {/* Image */}
          <div ref={imageRef} className="relative order-2 lg:order-1">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                boxShadow: '0 0 0 1px rgba(255,255,255,0.07), 0 24px 80px rgba(0,0,0,0.7)',
              }}
            >
              <img
                src="/drawing-hands.jpg"
                alt="Процесс проектирования"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,8,16,0.4), transparent 60%)' }} />
            </div>

            {/* Decorative border accent */}
            <div
              className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl pointer-events-none -z-10"
              style={{ border: '1px solid rgba(201,169,110,0.2)' }}
            />

            {/* Corner glow */}
            <div
              className="absolute -top-4 -left-4 w-32 h-32 rounded-full pointer-events-none opacity-50"
              style={{
                background: 'radial-gradient(circle, rgba(155,110,202,0.25) 0%, transparent 70%)',
                filter: 'blur(16px)',
              }}
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2
              ref={titleRef}
              className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold leading-tight mb-8 text-white"
            >
              Что вас ждет на{' '}
              <span className="text-gradient">курсе</span>
            </h2>

            <div ref={contentRef} className="space-y-6">
              <p className="text-white/60 leading-relaxed text-lg font-body">
                За 2 интенсивных дня вы освоите основы проектирования мебели — от
                понимания эргономики до создания технических чертежей.
              </p>
              <p className="text-white/60 leading-relaxed text-lg font-body">
                Курс разработан специально для хоумстейджеров и дизайнеров
                интерьера, которые хотят расширить свои компетенции и предлагать
                клиентам комплексные решения.
              </p>

              {/* Quote block */}
              <div
                className="relative flex items-start gap-4 pt-4 pb-2 pl-6 pr-4 rounded-xl"
                style={{
                  background: 'rgba(201,169,110,0.05)',
                  borderLeft: '2px solid rgba(201,169,110,0.4)',
                }}
              >
                <p className="text-white/70 italic leading-relaxed font-body">
                  "Мебель — это не просто предметы. Это инструмент создания
                  пространства, которое вдохновляет."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-glow mb-16" />

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group rounded-2xl p-6 lg:p-8 text-center cursor-default transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = 'rgba(201,169,110,0.06)';
                el.style.borderColor = 'rgba(201,169,110,0.25)';
                el.style.boxShadow = '0 0 30px rgba(201,169,110,0.08)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = 'rgba(255,255,255,0.03)';
                el.style.borderColor = 'rgba(255,255,255,0.07)';
                el.style.boxShadow = 'none';
              }}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 50% 0%, rgba(201,169,110,0.06) 0%, transparent 70%)',
                }}
              />
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="stat-value font-heading text-4xl lg:text-5xl font-bold text-gradient">
                  0
                </span>
                <span className="font-heading text-2xl lg:text-3xl font-bold text-gradient">
                  {stat.suffix}
                </span>
              </div>
              <p className="text-sm lg:text-base text-white/45 font-body font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
