import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus, Minus } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: 'Нужны ли специальные знания для прохождения курса?',
    answer: 'Нет, курс рассчитан на начинающих. Всё объясняется с нуля, главное — ваше желание учиться. Базовое понимание дизайна интерьера будет плюсом, но не обязательно.',
  },
  {
    question: 'Будет ли запись, если я не смогу присутствовать онлайн?',
    answer: 'Да, все участники получают доступ к записи мастер-класса на 3 месяца (6 месяцев для тарифа VIP). Запись будет доступна в личном кабинете сразу после окончания эфира.',
  },
  {
    question: 'Какой софт понадобится?',
    answer: 'Для практики достаточно бумаги и карандаша. Дополнительно покажем работу в бесплатных программах. Если у вас есть SketchUp или AutoCAD — отлично, но это не обязательно.',
  },
  {
    question: 'Выдается ли сертификат?',
    answer: 'Да, сертификат выдается для тарифов Стандарт и VIP после выполнения практических заданий. Сертификат подтверждает прохождение курса и может быть указан в портфолио.',
  },
  {
    question: 'Можно ли вернуть деньги?',
    answer: 'Да, в течение 7 дней после старта курса, если вы поняли, что курс вам не подходит. Просто напишите нам на hello@furnituredesignpro.ru — вернём деньги без лишних вопросов.',
  },
  {
    question: 'Как долго будет доступ к материалам?',
    answer: '3 месяца для тарифов Базовый и Стандарт, 6 месяцев для VIP. После этого срока доступ можно продлить за небольшую плату или перейти на подписку.',
  },
];

export function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const faqsRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: titleRef.current, start: 'top 82%', toggleActions: 'play none none none' } }
      );
      gsap.fromTo(faqsRef.current?.children || [],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: faqsRef.current, start: 'top 78%', toggleActions: 'play none none none' } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-36 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #080810 0%, #0D0D18 100%)' }}
    >
      {/* Subtle glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(155,110,202,0.05) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-14">
          <p className="font-accent text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C9A96E' }}>
            FAQ
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-white leading-tight">
            Частые <span className="text-gradient">вопросы</span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div ref={faqsRef} className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                background: openIndex === index ? 'rgba(201,169,110,0.05)' : 'rgba(255,255,255,0.025)',
                border: `1px solid ${openIndex === index ? 'rgba(201,169,110,0.2)' : 'rgba(255,255,255,0.07)'}`,
                boxShadow: openIndex === index ? '0 4px 24px rgba(0,0,0,0.3)' : 'none',
              }}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors duration-200"
              >
                <span
                  className="font-medium pr-4 font-body text-sm leading-relaxed"
                  style={{ color: openIndex === index ? '#fff' : 'rgba(255,255,255,0.75)' }}
                >
                  {faq.question}
                </span>
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
                  style={
                    openIndex === index
                      ? { background: 'rgba(201,169,110,0.20)', border: '1px solid rgba(201,169,110,0.35)' }
                      : { background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)' }
                  }
                >
                  {openIndex === index ? (
                    <Minus className="w-3.5 h-3.5" style={{ color: '#C9A96E' }} />
                  ) : (
                    <Plus className="w-3.5 h-3.5" style={{ color: 'rgba(255,255,255,0.5)' }} />
                  )}
                </div>
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: openIndex === index ? '200px' : '0px', opacity: openIndex === index ? 1 : 0 }}
              >
                <p className="px-6 pb-5 text-sm text-white/50 leading-relaxed font-body">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
