import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  { name: 'Анна М.',    role: 'Хоумстейджер',        initial: 'А', rating: 5, text: 'Наконец-то понимаю, как правильно подбирать и заказывать мебель для staging. Курс дал уверенность в переговорах с поставщиками.' },
  { name: 'Михаил К.', role: 'Дизайнер интерьера',   initial: 'М', rating: 5, text: 'Отличный баланс теории и практики. Уже применяю знания в текущих проектах — клиенты видят разницу.' },
  { name: 'Ольга С.',   role: 'Хоумстейджер',        initial: 'О', rating: 5, text: 'Давно хотела разобраться в технических аспектах мебели. Всё объясняется простым языком — и наконец стало понятно!' },
  { name: 'Дмитрий П.',role: 'Владелец студии',      initial: 'Д', rating: 5, text: 'Отправил двух сотрудников. Результат превзошёл ожидания — теперь они говорят с производством на одном языке.' },
];

export function Testimonials() {
  const sectionRef  = useRef<HTMLElement>(null);
  const titleRef    = useRef<HTMLDivElement>(null);
  const wrapperRef  = useRef<HTMLDivElement>(null);
  const [idx, setIdx]           = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: titleRef.current, start: 'top 85%' } }
      );
      gsap.fromTo(wrapperRef.current,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: wrapperRef.current, start: 'top 82%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const iv = setInterval(() => setIdx(p => (p + 1) % testimonials.length), 5500);
    return () => clearInterval(iv);
  }, []);

  const navigate = (dir: 'prev' | 'next') => {
    if (animating) return;
    setAnimating(true);
    setIdx(p => dir === 'next' ? (p + 1) % testimonials.length : (p - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setAnimating(false), 400);
  };

  const t = testimonials[idx];

  return (
    <section id="testimonials" ref={sectionRef} className="relative py-20 lg:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #353330 0%, #322F2C 50%, #353330 100%)' }}>

      {/* Декоративная большая кавычка на фоне */}
      <div className="absolute top-8 left-8 font-heading select-none pointer-events-none"
        style={{ fontSize: '22rem', lineHeight: 1, color: '#C4704F', opacity: 0.03 }}>"</div>

      {/* Ещё одна кавычка справа */}
      <div className="absolute bottom-8 right-8 font-heading select-none pointer-events-none"
        style={{ fontSize: '14rem', lineHeight: 1, color: '#D4A96A', opacity: 0.02, transform: 'rotate(180deg)' }}>"</div>

      {/* Мягкое свечение */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(196,112,79,0.06) 0%, transparent 70%)', filter: 'blur(50px)' }} />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Заголовок */}
        <div ref={titleRef} className="text-center mb-10 lg:mb-12">
          <span className="badge-terra mb-5 inline-flex">Отзывы</span>
          <h2 className="font-heading font-bold leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#F5F0EB' }}>
            Что говорят <span className="text-gradient">участники</span>
          </h2>
          <div className="section-divider max-w-xs mx-auto mt-5">
            <div className="diamond" />
          </div>
        </div>

        {/* Карусель */}
        <div ref={wrapperRef}>

          {/* Карточка */}
          <div className="relative rounded-2xl p-6 sm:p-9 overflow-hidden"
            style={{
              background: 'linear-gradient(145deg, #423F3C, #3E3C39)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 8px 40px rgba(0,0,0,0.35), 0 0 30px rgba(196,112,79,0.04)',
            }}>

            {/* Верхняя терракотовая линия-градиент */}
            <div className="absolute top-0 left-0 right-0 h-[2px]"
              style={{ background: 'linear-gradient(90deg, #C4704F, #D4845A 50%, transparent)' }} />

            {/* Уголки */}
            <div className="absolute top-3 right-3 w-5 h-5 pointer-events-none"
              style={{ borderTop: '1px solid rgba(196,112,79,0.18)', borderRight: '1px solid rgba(196,112,79,0.18)' }} />
            <div className="absolute bottom-3 left-3 w-5 h-5 pointer-events-none"
              style={{ borderBottom: '1px solid rgba(196,112,79,0.18)', borderLeft: '1px solid rgba(196,112,79,0.18)' }} />

            {/* Звёзды */}
            <div className="flex gap-1 mb-5">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4" style={{ fill: '#C4704F', color: '#C4704F' }} />
              ))}
            </div>

            {/* Цитата */}
            <p key={idx} className="font-body leading-relaxed mb-7"
              style={{ fontSize: '1.05rem', color: '#D8D0C8', animation: 'fade-up 0.35s ease-out' }}>
              "{t.text}"
            </p>

            {/* Разделитель */}
            <div className="h-px mb-5"
              style={{ background: 'linear-gradient(90deg, rgba(196,112,79,0.15), transparent)' }} />

            {/* Автор */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-sm flex-shrink-0"
                style={{ background: 'rgba(196,112,79,0.18)', border: '1px solid rgba(196,112,79,0.28)', color: '#C4704F' }}>
                {t.initial}
              </div>
              <div>
                <p className="font-heading font-semibold text-sm" style={{ color: '#F5F0EB' }}>{t.name}</p>
                <p className="font-accent text-xs" style={{ color: '#8C837A' }}>{t.role}</p>
              </div>
            </div>
          </div>

          {/* Навигация */}
          <div className="flex items-center justify-between mt-5">
            {/* Точки */}
            <div className="flex gap-2 items-center">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setIdx(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === idx ? '22px' : '6px',
                    height: '6px',
                    background: i === idx ? 'linear-gradient(90deg, #C4704F, #D4845A)' : 'rgba(255,255,255,0.15)',
                  }} />
              ))}
            </div>

            {/* Номер */}
            <span className="font-accent text-xs tracking-widest uppercase" style={{ color: '#6C635A' }}>
              {String(idx + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
            </span>

            {/* Стрелки */}
            <div className="flex gap-2">
              {(['prev', 'next'] as const).map((dir) => (
                <button key={dir} onClick={() => navigate(dir)}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)' }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLButtonElement;
                    el.style.background = 'rgba(196,112,79,0.14)';
                    el.style.borderColor = 'rgba(196,112,79,0.35)';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLButtonElement;
                    el.style.background = 'rgba(255,255,255,0.04)';
                    el.style.borderColor = 'rgba(255,255,255,0.09)';
                  }}>
                  {dir === 'prev'
                    ? <ChevronLeft  className="w-4 h-4" style={{ color: '#B8AFA5' }} />
                    : <ChevronRight className="w-4 h-4" style={{ color: '#B8AFA5' }} />}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
