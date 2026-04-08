import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { TerraLogo } from '../components/TerraLogo';

const navLinks = [
  { label: 'Для кого', href: '#for-whom' },
  { label: 'Программа', href: '#program' },
  { label: 'Формат', href: '#about' },
  { label: 'Организаторы', href: '#instructor' },
  { label: 'FAQ', href: '#faq' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'border-b border-white/10' : 'bg-transparent'
      }`}
      style={isScrolled ? { background: 'rgba(42,40,37,0.95)', backdropFilter: 'blur(20px)' } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <TerraLogo size={30} className="opacity-90 group-hover:opacity-100 transition-opacity" />
            <span className="font-heading font-semibold text-lg text-white leading-none">
              TERRIA
              <span className="text-white/35 font-light text-base mx-1.5">×</span>
              <span className="text-white/70 font-normal text-base">Гусарова</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="relative text-sm font-medium text-white/55 hover:text-white transition-colors duration-300 font-accent group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#D4A96A] group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection('#pricing')}
              className="font-accent font-semibold text-sm px-5 py-2.5 rounded-lg text-white transition-all duration-300 hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #D4A96A, #B8883E)' }}
            >
              Записаться
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden absolute top-16 left-0 right-0 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
        style={{ background: 'rgba(35,33,30,0.98)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}
      >
        <nav className="flex flex-col p-4 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="text-left py-3 px-4 text-white/70 hover:text-white hover:bg-white/[0.05] rounded-xl transition-all duration-200 font-accent text-sm"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 pb-1">
            <button
              onClick={() => scrollToSection('#pricing')}
              className="w-full py-3 font-accent font-semibold text-sm rounded-xl text-white"
              style={{ background: 'linear-gradient(135deg, #D4A96A, #B8883E)' }}
            >
              Записаться
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
