import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2 } from 'lucide-react';
import { MessengerButtons } from '../components/MessengerButtons';

gsap.registerPlugin(ScrollTrigger);

const included = [
  '2 дня мастер-класса (3 часа в день)',
  'Как отличать хороших мебельщиков от плохих',
  'Подготовка проекта для точного просчёта',
  'Разбор материалов и фурнитуры',
  'Эргономика и функционал мебели',
  'Библиотека для программы проектирования',
];

export function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: titleRef.current, start: 'top 85%', toggleActions: 'play none none none' } }
      );
      gsap.fromTo(cardRef.current,
        { opacity: 0, y: 36, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: cardRef.current, start: 'top 80%', toggleActions: 'play none none none' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="pricing" ref={sectionRef}
      className="py-20 lg:py-32"
      style={{ backgroundColor: '#3E3C39' }}>

      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-10">
          <p className="font-accent text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#D4A96A' }}>
            Стоимость участия
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white leading-tight">
            Участие в <span className="text-gradient">мастер-классе</span>
          </h2>
        </div>

        {/* Card */}
        <div ref={cardRef}
          className="rounded-3xl overflow-hidden relative"
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(212,169,106,0.25)',
            boxShadow: '0 0 0 1px rgba(212,169,106,0.08), 0 24px 70px rgba(0,0,0,0.4)',
          }}>

          {/* Top gradient line */}
          <div className="absolute top-0 left-0 right-0 h-0.5"
            style={{ background: 'linear-gradient(90deg, transparent, #D4A96A, transparent)' }} />

          <div className="p-7 sm:p-10">
            {/* Price */}
            <div className="text-center mb-8">
              <div className="flex items-baseline justify-center gap-2 mb-1">
                <span className="font-heading text-6xl sm:text-7xl font-bold text-gradient">15 000</span>
                <span className="font-heading text-2xl text-white/35">₽</span>
              </div>
              <p className="text-white/45 font-body text-sm">18 и 19 апреля · БЦ Технопарк плаза · 3 ч/день</p>
            </div>

            <div className="h-px mb-7" style={{ background: 'rgba(255,255,255,0.08)' }} />

            {/* Included */}
            <ul className="space-y-3 mb-8">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#D4A96A' }} />
                  <span className="text-sm sm:text-base text-white/70 font-body leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            {/* Messenger buttons */}
            <div className="flex flex-col items-center gap-3">
              <p className="text-white/35 text-xs font-accent tracking-wider uppercase">Записаться через мессенджер</p>
              <MessengerButtons size="default" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
