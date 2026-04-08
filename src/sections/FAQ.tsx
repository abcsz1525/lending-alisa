import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus, Minus } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: 'Нужны ли специальные знания для участия?',
    answer: 'Нет, мастер-класс рассчитан на тех, кто уже работает в хоумстейджинге или дизайне интерьера. Базовое понимание пространства приветствуется — всё остальное объясним с нуля.',
  },
  {
    question: 'Что нужно взять с собой?',
    answer: 'Ноутбук с предустановленной программой проектирования. Ссылку на нужный софт и инструкцию по установке получите перед мастер-классом.',
  },
  {
    question: 'Где проходит мастер-класс?',
    answer: 'Офлайн, в Москве — БЦ Технопарк плаза. Точный адрес и схема проезда будут отправлены зарегистрированным участникам.',
  },
  {
    question: 'Что я получу по итогу?',
    answer: 'Практические знания: как выбирать мебельщика, составлять проект для просчёта, разбираться в материалах и фурнитуре, проектировать с учётом эргономики. Плюс — библиотеку элементов для программы.',
  },
  {
    question: 'Можно ли вернуть деньги?',
    answer: 'Свяжитесь с нами через мессенджер — обсудим индивидуально. Напишите в Telegram или WhatsApp.',
  },
];

export function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const faqsRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: titleRef.current, start: 'top 85%', toggleActions: 'play none none none' } }
      );
      gsap.fromTo(faqsRef.current?.children || [],
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.45, stagger: 0.07, ease: 'power3.out',
          scrollTrigger: { trigger: faqsRef.current, start: 'top 80%', toggleActions: 'play none none none' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="faq" ref={sectionRef}
      className="py-20 lg:py-32"
      style={{ background: 'linear-gradient(180deg, #353330 0%, #3E3C39 100%)' }}>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-10 lg:mb-12">
          <p className="font-accent text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#D4A96A' }}>
            FAQ
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-white leading-tight">
            Частые <span className="text-gradient">вопросы</span>
          </h2>
        </div>

        {/* Items */}
        <div ref={faqsRef} className="space-y-2.5">
          {faqs.map((faq, index) => (
            <div key={index}
              className="rounded-2xl overflow-hidden"
              style={{
                background: openIndex === index ? 'rgba(212,169,106,0.07)' : 'rgba(255,255,255,0.05)',
                border: `1px solid ${openIndex === index ? 'rgba(212,169,106,0.25)' : 'rgba(255,255,255,0.09)'}`,
                transition: 'all 0.25s ease',
              }}>

              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left gap-4">
                <span className="font-body text-sm sm:text-base leading-relaxed"
                  style={{ color: openIndex === index ? '#fff' : 'rgba(255,255,255,0.75)' }}>
                  {faq.question}
                </span>
                <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                  style={openIndex === index
                    ? { background: 'rgba(212,169,106,0.18)', border: '1px solid rgba(212,169,106,0.35)' }
                    : { background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}>
                  {openIndex === index
                    ? <Minus className="w-3 h-3" style={{ color: '#D4A96A' }} />
                    : <Plus className="w-3 h-3 text-white/50" />}
                </div>
              </button>

              <div className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: openIndex === index ? '200px' : '0', opacity: openIndex === index ? 1 : 0 }}>
                <p className="px-5 sm:px-6 pb-5 text-sm text-white/55 leading-relaxed font-body">
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
