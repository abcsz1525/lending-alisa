import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const items = [
  { n: '01', title: 'Как отличить хорошего мебельщика от плохого', description: 'Критерии оценки производителя. На что смотреть, какие вопросы задавать и как избежать типичных ошибок при выборе подрядчика.' },
  { n: '02', title: 'Как подготовить проект для точного просчёта', description: 'Чтобы получить максимально актуальную цену с первого касания. Что должен содержать грамотный проект — и как это экономит время и деньги.' },
  { n: '03', title: 'Материалы и фурнитура: что брать, а что — маркетинг', description: 'Реальные характеристики ДСП, МДФ, массива. Разбираем фасады, петли, направляющие — чтобы больше не попадаться на красивые обещания.' },
  { n: '04', title: 'Эргономика и функционал шкафов и мебели', description: 'Правильные пропорции, высоты, глубины. Как сделать мебель удобной для жизни, а не только красивой на рендере.' },
  { n: '05', title: 'Библиотека для программы проектирования', description: 'Актуальная готовая база элементов. Ссылка выдаётся участникам — можно пользоваться сразу после мастер-класса.' },
];

export function Program() {
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
        { opacity: 0, x: -20, y: 16 },
        { opacity: 1, x: 0, y: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: listRef.current, start: 'top 82%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="program" ref={sectionRef} className="relative py-20 lg:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #353330 0%, #322F2C 50%, #353330 100%)' }}>

      {/* Вертикальная декоративная терракотовая линия слева */}
      <div className="absolute top-0 bottom-0 left-0 w-[3px] hidden lg:block"
        style={{ background: 'linear-gradient(to bottom, transparent, #C4704F 20%, #C4704F 80%, transparent)' }} />

      {/* Блюпринт-паттерн */}
      <div className="absolute inset-0 pointer-events-none pattern-blueprint opacity-30" />

      {/* Декоративный ромб */}
      <div className="absolute top-16 right-[12%] w-10 h-10 pointer-events-none animate-diamond hidden lg:block"
        style={{ border: '1px solid rgba(196,112,79,0.15)', transform: 'rotate(45deg)' }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Заголовок */}
        <div ref={titleRef} className="mb-12 lg:mb-14">
          <span className="badge-terra mb-5 inline-flex">Программа</span>
          <h2 className="font-heading font-bold leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#F5F0EB' }}>
            Что вы получите{' '}
            <span className="text-gradient">за 2 дня</span>
          </h2>
          <p className="font-body mt-3" style={{ color: '#8C837A', fontSize: '0.95rem' }}>
            Практические знания, которые применяются в работе сразу
          </p>
          {/* Декоративная линия */}
          <div className="flex items-center gap-3 mt-5">
            <div className="h-[1px] w-16" style={{ background: 'linear-gradient(90deg, #C4704F, transparent)' }} />
            <div className="w-2 h-2" style={{ background: '#C4704F', transform: 'rotate(45deg)', opacity: 0.5 }} />
          </div>
        </div>

        {/* Список с вертикальной линией-коннектором */}
        <div ref={listRef} className="relative space-y-3">
          {/* Вертикальная линия-таймлайн */}
          <div className="absolute left-[29px] top-6 bottom-6 w-[1px] hidden sm:block"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(196,112,79,0.25) 10%, rgba(196,112,79,0.25) 90%, transparent)' }} />

          {items.map((item, i) => (
            <div key={item.n}
              className="relative flex gap-5 p-5 sm:p-6 rounded-2xl overflow-hidden"
              style={{
                background: i % 2 === 0
                  ? 'linear-gradient(145deg, #3E3C39, #3B3936)'
                  : 'linear-gradient(145deg, #2E2C29, #2A2825)',
                border: '1px solid rgba(255,255,255,0.07)',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = 'linear-gradient(145deg, #403D3A, #3E3C39)';
                el.style.borderColor = 'rgba(196,112,79,0.28)';
                el.style.transform = 'translateX(5px)';
                el.style.boxShadow = '0 8px 30px rgba(0,0,0,0.3), 0 0 20px rgba(196,112,79,0.04)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = i % 2 === 0
                  ? 'linear-gradient(145deg, #3E3C39, #3B3936)'
                  : 'linear-gradient(145deg, #2E2C29, #2A2825)';
                el.style.borderColor = 'rgba(255,255,255,0.07)';
                el.style.transform = 'translateX(0)';
                el.style.boxShadow = 'none';
              }}>

              {/* Тонкая левая линия — терракота */}
              <div className="absolute top-0 left-0 bottom-0 w-[2px] rounded-l-2xl"
                style={{ background: 'linear-gradient(to bottom, transparent, rgba(196,112,79,0.5), transparent)' }} />

              {/* Номер с терракотовой точкой */}
              <div className="relative flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center font-accent font-bold text-sm"
                style={{
                  background: 'rgba(196,112,79,0.12)',
                  border: '1px solid rgba(196,112,79,0.22)',
                  color: '#C4704F',
                }}>
                {item.n}
              </div>

              {/* Текст */}
              <div className="pt-0.5">
                <h3 className="font-heading font-semibold mb-1.5"
                  style={{ fontSize: '1.1rem', color: '#F5F0EB', lineHeight: 1.3 }}>
                  {item.title}
                </h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: '#8C837A' }}>
                  {item.description}
                </p>
              </div>

              {/* Декоративный ромб в углу */}
              <div className="absolute bottom-3 right-3 w-3 h-3 pointer-events-none opacity-[0.08]"
                style={{ background: '#C4704F', transform: 'rotate(45deg)' }} />
            </div>
          ))}
        </div>
      </div>

      {/* Переход вниз */}
      <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #3E3C39)' }} />
    </section>
  );
}
