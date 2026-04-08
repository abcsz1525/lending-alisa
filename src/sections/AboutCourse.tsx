import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, MapPin, Clock, Laptop, Banknote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const details = [
  { icon: Calendar, label: 'Даты и время', value: '18 и 19 апреля, 13:00 – 16:00', accent: '#C4704F' },
  { icon: MapPin,   label: 'Место',        value: 'Москва, БЦ Технопарк Плаза',         accent: '#D4A96A' },

  { icon: Laptop,   label: 'Что взять',    value: 'Ноутбук с программой',       accent: '#D4A96A', note: 'Ссылка выдаётся участникам' },
  { icon: Banknote, label: 'Стоимость',    value: '15 000 ₽',                   accent: '#C4704F', highlight: true },
];

export function AboutCourse() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef   = useRef<HTMLDivElement>(null);
  const listRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: titleRef.current, start: 'top 85%' } }
      );
      gsap.fromTo(listRef.current?.children || [],
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.07, ease: 'power3.out',
          scrollTrigger: { trigger: listRef.current, start: 'top 82%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-20 lg:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #3E3C39 0%, #3B3936 50%, #3E3C39 100%)' }}>

      {/* Лёгкий геометрический паттерн */}
      <div className="absolute inset-0 pointer-events-none pattern-blueprint opacity-30" />

      {/* Мягкое свечение */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(196,112,79,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Заголовок */}
        <div ref={titleRef} className="text-center mb-10 lg:mb-12">
          <span className="badge-terra mb-5 inline-flex">Детали</span>
          <h2 className="font-heading font-bold leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#F5F0EB' }}>
            Формат и <span className="text-gradient">детали</span>
          </h2>
          <div className="section-divider max-w-xs mx-auto mt-5">
            <div className="diamond" />
          </div>
        </div>

        {/* Список строк */}
        <div ref={listRef}>
          {details.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={item.label}>
                {/* Строка */}
                <div
                  className="flex items-center gap-4 py-4 transition-all duration-200 group"
                  style={{ cursor: 'default' }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.paddingLeft = '8px';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.paddingLeft = '0px';
                  }}
                >
                  {/* Иконка */}
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${item.accent}12`, border: `1px solid ${item.accent}22` }}>
                    <Icon className="w-[18px] h-[18px]" style={{ color: item.accent }} />
                  </div>

                  {/* Лейбл */}
                  <span className="font-accent font-semibold text-xs uppercase tracking-wider flex-shrink-0 w-28"
                    style={{ color: '#6C635A' }}>
                    {item.label}
                  </span>

                  {/* Пунктирная линия-заполнитель */}
                  <div className="flex-1 border-b border-dashed mx-1" style={{ borderColor: 'rgba(196,112,79,0.15)' }} />

                  {/* Значение */}
                  <div className="text-right flex-shrink-0">
                    <span className="font-heading font-semibold text-lg"
                      style={{ color: item.highlight ? '#D4845A' : '#F5F0EB' }}>
                      {item.value}
                    </span>
                    {item.note && (
                      <p className="font-body text-xs mt-0.5" style={{ color: '#6C635A' }}>{item.note}</p>
                    )}
                  </div>
                </div>

                {/* Разделитель между строками */}
                {i < details.length - 1 && (
                  <div className="h-px"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' }} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
