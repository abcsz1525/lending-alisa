import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'О курсе', href: '#about' },
  { label: 'Программа', href: '#program' },
  { label: 'Для кого', href: '#for-whom' },
  { label: 'Отзывы', href: '#testimonials' },
  { label: 'Цены', href: '#pricing' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#080810]/90 backdrop-blur-xl border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a
            href="#"
            className="font-heading text-xl font-semibold transition-all duration-300 group"
          >
            <span className="text-gradient">Furniture</span>
            <span className="text-white/80 group-hover:text-white transition-colors">DesignPro</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="relative text-sm font-medium text-white/60 hover:text-white/90 transition-colors duration-300 font-accent group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-[#C9A96E] to-[#9B6ECA] group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection('#pricing')}
              className="relative font-accent font-semibold text-sm px-6 py-2.5 rounded-lg overflow-hidden group transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #E8943A, #C8641A)',
              }}
            >
              <span className="relative z-10 text-white">Записаться</span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(135deg, #F0A040, #D8741A)' }} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white/60 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-[72px] left-0 right-0 transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-3 pointer-events-none'
        }`}
        style={{
          background: 'rgba(8, 8, 16, 0.97)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <nav className="flex flex-col p-4 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="text-left py-3 px-4 text-white/70 hover:text-white hover:bg-white/[0.04] rounded-lg transition-all duration-200 font-accent text-sm"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 pb-1">
            <button
              onClick={() => scrollToSection('#pricing')}
              className="w-full py-3 font-accent font-semibold text-sm rounded-lg text-white"
              style={{ background: 'linear-gradient(135deg, #E8943A, #C8641A)' }}
            >
              Записаться
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
