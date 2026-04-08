import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: 'Анна М.',
    role: 'Хоумстейджер',
    text: 'Наконец-то понимаю, как правильно подбирать и заказывать мебель для staging. Курс дал уверенность в переговорах с поставщиками.',
    rating: 5,
    initial: 'А',
  },
  {
    name: 'Михаил К.',
    role: 'Дизайнер интерьера',
    text: 'Отличный баланс теории и практики. Уже применяю знания в текущих проектах — клиенты видят разницу.',
    rating: 5,
    initial: 'М',
  },
  {
    name: 'Ольга С.',
    role: 'Хоумстейджер',
    text: 'Давно хотела разобраться в технических аспектах мебели. Всё объясняется простым языком — и наконец стало понятно!',
    rating: 5,
    initial: 'О',
  },
  {
    name: 'Дмитрий П.',
    role: 'Владелец студии',
    text: 'Отправил двух сотрудников. Результат превзошёл ожидания — теперь они говорят с производством на одном языке.',
    rating: 5,
    initial: 'Д',
  },
];

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: titleRef.current, start: 'top 85%', toggleActions: 'play none none none' } }
      );
      gsap.fromTo(carouselRef.current,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: carouselRef.current, start: 'top 80%', toggleActions: 'play none none none' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  const navigate = (dir: 'prev' | 'next') => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(prev =>
      dir === 'next'
        ? (prev + 1) % testimonials.length
        : (prev - 1 + testimonials.length) % testimonials.length
    );
    setTimeout(() => setIsAnimating(false), 400);
  };

  const t = testimonials[currentIndex];

  return (
    <section id="testimonials" ref={sectionRef}
      className="py-20 lg:py-32 relative overflow-hidden"
      style={{ backgroundColor: '#3E3C39' }}>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-10 lg:mb-12">
          <p className="font-accent text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#D4A96A' }}>
            Отзывы
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white leading-tight">
            Что говорят <span className="text-gradient">участники</span>
          </h2>
        </div>

        {/* Carousel */}
        <div ref={carouselRef}>
          {/* Card */}
          <div className="rounded-2xl p-6 sm:p-9 relative overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.10)',
              boxShadow: '0 8px 40px rgba(0,0,0,0.3)',
              minHeight: '220px',
            }}>

            {/* Big quote */}
            <div className="absolute top-4 right-6 font-heading text-[100px] leading-none select-none pointer-events-none"
              style={{ color: 'rgba(212,169,106,0.06)', lineHeight: 1 }}>
              "
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-5">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#D4A96A] text-[#D4A96A]" />
              ))}
            </div>

            {/* Quote text */}
            <p key={currentIndex}
              className="text-base sm:text-lg text-white/75 leading-relaxed mb-7 font-body relative z-10"
              style={{ animation: 'fadeUp 0.35s ease-out' }}>
              "{t.text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-sm flex-shrink-0"
                style={{ background: 'rgba(212,169,106,0.18)', border: '1px solid rgba(212,169,106,0.28)', color: '#D4A96A' }}>
                {t.initial}
              </div>
              <div>
                <p className="font-heading font-semibold text-white text-sm">{t.name}</p>
                <p className="text-xs text-white/45 font-accent">{t.role}</p>
              </div>
            </div>
          </div>

          {/* Nav */}
          <div className="flex items-center justify-between mt-6">
            {/* Dots */}
            <div className="flex gap-2 items-center">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrentIndex(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === currentIndex ? '24px' : '7px',
                    height: '7px',
                    background: i === currentIndex ? '#D4A96A' : 'rgba(255,255,255,0.18)',
                  }} />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              {(['prev', 'next'] as const).map((dir) => (
                <button key={dir} onClick={() => navigate(dir)}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-250"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)' }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLButtonElement;
                    el.style.background = 'rgba(212,169,106,0.12)';
                    el.style.borderColor = 'rgba(212,169,106,0.30)';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLButtonElement;
                    el.style.background = 'rgba(255,255,255,0.06)';
                    el.style.borderColor = 'rgba(255,255,255,0.10)';
                  }}>
                  {dir === 'prev'
                    ? <ChevronLeft className="w-4 h-4 text-white/55" />
                    : <ChevronRight className="w-4 h-4 text-white/55" />}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
