import { TerraLogo } from '../components/TerraLogo';
import { MessengerButtons } from '../components/MessengerButtons';

const navLinks = [
  { label: 'Для кого', href: '#for-whom' },
  { label: 'Программа', href: '#program' },
  { label: 'Формат', href: '#about' },
  { label: 'Организаторы', href: '#instructor' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Стоимость', href: '#pricing' },
];

export function Footer() {
  const scrollTo = (href: string) => {
    if (href.length > 1) document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative py-14 lg:py-16 overflow-hidden"
      style={{ background: '#2A2825' }}>

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(212,169,106,0.3), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <TerraLogo size={28} />
              <span className="font-heading text-lg font-semibold text-white">
                TERRIA <span className="text-white/35 font-light">×</span> Гусарова
              </span>
            </a>
            <p className="text-sm text-white/40 leading-relaxed font-body mb-6 max-w-xs">
              Мастер-класс по проектированию мебели для хоумстейджеров и дизайнеров интерьера
            </p>
            <MessengerButtons size="default" />
          </div>

          {/* Nav links */}
          <div>
            <h4 className="font-accent font-semibold text-[11px] uppercase tracking-widest mb-4 text-white/35">
              Навигация
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-white/50 hover:text-white/85 transition-colors duration-200 font-body">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Details */}
          <div>
            <h4 className="font-accent font-semibold text-[11px] uppercase tracking-widest mb-4 text-white/35">
              Детали
            </h4>
            <div className="space-y-2.5 text-sm font-body text-white/50">
              <p>📅 18 и 19 апреля</p>
              <p>📍 БЦ Технопарк плаза, Москва</p>
              <p>⏱ 3 часа в день</p>
              <p>💰 15 000 ₽</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="h-px mb-8" style={{ background: 'rgba(255,255,255,0.07)' }} />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/25 font-body">
            © 2025 TERRIA. Все права защищены.
          </p>
          <p className="text-xs text-white/20 font-body">
            Мастер-класс по проектированию мебели
          </p>
        </div>
      </div>
    </footer>
  );
}
