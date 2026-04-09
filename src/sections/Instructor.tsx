import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const organizers = [
  {
    photo: '/terria.jpg',
    photoPosition: 'top center',
    name: 'Команда TERRIA',
    role: 'Производство мебели с 2014 года',
    accent: '#C4704F',
    facts: [
      'Опыт в производстве мебели с 2014 года',
      'Знание каждого этапа производства изнутри',
      '20+ успешных учеников, начавших с нуля',
      'Выход учеников на доход от 300 000 ₽',
    ],
  },
  {
    photo: '/galina.jpg',
    photoPosition: 'center 20%',
    photoScale: 1.25,
    name: 'Галина Гусарова',
    role: 'Хоумстейджер',
    accent: '#D4A96A',
    facts: [
      'Признанный лидер рынка комплектации жилой недвижимости в Москве',
      '200+ успешных реализаций квартир под ключ',
      'Призёр премий «Самый обсуждаемый рум тур года», «Обзор года»',
      'Своя команда с первого месяца карьеры в хоумстейджинге',
    ],
  },
];

export function Instructor() {
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
        { opacity: 0, y: 36, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.65, stagger: 0.18, ease: 'power3.out',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 82%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="instructor" ref={sectionRef} className="relative py-20 lg:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #353330 0%, #322F2C 50%, #353330 100%)' }}>

      {/* Мягкое свечение по центру */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(196,112,79,0.07) 0%, transparent 70%)', filter: 'blur(50px)' }} />

      {/* Блюпринт */}
      <div className="absolute inset-0 pointer-events-none pattern-blueprint opacity-30" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Заголовок */}
        <div ref={titleRef} className="text-center mb-12 lg:mb-14">
          <span className="badge-terra mb-5 inline-flex">Организаторы</span>
          <h2 className="font-heading font-bold leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#F5F0EB' }}>
            Кто проводит <span className="text-gradient">мастер-класс</span>
          </h2>
          <div className="section-divider max-w-xs mx-auto mt-5">
            <div className="diamond" />
          </div>
        </div>

        {/* Карточки */}
        <div ref={cardsRef} className="grid sm:grid-cols-2 gap-5 lg:gap-7">
          {organizers.map((org) => (
            <div key={org.name}
              className="relative rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, #403D3A, #3E3C39)',
                border: '1px solid rgba(255,255,255,0.08)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = 'translateY(-5px)';
                el.style.boxShadow = `0 20px 55px rgba(0,0,0,0.40), 0 0 0 1px ${org.accent}20`;
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = 'none';
              }}>

              {/* Фото-обложка */}
              <div className="relative w-full h-[400px] overflow-hidden">
                <img src={org.photo} alt={org.name}
                  className="absolute object-cover"
                  style={{
                    width: `${(org.photoScale || 1) * 100}%`,
                    height: `${(org.photoScale || 1) * 100}%`,
                    top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%)',
                    objectPosition: org.photoPosition,
                  }} />
                {/* Градиент снизу фото */}
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, #403D3A 0%, rgba(64,61,58,0.4) 40%, transparent 100%)' }} />
                {/* Терракотовая линия по нижнему краю фото */}
                <div className="absolute bottom-0 left-0 w-24 h-[2px]"
                  style={{ background: `linear-gradient(90deg, ${org.accent}, transparent)` }} />
              </div>

              {/* Контент */}
              <div className="px-7 lg:px-9 pb-8 lg:pb-10 pt-6">

                {/* Уголки */}
                <div className="absolute top-3 right-3 w-5 h-5 pointer-events-none"
                  style={{ borderTop: `1px solid ${org.accent}20`, borderRight: `1px solid ${org.accent}20` }} />
                <div className="absolute bottom-3 left-3 w-5 h-5 pointer-events-none"
                  style={{ borderBottom: `1px solid ${org.accent}20`, borderLeft: `1px solid ${org.accent}20` }} />

                <h3 className="font-heading font-bold mb-2"
                  style={{ fontSize: '1.75rem', color: '#F5F0EB' }}>
                  {org.name}
                </h3>

                <p className="font-accent font-medium text-base mb-6" style={{ color: org.accent }}>
                  {org.role}
                </p>

                <div className="h-px mb-6" style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.07), transparent)' }} />

                <ul className="space-y-4">
                  {org.facts.map((fact) => (
                    <li key={fact} className="flex items-start gap-3">
                      <CheckCircle2 className="w-[18px] h-[18px] flex-shrink-0 mt-0.5" style={{ color: org.accent }} />
                      <span className="font-body text-[0.95rem] leading-relaxed" style={{ color: '#B8AFA5' }}>{fact}</span>
                    </li>
                  ))}
                </ul>

                {/* Декоративный ромб */}
                <div className="absolute bottom-5 right-5 w-4 h-4 pointer-events-none opacity-[0.08]"
                  style={{ background: org.accent, transform: 'rotate(45deg)' }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Переход */}
      <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #3E3C39)' }} />
    </section>
  );
}
