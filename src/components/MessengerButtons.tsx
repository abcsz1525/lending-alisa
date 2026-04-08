interface MessengerButtonsProps {
  size?: 'default' | 'large';
}

export function MessengerButtons({ size = 'default' }: MessengerButtonsProps) {
  const py = size === 'large' ? 'py-4' : 'py-3';
  const px = size === 'large' ? 'px-7' : 'px-5';
  const text = size === 'large' ? 'text-base' : 'text-sm';

  const buttons = [
    {
      label: 'MAX',
      href: 'https://max.ru/u/f9LHodD0cOLL4pJvIcafdYroAKj48bze2izXnx6AvgPqo5m_JwXUl6-BLOI',
      bg: '#7B5EA7',
      hover: '#9B6ECA',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="12" fill="white" fillOpacity="0.2"/>
          <text x="12" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="sans-serif">M</text>
        </svg>
      ),
    },
    {
      label: 'Telegram',
      href: 'https://t.me/Terria_moscow',
      bg: '#229ED9',
      hover: '#2ABBE8',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" fill="white"/>
        </svg>
      ),
    },
    {
      label: 'WhatsApp',
      href: 'https://wa.me/79254431031',
      bg: '#25D366',
      hover: '#2EE672',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="white"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.523 5.847L0 24l6.344-1.498A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.922 0-3.73-.502-5.29-1.381l-.38-.22-3.766.889.949-3.658-.247-.397A9.934 9.934 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" fill="white"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
      {buttons.map(({ label, href, bg, hover, icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2.5 font-accent font-semibold ${text} ${px} ${py} rounded-xl text-white transition-all duration-300`}
          style={{ background: bg }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.background = hover;
            el.style.transform = 'scale(1.04)';
            el.style.boxShadow = `0 8px 24px ${bg}55`;
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.background = bg;
            el.style.transform = 'scale(1)';
            el.style.boxShadow = 'none';
          }}
        >
          {icon}
          {label}
        </a>
      ))}
    </div>
  );
}
