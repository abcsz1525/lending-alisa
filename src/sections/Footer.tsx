
import { MessengerButtons } from '../components/MessengerButtons';

const navLinks = [
  { label: 'Для кого',    href: '#for-whom'   },
  { label: 'Программа',  href: '#program'     },
  { label: 'Формат',     href: '#about'       },
  { label: 'Организаторы', href: '#instructor' },
  { label: 'FAQ',        href: '#faq'         },
  { label: 'Стоимость',  href: '#pricing'     },
];

export function Footer() {
  const scrollTo = (href: string) => {
    if (href.length > 1) document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #222018, #1E1C1A)' }}>

      {/* Верхняя терракотовая линия */}
      <div className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: 'linear-gradient(90deg, transparent, #C4704F 25%, #D4845A 60%, transparent)' }} />

      {/* Фоновая текстура */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '300px 300px',
        }} />

      {/* Блюпринт */}
      <div className="absolute inset-0 pointer-events-none pattern-blueprint opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-14 lg:py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 mb-12">

          {/* Бренд */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-4 group">
              <span className="font-heading text-lg font-semibold" style={{ color: '#F5F0EB' }}>
                TERRIA
                <span style={{ color: 'rgba(245,240,235,0.25)', margin: '0 6px' }}>×</span>
                <span style={{ color: '#B8AFA5', fontWeight: 400 }}>Гусарова</span>
              </span>
            </a>

            <p className="font-body text-sm leading-relaxed mb-6 max-w-xs" style={{ color: '#6C635A' }}>
              Мастер-класс по проектированию мебели для хоумстейджеров и дизайнеров интерьера
            </p>

            <MessengerButtons size="default" />
          </div>

          {/* Навигация */}
          <div>
            <h4 className="font-accent font-semibold text-[11px] uppercase tracking-widest mb-5"
              style={{ color: '#6C635A' }}>
              Навигация
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button onClick={() => scrollTo(link.href)}
                    className="font-body text-sm transition-colors duration-200"
                    style={{ color: '#8C837A' }}
                    onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.color = '#D4845A'}
                    onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.color = '#8C837A'}>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Детали */}
          <div>
            <h4 className="font-accent font-semibold text-[11px] uppercase tracking-widest mb-5"
              style={{ color: '#6C635A' }}>
              Детали мастер-класса
            </h4>
            <div className="space-y-2.5">
              {[
                '📅 18 и 19 апреля',
                '📍 БЦ Технопарк плаза, Москва',
                '⏱ 3 часа в день',
                '💰 15 000 ₽',
              ].map((item) => (
                <p key={item} className="font-body text-sm" style={{ color: '#8C837A' }}>{item}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Разделитель с ромбом */}
        <div className="section-divider mb-8">
          <div className="diamond" />
        </div>

        {/* Нижняя строка */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-body text-xs" style={{ color: '#4A4540' }}>
            © 2025 TERRIA. Все права защищены.
          </p>
          <p className="font-body text-xs" style={{ color: '#4A4540' }}>
            Мастер-класс по проектированию мебели
          </p>
        </div>
      </div>
    </footer>
  );
}
