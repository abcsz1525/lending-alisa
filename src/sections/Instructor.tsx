import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const organizers = [
  {
    name: 'Команда TERRIA',
    role: 'Производство мебели с 2014 года',
    colorLine: '#D4A96A',
    facts: [
      'Опыт в производстве мебели с 2014 года',
      'Знание каждого этапа производства изнутри',
      '20+ успешных учеников, начавших с нуля',
      'Выход учеников на доход от 300 000 ₽',
    ],
  },
  {
    name: 'Галина Гусарова',
    role: 'Хоумстейджер',
    colorLine: '#A09890',
    facts: [
      'Признанный лидер рынка комплектации жилой недвижимости в Москве и Дубае',
      '200+ успешных реализаций квартир под ключ',
      'Призёр премии «Самый обсуждаемый рум тур года»',
      'Призёр премии «Обзор года»',
    ],
  },
];

export function Instructor() {
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
        { opacity: 0, y: 36, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.65, stagger: 0.18, ease: 'power3.out',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 80%', toggleActions: 'play none none none' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="instructor" ref={sectionRef}
      className="py-20 lg:py-32"
      style={{ background: 'linear-gradient(180deg, #353330 0%, #3E3C39 100%)' }}>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-12 lg:mb-14">
          <p className="font-accent text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#D4A96A' }}>
            Организаторы
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-white leading-tight">
            Кто проводит <span className="text-gradient">мастер-класс</span>
          </h2>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="grid sm:grid-cols-2 gap-5 lg:gap-7">
          {organizers.map((org) => (
            <div key={org.name}
              className="relative rounded-2xl p-7 lg:p-9 overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.09)',
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

              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                style={{ background: `linear-gradient(90deg, ${org.colorLine}, transparent)` }} />

              {/* Avatar placeholder */}
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 font-heading font-bold text-2xl"
                style={{ background: `${org.colorLine}18`, border: `1px solid ${org.colorLine}28`, color: org.colorLine }}>
                {org.name.charAt(0)}
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-1">
                {org.name}
              </h3>
              <p className="font-accent text-sm mb-5" style={{ color: org.colorLine }}>
                {org.role}
              </p>

              <div className="h-px mb-5" style={{ background: 'rgba(255,255,255,0.07)' }} />

              <ul className="space-y-3">
                {org.facts.map((fact) => (
                  <li key={fact} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: org.colorLine }} />
                    <span className="text-sm text-white/65 font-body leading-relaxed">{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
