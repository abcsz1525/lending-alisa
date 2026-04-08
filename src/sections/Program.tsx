import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const day1Modules = [
  { number: '01', title: 'Введение в проектирование мебели', description: 'Основные принципы и терминология. Понимание процесса от идеи до готового изделия.' },
  { number: '02', title: 'Эргономика и антропометрия', description: 'Как создавать комфортную мебель. Стандарты размеров для разных типов помещений и пользователей.' },
  { number: '03', title: 'Материалы и фурнитура', description: 'Выбор материалов для разных задач. Древесина, ДСП, МДФ, фурнитура — что и когда использовать.' },
  { number: '04', title: 'Стили и тренды', description: 'Актуальные направления в дизайне мебели. Как сочетать классику и современность.' },
];

const day2Modules = [
  { number: '05', title: 'Создание эскизов', description: 'От идеи к бумаге. Быстрые наброски и детальные проработки. Работа с перспективой.' },
  { number: '06', title: 'Технические чертежи', description: 'Как читать и создавать чертежи. Обозначения, размеры, сечения — всё, что нужно знать.' },
  { number: '07', title: 'Работа с поставщиками', description: 'Нюансы производства. Как общаться с фабриками, что учитывать при заказе.' },
  { number: '08', title: 'Презентация проекта', description: 'Показываем клиенту. Как эффективно презентовать мебельные решения и получать одобрение.' },
];

interface ModuleItemProps {
  number: string;
  title: string;
  description: string;
  isOpen: boolean;
  onClick: () => void;
  accentColor: string;
}

function ModuleItem({ number, title, description, isOpen, onClick, accentColor }: ModuleItemProps) {
  return (
    <div
      className="overflow-hidden transition-all duration-200"
      style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
    >
      <button
        onClick={onClick}
        className="w-full py-4 px-5 flex items-center gap-4 text-left group transition-all duration-200 rounded-lg"
        style={{ background: isOpen ? 'rgba(255,255,255,0.03)' : 'transparent' }}
        onMouseEnter={e => {
          if (!isOpen) (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.02)';
        }}
        onMouseLeave={e => {
          if (!isOpen) (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
        }}
      >
        <span
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold font-accent transition-all duration-200"
          style={{
            background: isOpen ? `${accentColor}25` : 'rgba(255,255,255,0.06)',
            color: isOpen ? accentColor : 'rgba(255,255,255,0.4)',
            border: `1px solid ${isOpen ? accentColor + '40' : 'rgba(255,255,255,0.08)'}`,
          }}
        >
          {number}
        </span>
        <span
          className="flex-grow font-medium text-sm transition-colors duration-200"
          style={{ color: isOpen ? '#fff' : 'rgba(255,255,255,0.7)' }}
        >
          {title}
        </span>
        <ChevronDown
          className="w-4 h-4 flex-shrink-0 transition-transform duration-300"
          style={{
            color: isOpen ? accentColor : 'rgba(255,255,255,0.3)',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isOpen ? '120px' : '0px', opacity: isOpen ? 1 : 0 }}
      >
        <p className="px-5 pb-4 pl-17 text-sm text-white/50 leading-relaxed pl-[72px]">
          {description}
        </p>
      </div>
    </div>
  );
}

export function Program() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const day1Ref = useRef<HTMLDivElement>(null);
  const day2Ref = useRef<HTMLDivElement>(null);

  const [openModules, setOpenModules] = useState<Record<string, boolean>>({ 'day1-0': true });

  const toggleModule = (day: string, index: number) => {
    const key = `${day}-${index}`;
    setOpenModules(prev => ({ ...prev, [key]: !prev[key] }));
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: titleRef.current, start: 'top 82%', toggleActions: 'play none none none' } }
      );
      gsap.fromTo(day1Ref.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: day1Ref.current, start: 'top 78%', toggleActions: 'play none none none' } }
      );
      gsap.fromTo(day2Ref.current,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: day2Ref.current, start: 'top 78%', toggleActions: 'play none none none' } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="program"
      ref={sectionRef}
      className="py-24 lg:py-36 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #080810 0%, #0D0D18 50%, #080810 100%)' }}
    >
      {/* Background decoration */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(201,169,110,0.04) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-16">
          <p className="font-accent text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C9A96E' }}>
            Программа курса
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-white leading-tight mb-4">
            Программа <span className="text-gradient">мастер-класса</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto font-body">
            Интенсивное обучение с фокусом на практику
          </p>
        </div>

        {/* Days Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Day 1 */}
          <div
            ref={day1Ref}
            className="rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.07)',
              boxShadow: '0 4px 40px rgba(0,0,0,0.4)',
            }}
          >
            {/* Header */}
            <div
              className="px-6 py-5 flex items-center gap-4"
              style={{
                background: 'linear-gradient(135deg, rgba(155,110,202,0.15), rgba(100,80,160,0.10))',
                borderBottom: '1px solid rgba(155,110,202,0.15)',
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(155,110,202,0.20)' }}
              >
                <Calendar className="w-5 h-5" style={{ color: '#9B6ECA' }} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <h3 className="font-heading text-xl font-semibold text-white">День 1</h3>
                  <span
                    className="text-[11px] font-accent font-medium px-2 py-0.5 rounded-full"
                    style={{ background: 'rgba(155,110,202,0.2)', color: '#9B6ECA' }}
                  >
                    4 модуля
                  </span>
                </div>
                <p className="text-sm font-accent" style={{ color: 'rgba(155,110,202,0.8)' }}>Теория и основы</p>
              </div>
            </div>
            {/* Modules */}
            <div className="p-3">
              {day1Modules.map((module, index) => (
                <ModuleItem
                  key={index}
                  {...module}
                  isOpen={openModules[`day1-${index}`] || false}
                  onClick={() => toggleModule('day1', index)}
                  accentColor="#9B6ECA"
                />
              ))}
            </div>
          </div>

          {/* Day 2 */}
          <div
            ref={day2Ref}
            className="rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.07)',
              boxShadow: '0 4px 40px rgba(0,0,0,0.4)',
            }}
          >
            {/* Header */}
            <div
              className="px-6 py-5 flex items-center gap-4"
              style={{
                background: 'linear-gradient(135deg, rgba(201,169,110,0.15), rgba(160,120,70,0.10))',
                borderBottom: '1px solid rgba(201,169,110,0.15)',
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(201,169,110,0.20)' }}
              >
                <Calendar className="w-5 h-5" style={{ color: '#C9A96E' }} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <h3 className="font-heading text-xl font-semibold text-white">День 2</h3>
                  <span
                    className="text-[11px] font-accent font-medium px-2 py-0.5 rounded-full"
                    style={{ background: 'rgba(201,169,110,0.2)', color: '#C9A96E' }}
                  >
                    4 модуля
                  </span>
                </div>
                <p className="text-sm font-accent" style={{ color: 'rgba(201,169,110,0.8)' }}>Практика</p>
              </div>
            </div>
            {/* Modules */}
            <div className="p-3">
              {day2Modules.map((module, index) => (
                <ModuleItem
                  key={index}
                  {...module}
                  isOpen={openModules[`day2-${index}`] || false}
                  onClick={() => toggleModule('day2', index)}
                  accentColor="#C9A96E"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
