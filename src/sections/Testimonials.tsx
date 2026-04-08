import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: 'Анна М.',
    role: 'Хоумстейджер',
    text: 'Наконец-то я понимаю, как правильно подбирать мебель для staging! Курс дал мне уверенность в переговорах с поставщиками.',
    rating: 5,
    initial: 'А',
  },
  {
    name: 'Михаил К.',
    role: 'Дизайнер интерьера',
    text: 'Отличный баланс теории и практики. Уже применяю знания в текущих проектах — клиенты в восторге от детальной проработки.',
    rating: 5,
    initial: 'М',
  },
  {
    name: 'Ольга С.',
    role: 'Декоратор',
    text: 'Давно хотела разобраться в технических аспектах мебели. Елена объясняет сложное простым языком, всё стало понятно!',
    rating: 5,
    initial: 'О',
  },
  {
    name: 'Дмитрий П.',
    role: 'Владелец студии',
    text: 'Отправил на курс двух сотрудников. Результат превзошел ожидания — теперь все понимают друг друга с производством.',
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
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: titleRef.current, start: 'top 82%', toggleActions: 'play none none none' } }
      );
      gsap.fromTo(carouselRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: carouselRef.current, start: 'top 78%', toggleActions: 'play none none none' } }
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
    setTimeout(() => setIsAnimating(false), 500);
  };

  const testimonial = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-24 lg:py-36 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0D0D18 0%, #080810 100%)' }}
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(201,169,110,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-16">
          <p className="font-accent text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C9A96E' }}>
            Отзывы
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-white leading-tight">
            Что говорят <span className="text-gradient">выпускники</span>
          </h2>
        </div>

        {/* Carousel */}
        <div ref={carouselRef} className="relative">
          {/* Main card */}
          <div
            className="relative rounded-2xl p-8 lg:p-12 overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 4px 60px rgba(0,0,0,0.5)',
              minHeight: '260px',
            }}
          >
            {/* Quote symbol */}
            <div
              className="absolute top-6 right-8 font-heading text-[120px] leading-none select-none pointer-events-none"
              style={{ color: 'rgba(201,169,110,0.05)', lineHeight: 1 }}
            >
              "
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#C9A96E] text-[#C9A96E]" />
              ))}
            </div>

            {/* Text */}
            <p
              key={currentIndex}
              className="text-lg lg:text-xl text-white/75 leading-relaxed mb-8 font-body relative z-10"
              style={{ animation: 'fadeUp 0.4s ease-out' }}
            >
              "{testimonial.text}"
            </p>

            {/* Author */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center font-heading font-bold text-base"
                  style={{
                    background: 'linear-gradient(135deg, rgba(201,169,110,0.3), rgba(155,110,202,0.2))',
                    border: '1px solid rgba(201,169,110,0.3)',
                    color: '#C9A96E',
                  }}
                >
                  {testimonial.initial}
                </div>
                <div>
                  <p className="font-heading font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-white/45 font-accent">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: index === currentIndex ? '28px' : '8px',
                    height: '8px',
                    background: index === currentIndex
                      ? 'linear-gradient(90deg, #C9A96E, #9B6ECA)'
                      : 'rgba(255,255,255,0.15)',
                  }}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={() => navigate('prev')}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.10)',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.background = 'rgba(201,169,110,0.12)';
                  el.style.borderColor = 'rgba(201,169,110,0.35)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.background = 'rgba(255,255,255,0.05)';
                  el.style.borderColor = 'rgba(255,255,255,0.10)';
                }}
              >
                <ChevronLeft className="w-4 h-4 text-white/60" />
              </button>
              <button
                onClick={() => navigate('next')}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.10)',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.background = 'rgba(201,169,110,0.12)';
                  el.style.borderColor = 'rgba(201,169,110,0.35)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.background = 'rgba(255,255,255,0.05)';
                  el.style.borderColor = 'rgba(255,255,255,0.10)';
                }}
              >
                <ChevronRight className="w-4 h-4 text-white/60" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
