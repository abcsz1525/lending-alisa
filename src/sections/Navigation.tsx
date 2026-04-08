import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Для кого',    href: '#for-whom'   },
  { label: 'Программа',  href: '#program'     },
  { label: 'Формат',     href: '#about'       },
  { label: 'Организаторы', href: '#instructor' },
  { label: 'FAQ',        href: '#faq'         },
];

export function Navigation() {
  const [isScrolled, setIsScrolled]         = useState(false);
  const [isMobileOpen, setIsMobileOpen]     = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={isScrolled
        ? { background: 'rgba(30,28,26,0.97)', backdropFilter: 'blur(24px)', borderBottom: '1px solid rgba(196,112,79,0.12)' }
        : { background: 'transparent' }}>

      {/* Терракотовая линия поверх хедера (видна только при скролле) */}
      {isScrolled && (
        <div className="absolute top-0 left-0 right-0 h-[2px]"
          style={{ background: 'linear-gradient(90deg, #C4704F, #D4845A 50%, transparent)' }} />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">

          {/* Лого */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="font-heading leading-none">
              <span className="text-lg font-semibold" style={{ color: '#F5F0EB' }}>TERRIA</span>
              <span className="hidden sm:inline font-light text-base mx-1.5" style={{ color: 'rgba(245,240,235,0.25)' }}>×</span>
              <span className="hidden sm:inline text-base font-normal" style={{ color: '#B8AFA5' }}>Галина Гусарова</span>
            </div>
          </a>

          {/* Десктоп навигация */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <button key={link.href} onClick={() => scrollTo(link.href)}
                className="relative font-accent text-sm font-medium transition-colors duration-250 group"
                style={{ color: '#8C837A' }}
                onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.color = '#F5F0EB'}
                onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.color = '#8C837A'}>
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] group-hover:w-full transition-all duration-300"
                  style={{ background: 'linear-gradient(90deg, #C4704F, #D4845A)' }} />
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <button onClick={() => scrollTo('#pricing')}
              className="btn-terra font-accent font-semibold text-sm px-5 py-2.5 rounded-xl">
              Записаться
            </button>
          </div>

          {/* Бургер */}
          <button className="lg:hidden p-2 transition-colors duration-200"
            style={{ color: '#8C837A' }}
            onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.color = '#F5F0EB'}
            onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.color = '#8C837A'}
            onClick={() => setIsMobileOpen(!isMobileOpen)}>
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      <div className={`lg:hidden absolute top-16 left-0 right-0 transition-all duration-300 ${isMobileOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
        style={{ background: 'rgba(30,28,26,0.98)', backdropFilter: 'blur(24px)', borderBottom: '1px solid rgba(196,112,79,0.10)' }}>

        <nav className="flex flex-col p-4 space-y-1">
          {navLinks.map((link) => (
            <button key={link.href} onClick={() => scrollTo(link.href)}
              className="text-left py-3 px-4 rounded-xl font-accent text-sm transition-all duration-200"
              style={{ color: '#8C837A' }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.color = '#F5F0EB';
                el.style.background = 'rgba(196,112,79,0.06)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.color = '#8C837A';
                el.style.background = 'transparent';
              }}>
              {link.label}
            </button>
          ))}

          <div className="pt-3 pb-1">
            <button onClick={() => scrollTo('#pricing')}
              className="btn-terra w-full py-3 font-accent font-semibold text-sm rounded-xl">
              Записаться
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
