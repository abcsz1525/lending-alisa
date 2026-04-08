import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2 } from 'lucide-react';
import { MessengerButtons } from '../components/MessengerButtons';

gsap.registerPlugin(ScrollTrigger);

const included = [
  'Как отличать хороших мебельщиков от плохих',
  'Подготовка проекта для точного просчёта',
  'Разбор материалов и фурнитуры',
  'Эргономика и функционал мебели',
  'Библиотека для программы проектирования',
];

export function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef   = useRef<HTMLDivElement>(null);
  const cardRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: titleRef.current, start: 'top 85%' } }
      );
      gsap.fromTo(cardRef.current,
        { opacity: 0, y: 36, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: cardRef.current, start: 'top 82%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="pricing" ref={sectionRef} className="relative py-20 lg:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #3E3C39 0%, #3B3936 50%, #3E3C39 100%)' }}>

      {/* Мягкое терракотовое свечение */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(196,112,79,0.10) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      {/* Блюпринт */}
      <div className="absolute inset-0 pointer-events-none pattern-blueprint opacity-25" />

      {/* Декоративные ромбы */}
      <div className="absolute top-20 left-[10%] w-10 h-10 pointer-events-none animate-diamond hidden lg:block"
        style={{ border: '1px solid rgba(196,112,79,0.12)', transform: 'rotate(45deg)' }} />
      <div className="absolute bottom-32 right-[10%] w-6 h-6 pointer-events-none animate-diamond animation-delay-500 hidden lg:block"
        style={{ border: '1px solid rgba(212,169,106,0.10)', transform: 'rotate(45deg)' }} />

      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Заголовок */}
        <div ref={titleRef} className="text-center mb-10">
          <span className="badge-terra mb-5 inline-flex">Стоимость участия</span>
          <h2 className="font-heading font-bold leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#F5F0EB' }}>
            Участие в <span className="text-gradient">мастер-классе</span>
          </h2>
          <div className="section-divider max-w-xs mx-auto mt-5">
            <div className="diamond" />
          </div>
        </div>

        {/* Карточка */}
        <div ref={cardRef} className="relative rounded-3xl overflow-hidden"
          style={{
            background: 'linear-gradient(145deg, #3A3835, #353330)',
            border: '1px solid rgba(196,112,79,0.28)',
            boxShadow: '0 0 0 1px rgba(196,112,79,0.08), 0 24px 70px rgba(0,0,0,0.45), 0 0 40px rgba(196,112,79,0.06)',
          }}>

          {/* Верхняя терракотовая линия */}
          <div className="absolute top-0 left-0 right-0 h-[2px]"
            style={{ background: 'linear-gradient(90deg, #C4704F, #D4845A 50%, #D4A96A)' }} />

          {/* Угловые декоративные элементы */}
          <div className="absolute top-4 right-4 w-6 h-6 pointer-events-none"
            style={{ borderTop: '1px solid rgba(196,112,79,0.20)', borderRight: '1px solid rgba(196,112,79,0.20)' }} />
          <div className="absolute bottom-4 left-4 w-6 h-6 pointer-events-none"
            style={{ borderBottom: '1px solid rgba(196,112,79,0.20)', borderLeft: '1px solid rgba(196,112,79,0.20)' }} />

          {/* Угловой геометрический акцент */}
          <div className="absolute top-0 right-0 w-28 h-28 pointer-events-none"
            style={{ background: 'linear-gradient(225deg, rgba(196,112,79,0.10) 0%, transparent 60%)' }} />

          <div className="p-7 sm:p-10">

            {/* Цена */}
            <div className="text-center mb-8">
              <div className="flex items-baseline justify-center gap-2 mb-1.5">
                <span className="font-heading font-bold text-gradient"
                  style={{ fontSize: 'clamp(3.5rem, 8vw, 5rem)', lineHeight: 1 }}>
                  15 000
                </span>
                <span className="font-heading text-2xl" style={{ color: '#6C635A' }}>₽</span>
              </div>
            </div>

            {/* Разделитель с ромбом */}
            <div className="section-divider mb-7">
              <div className="diamond" />
            </div>

            {/* Включено */}
            <ul className="space-y-3 mb-8">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#C4704F' }} />
                  <span className="font-body text-sm leading-relaxed" style={{ color: '#B8AFA5' }}>{item}</span>
                </li>
              ))}
            </ul>

            {/* Кнопки */}
            <div className="flex flex-col items-center gap-3">
              <p className="font-accent text-[11px] tracking-widest uppercase" style={{ color: '#6C635A' }}>
                Записаться через мессенджер
              </p>
              <div className="[&>div]:flex-nowrap">
                <MessengerButtons size="large" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
