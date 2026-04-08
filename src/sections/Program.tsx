import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const programItems = [
  {
    n: '01',
    title: 'Как отличить хорошего мебельщика от плохого',
    description: 'Критерии оценки производителя. На что смотреть, какие вопросы задавать и как избежать типичных ошибок при выборе подрядчика.',
  },
  {
    n: '02',
    title: 'Как подготовить проект для точного просчёта',
    description: 'Чтобы получить максимально актуальную цену с первого касания. Что должен содержать грамотный проект — и как это экономит время и деньги.',
  },
  {
    n: '03',
    title: 'Материалы и фурнитура: что брать, а что — маркетинг',
    description: 'Реальные характеристики ДСП, МДФ, массива. Разбираем фасады, петли, направляющие — чтобы больше не попадаться на красивые обещания.',
  },
  {
    n: '04',
    title: 'Эргономика и функционал шкафов и мебели',
    description: 'Правильные пропорции, высоты, глубины. Как сделать мебель удобной для жизни, а не только красивой на рендере.',
  },
  {
    n: '05',
    title: 'Библиотека для программы проектирования',
    description: 'Актуальная готовая база элементов. Ссылка выдаётся участникам — можно пользоваться сразу после мастер-класса.',
  },
];

export function Program() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: titleRef.current, start: 'top 85%', toggleActions: 'play none none none' } }
      );
      gsap.fromTo(listRef.current?.children || [],
        { opacity: 0, y: 24, x: -16 },
        { opacity: 1, y: 0, x: 0, duration: 0.5, stagger: 0.09, ease: 'power3.out',
          scrollTrigger: { trigger: listRef.current, start: 'top 80%', toggleActions: 'play none none none' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="program" ref={sectionRef}
      className="py-20 lg:py-32"
      style={{ background: 'linear-gradient(180deg, #353330 0%, #3E3C39 100%)' }}>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-12 lg:mb-14">
          <p className="font-accent text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#D4A96A' }}>
            Программа
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-white leading-tight mb-3">
            Что вы получите <span className="text-gradient">за 2 дня</span>
          </h2>
          <p className="text-white/50 font-body text-sm sm:text-base">
            Практические знания, которые применяются в работе сразу
          </p>
        </div>

        {/* List */}
        <div ref={listRef} className="space-y-3">
          {programItems.map((item) => (
            <div key={item.n}
              className="flex gap-5 p-5 sm:p-6 rounded-2xl"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.09)',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = 'rgba(212,169,106,0.07)';
                el.style.borderColor = 'rgba(212,169,106,0.22)';
                el.style.transform = 'translateX(4px)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = 'rgba(255,255,255,0.05)';
                el.style.borderColor = 'rgba(255,255,255,0.09)';
                el.style.transform = 'translateX(0)';
              }}>
              {/* Number */}
              <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-heading font-bold text-sm"
                style={{ background: 'rgba(212,169,106,0.14)', border: '1px solid rgba(212,169,106,0.22)', color: '#D4A96A' }}>
                {item.n}
              </div>
              {/* Text */}
              <div className="pt-0.5">
                <h3 className="font-heading text-base sm:text-lg font-semibold text-white mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed font-body">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
