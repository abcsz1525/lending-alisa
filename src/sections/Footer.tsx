import { Instagram, Youtube, MessageCircle } from 'lucide-react';

const footerLinks = {
  course: [
    { label: 'О курсе', href: '#about' },
    { label: 'Программа', href: '#program' },
    { label: 'Цены', href: '#pricing' },
    { label: 'Отзывы', href: '#testimonials' },
  ],
  company: [
    { label: 'О нас', href: '#' },
    { label: 'Блог', href: '#' },
    { label: 'Контакты', href: '#' },
    { label: 'Вакансии', href: '#' },
  ],
  support: [
    { label: 'FAQ', href: '#' },
    { label: 'Политика конфиденциальности', href: '#' },
    { label: 'Договор оферты', href: '#' },
  ],
};

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: MessageCircle, href: '#', label: 'Telegram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#') && href.length > 1) {
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      className="relative py-16 lg:py-20 overflow-hidden"
      style={{ background: '#050508' }}
    >
      {/* Top divider with glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,169,110,0.25), rgba(155,110,202,0.2), transparent)' }}
      />

      {/* Subtle background */}
      <div
        className="absolute top-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(155,110,202,0.04), transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-14">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <a
              href="#"
              className="inline-block font-heading text-2xl font-semibold mb-4 transition-opacity duration-300 hover:opacity-80"
            >
              <span className="text-gradient">Furniture</span>
              <span className="text-white/70">DesignPro</span>
            </a>
            <p className="text-sm text-white/40 mb-6 max-w-xs leading-relaxed font-body">
              Образование для дизайнеров и хоумстейджеров. Практические навыки
              от профессионалов индустрии.
            </p>

            {/* Social links */}
            <div className="flex gap-2.5">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.background = 'rgba(201,169,110,0.12)';
                      el.style.borderColor = 'rgba(201,169,110,0.3)';
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.background = 'rgba(255,255,255,0.05)';
                      el.style.borderColor = 'rgba(255,255,255,0.08)';
                    }}
                  >
                    <Icon className="w-4 h-4 text-white/50" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Course Links */}
          <div>
            <h4 className="font-accent font-semibold text-[11px] uppercase tracking-widest mb-5 text-white/40">
              Курс
            </h4>
            <ul className="space-y-3">
              {footerLinks.course.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-white/40 hover:text-white/75 transition-colors duration-200 font-body"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-accent font-semibold text-[11px] uppercase tracking-widest mb-5 text-white/40">
              Компания
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-white/40 hover:text-white/75 transition-colors duration-200 font-body"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-accent font-semibold text-[11px] uppercase tracking-widest mb-5 text-white/40">
              Поддержка
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-white/40 hover:text-white/75 transition-colors duration-200 font-body text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom divider */}
        <div
          className="h-px mb-8"
          style={{ background: 'rgba(255,255,255,0.06)' }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/25 font-body">
            © 2024 FurnitureDesignPro. Все права защищены.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-xs text-white/25">
            <a
              href="mailto:hello@furnituredesignpro.ru"
              className="hover:text-white/50 transition-colors duration-200 font-body"
            >
              hello@furnituredesignpro.ru
            </a>
            <span className="hidden md:inline opacity-40">·</span>
            <a
              href="tel:+79991234567"
              className="hover:text-white/50 transition-colors duration-200 font-body"
            >
              +7 (999) 123-45-67
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
