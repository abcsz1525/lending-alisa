import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, Sparkles, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const tariffs = [
  {
    name: 'Базовый',
    price: '9 900',
    description: 'Самостоятельное обучение',
    features: [
      'Доступ к записи курса',
      'Методические материалы',
      'Чек-листы и шаблоны',
      'Закрытый Telegram-канал',
    ],
    cta: 'Выбрать базовый',
    highlighted: false,
    badge: null,
  },
  {
    name: 'Стандарт',
    price: '19 900',
    description: 'Максимальная польза',
    features: [
      'Всё из Базового',
      'Участие в живом мастер-классе',
      'Обратная связь по заданиям',
      'Сертификат об окончании',
      '2 недели поддержки в чате',
    ],
    cta: 'Выбрать стандарт',
    highlighted: true,
    badge: 'Популярный выбор',
  },
  {
    name: 'VIP',
    price: '39 900',
    description: 'Для тех, кто хочет всё и сразу',
    features: [
      'Всё из Стандарта',
      '2 личные консультации',
      'Разбор ваших проектов',
      'Доступ к материалам — 6 месяцев',
      'Приоритетная поддержка',
    ],
    cta: 'Выбрать VIP',
    highlighted: false,
    badge: 'Индивидуально',
  },
];

export function Pricing() {
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
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 78%', toggleActions: 'play none none none' } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="py-24 lg:py-36 relative overflow-hidden"
      style={{ backgroundColor: '#080810' }}
    >
      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(155,110,202,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-16">
          <p className="font-accent text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C9A96E' }}>
            Тарифы
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-white leading-tight mb-4">
            Выберите свой <span className="text-gradient">формат</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto font-body">
            Все тарифы включают доступ к материалам на 3 месяца
          </p>
        </div>

        {/* Cards */}
        <div
          ref={cardsRef}
          className="grid lg:grid-cols-3 gap-5 items-stretch"
        >
          {tariffs.map((tariff, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden flex flex-col"
              style={
                tariff.highlighted
                  ? {
                      background: 'linear-gradient(160deg, rgba(155,110,202,0.12) 0%, rgba(100,70,150,0.08) 50%, rgba(201,169,110,0.08) 100%)',
                      border: '1px solid rgba(201,169,110,0.3)',
                      boxShadow: '0 0 60px rgba(155,110,202,0.15), 0 0 0 1px rgba(201,169,110,0.15), 0 24px 80px rgba(0,0,0,0.6)',
                      transform: 'scale(1.02)',
                    }
                  : {
                      background: 'rgba(255,255,255,0.025)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      boxShadow: '0 4px 40px rgba(0,0,0,0.4)',
                    }
              }
            >
              {/* Highlighted gradient top bar */}
              {tariff.highlighted && (
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: 'linear-gradient(90deg, transparent, #C9A96E, #9B6ECA, transparent)' }}
                />
              )}

              {/* Badge */}
              {tariff.badge && (
                <div className="px-6 pt-5 pb-0">
                  <span
                    className="inline-flex items-center gap-1.5 text-xs font-accent font-semibold px-3 py-1.5 rounded-full"
                    style={
                      tariff.highlighted
                        ? { background: 'rgba(232,148,58,0.15)', color: '#E8943A', border: '1px solid rgba(232,148,58,0.3)' }
                        : { background: 'rgba(201,169,110,0.12)', color: '#C9A96E', border: '1px solid rgba(201,169,110,0.25)' }
                    }
                  >
                    <Sparkles className="w-3 h-3" />
                    {tariff.badge}
                  </span>
                </div>
              )}

              <div className="p-6 lg:p-8 flex flex-col flex-grow">
                {/* Header */}
                <div className="mb-8 pt-1">
                  <h3 className="font-heading text-2xl font-semibold text-white mb-3">
                    {tariff.name}
                  </h3>
                  <div className="flex items-baseline gap-1.5 mb-1.5">
                    <span className="font-heading text-4xl lg:text-5xl font-bold text-gradient">
                      {tariff.price}
                    </span>
                    <span className="text-xl text-white/40">₽</span>
                  </div>
                  <p className="text-sm text-white/40 font-body">{tariff.description}</p>
                </div>

                {/* Divider */}
                <div className="h-px mb-6" style={{ background: 'rgba(255,255,255,0.06)' }} />

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {tariff.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={
                          tariff.highlighted
                            ? { background: 'rgba(201,169,110,0.20)', border: '1px solid rgba(201,169,110,0.35)' }
                            : { background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)' }
                        }
                      >
                        <Check
                          className="w-3 h-3"
                          style={{ color: tariff.highlighted ? '#C9A96E' : 'rgba(255,255,255,0.5)' }}
                        />
                      </div>
                      <span className="text-sm text-white/65 font-body leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className="w-full py-4 rounded-xl font-accent font-semibold text-sm transition-all duration-300"
                  style={
                    tariff.highlighted
                      ? { background: 'linear-gradient(135deg, #E8943A, #C8641A)', color: '#fff' }
                      : { background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.8)' }
                  }
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLButtonElement;
                    if (tariff.highlighted) {
                      el.style.boxShadow = '0 0 24px rgba(232,148,58,0.4)';
                      el.style.transform = 'translateY(-1px)';
                    } else {
                      el.style.background = 'rgba(255,255,255,0.10)';
                      el.style.borderColor = 'rgba(201,169,110,0.3)';
                      el.style.color = '#fff';
                    }
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLButtonElement;
                    if (tariff.highlighted) {
                      el.style.boxShadow = 'none';
                      el.style.transform = 'translateY(0)';
                    } else {
                      el.style.background = 'rgba(255,255,255,0.06)';
                      el.style.borderColor = 'rgba(255,255,255,0.12)';
                      el.style.color = 'rgba(255,255,255,0.8)';
                    }
                  }}
                >
                  {tariff.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Trust note */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <Shield className="w-4 h-4 text-white/25" />
          <p className="text-center text-white/30 text-sm font-body">
            Оплата безопасна · Visa, Mastercard, МИР · Возврат в течение 7 дней
          </p>
        </div>
      </div>
    </section>
  );
}
