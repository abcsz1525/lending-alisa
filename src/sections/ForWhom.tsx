import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Home, Palette, Sparkles, Building, GraduationCap, Hammer } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const audiences = [
  {
    icon: Home,
    title: 'Хоумстейджеры',
    description: 'Узнайте, как подбирать и заказывать мебель для staging, которая подчеркнёт достоинства любого пространства',
    color: '#C9A96E',
  },
  {
    icon: Palette,
    title: 'Дизайнеры интерьера',
    description: 'Расширьте свои компетенции и начните создавать уникальную мебель под конкретные проекты',
    color: '#9B6ECA',
  },
  {
    icon: Sparkles,
    title: 'Декораторы',
    description: 'Научитесь понимать технические аспекты мебели для более эффективной работы с подрядчиками',
    color: '#6EA8C9',
  },
  {
    icon: Building,
    title: 'Владельцы бизнеса',
    description: 'Получите знания для контроля качества мебельной продукции в ваших проектах',
    color: '#C9A96E',
  },
  {
    icon: GraduationCap,
    title: 'Начинающие дизайнеры',
    description: 'Сделайте первый шаг в профессию с практическими навыками проектирования',
    color: '#9B6ECA',
  },
  {
    icon: Hammer,
    title: 'Любители DIY',
    description: 'Освойте основы для создания собственных мебельных проектов',
    color: '#6EA8C9',
  },
];

export function ForWhom() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: titleRef.current, start: 'top 82%', toggleActions: 'play none none none' } }
      );
      gsap.fromTo(cardsRef.current?.children || [],
        { opacity: 0, y: 36, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.55, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 78%', toggleActions: 'play none none none' } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="for-whom"
      ref={sectionRef}
      className="py-24 lg:py-36 relative overflow-hidden"
      style={{ backgroundColor: '#080810' }}
    >
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 80% 20%, rgba(155,110,202,0.07) 0%, transparent 60%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-16">
          <p className="font-accent text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C9A96E' }}>
            Аудитория
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-white leading-tight mb-4">
            Для кого этот <span className="text-gradient">курс</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto font-body">
            Идеально подходит для
          </p>
        </div>

        {/* Cards */}
        <div
          ref={cardsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
        >
          {audiences.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl p-6 lg:p-7 cursor-default transition-all duration-400 overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  transition: 'all 0.35s ease',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.background = `rgba(${item.color === '#C9A96E' ? '201,169,110' : item.color === '#9B6ECA' ? '155,110,202' : '110,168,201'},0.07)`;
                  el.style.borderColor = `${item.color}35`;
                  el.style.transform = 'translateY(-4px)';
                  el.style.boxShadow = `0 16px 48px rgba(0,0,0,0.4), 0 0 0 1px ${item.color}20`;
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.background = 'rgba(255,255,255,0.025)';
                  el.style.borderColor = 'rgba(255,255,255,0.07)';
                  el.style.transform = 'translateY(0)';
                  el.style.boxShadow = 'none';
                }}
              >
                {/* Top glow */}
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${item.color}40, transparent)`,
                    opacity: 0,
                    transition: 'opacity 0.3s',
                  }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
                  style={{
                    background: `${item.color}18`,
                    border: `1px solid ${item.color}25`,
                  }}
                >
                  <Icon className="w-6 h-6 transition-colors duration-300" style={{ color: item.color }} />
                </div>

                <h3 className="font-heading text-lg font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed font-body">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
