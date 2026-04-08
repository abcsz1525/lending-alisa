interface TerraLogoProps {
  size?: number;
  className?: string;
}

export function TerraLogo({ size = 36, className = '' }: TerraLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="white"
    >
      {/* Top-left figure: circle head + ⌐ body (top bar + right bar) */}
      <circle cx="26" cy="21" r="11" />
      <path d="M15 32 L71 32 Q85 32 85 46 L85 70 L71 70 L71 47 L15 47 Z" />

      {/* Bottom-right figure: circle head + L body (bottom bar + left bar) */}
      <circle cx="74" cy="79" r="11" />
      <path d="M85 68 L29 68 Q15 68 15 54 L15 30 L29 30 L29 53 L85 53 Z" />
    </svg>
  );
}
