import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus, Minus } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  { question: 'Нужны ли специальные знания для участия?',     answer: 'Нет, мастер-класс рассчитан на тех, кто уже работает в хоумстейджинге или дизайне интерьера. Базовое понимание пространства приветствуется — всё остальное объясним с нуля.' },
  { question: 'Что нужно взять с собой?',                     answer: 'Ноутбук с предустановленной программой проектирования. Ссылку на нужный софт и инструкцию по установке получите перед мастер-классом.' },
  { question: 'Где проходит мастер-класс?',                   answer: 'Офлайн, в Москве — БЦ Технопарк плаза. Точный адрес и схема проезда будут отправлены зарегистрированным участникам.' },
  { question: 'Что я получу по итогу?',                       answer: 'Практические знания: как выбирать мебельщика, составлять проект для просчёта, разбираться в материалах и фурнитуре, проектировать с учётом эргономики. Плюс — библиотеку элементов для программы.' },

];

export function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef   = useRef<HTMLDivElement>(null);
  const listRef    = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<number | null>(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: titleRef.current, start: 'top 85%' } }
      );
      gsap.fromTo(listRef.current?.children || [],
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.45, stagger: 0.07, ease: 'power3.out',
          scrollTrigger: { trigger: listRef.current, start: 'top 82%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="faq" ref={sectionRef} className="relative py-20 lg:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #3E3C39 0%, #3B3936 50%, #3E3C39 100%)' }}>

      {/* Блюпринт */}
      <div className="absolute inset-0 pointer-events-none pattern-blueprint opacity-25" />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Заголовок */}
        <div ref={titleRef} className="text-center mb-10 lg:mb-12">
          <span className="badge-terra mb-5 inline-flex">FAQ</span>
          <h2 className="font-heading font-bold leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#F5F0EB' }}>
            Частые <span className="text-gradient">вопросы</span>
          </h2>
          <div className="section-divider max-w-xs mx-auto mt-5">
            <div className="diamond" />
          </div>
        </div>

        {/* Аккордеон */}
        <div ref={listRef} className="space-y-2.5">
          {faqs.map((faq, i) => (
            <div key={i}
              className="relative rounded-2xl overflow-hidden"
              style={{
                background: open === i
                  ? 'linear-gradient(145deg, #3A3835, #353330)'
                  : 'rgba(53,51,48,0.5)',
                border: `1px solid ${open === i ? 'rgba(196,112,79,0.28)' : 'rgba(255,255,255,0.07)'}`,
                transition: 'all 0.25s ease',
              }}>

              {/* Кнопка */}
              <button onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left gap-4">

                {open === i && (
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] rounded-l-2xl"
                    style={{ background: 'linear-gradient(to bottom, #C4704F, #D4845A)' }} />
                )}

                <span className="font-body text-sm sm:text-base leading-relaxed"
                  style={{ color: open === i ? '#F5F0EB' : '#B8AFA5' }}>
                  {faq.question}
                </span>

                <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200"
                  style={open === i
                    ? { background: 'rgba(196,112,79,0.18)', border: '1px solid rgba(196,112,79,0.35)' }
                    : { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.10)' }}>
                  {open === i
                    ? <Minus className="w-3 h-3" style={{ color: '#C4704F' }} />
                    : <Plus  className="w-3 h-3" style={{ color: '#8C837A' }} />}
                </div>
              </button>

              {/* Ответ */}
              <div className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: open === i ? '200px' : '0', opacity: open === i ? 1 : 0 }}>
                <div className="px-5 sm:px-6 pb-5">
                  <div className="h-px mb-3"
                    style={{ background: 'linear-gradient(90deg, rgba(196,112,79,0.15), transparent)' }} />
                  <p className="font-body text-sm leading-relaxed"
                    style={{ color: '#8C837A' }}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
