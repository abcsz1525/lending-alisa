import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, MapPin, Clock, Laptop, Banknote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const details = [
  { icon: Calendar, label: 'Даты', value: '18 и 19 апреля', color: '#D4A96A' },
  { icon: MapPin, label: 'Место', value: 'БЦ Технопарк плаза', color: '#A09890' },
  { icon: Clock, label: 'Длительность', value: '3 часа в день', color: '#A09890' },
  { icon: Laptop, label: 'Что взять', value: 'Ноутбук с программой', note: 'Ссылка выдаётся участникам', color: '#A09890' },
  { icon: Banknote, label: 'Стоимость', value: '15 000 ₽', color: '#D4A96A', highlight: true },
];

export function AboutCourse() {
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
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.09, ease: 'power3.out',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 80%', toggleActions: 'play none none none' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef}
      className="py-20 lg:py-32"
      style={{ backgroundColor: '#3E3C39' }}>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-12 lg:mb-14">
          <p className="font-accent text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#D4A96A' }}>
            Детали
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-white leading-tight">
            Формат и <span className="text-gradient">детали</span>
          </h2>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {details.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label}
                className="relative rounded-2xl p-6"
                style={{
                  background: item.highlight ? 'rgba(212,169,106,0.10)' : 'rgba(255,255,255,0.05)',
                  border: item.highlight ? '1px solid rgba(212,169,106,0.30)' : '1px solid rgba(255,255,255,0.09)',
                  transition: 'transform 0.25s ease',
                }}
                onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)'}
                onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'}>

                {/* Top accent */}
                <div className="absolute top-0 left-6 right-6 h-px rounded-full"
                  style={{ background: `linear-gradient(90deg, transparent, ${item.color}55, transparent)` }} />

                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${item.color}18`, border: `1px solid ${item.color}28` }}>
                  <Icon className="w-5 h-5" style={{ color: item.color }} />
                </div>

                <p className="text-xs font-accent font-semibold tracking-wider uppercase text-white/40 mb-1">
                  {item.label}
                </p>
                <p className="font-heading font-semibold text-base sm:text-lg leading-snug"
                  style={{ color: item.highlight ? '#D4A96A' : 'white' }}>
                  {item.value}
                </p>
                {item.note && (
                  <p className="text-xs text-white/35 mt-1 font-body">{item.note}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
