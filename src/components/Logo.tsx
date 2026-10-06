import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showWordmark?: boolean;
  theme?: 'dark' | 'light';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showWordmark = true,
  theme = 'dark',
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
  };

  const isLight = theme === 'light';

  return (
    <div className={`inline-flex items-center gap-2.5 group cursor-pointer ${className}`}>
      {/* Custom Sleek Geometric Monogram Emblem for Ja-Sey in Chestnut */}
      <div className={`relative ${iconSizes[size]} shrink-0 transition-transform duration-200 group-hover:scale-105`}>
        {/* Ambient glow backdrop */}
        <div className={`absolute inset-0 rounded-xl bg-gradient-to-br from-[#954535] to-[#D97E68] ${isLight ? 'opacity-20' : 'opacity-40'} blur-sm group-hover:opacity-75 transition-opacity`} />
        
        {/* SVG Emblem: Interlocking stylized J & S in tech-forward geometry */}
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative w-full h-full drop-shadow-sm"
        >
          {/* Base rounded square shield */}
          <rect
            width="40"
            height="40"
            rx="10"
            fill={isLight ? '#E5E5E0' : '#1C1210'}
            stroke={isLight ? '#1E232F' : 'url(#jasey-border-gradient)'}
            strokeWidth="1.5"
          />
          
          {/* Stylized J element (Chestnut highlight) */}
          <path
            d="M17 11V23.5C17 26.5 14.5 28 11.5 27C10.5 26.6 9.8 25.8 9.5 25"
            stroke={isLight ? '#1B2433' : 'url(#jasey-chestnut-light)'}
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Stylized S element interlocking through the center */}
          <path
            d="M30 14C29 12 26.8 11 23.5 11C19.5 11 17.5 13.5 18.5 17C19.5 20.5 28.5 20 28.5 24C28.5 27.5 25 29 21 29C17 29 15.2 27.2 14.5 25.5"
            stroke={isLight ? '#4B5565' : 'url(#jasey-chestnut-dark)'}
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Core tech dot node */}
          <circle cx="20" cy="20" r="1.5" fill={isLight ? '#0F172A' : '#D97E68'} />

          {/* Gradients */}
          <defs>
            <linearGradient id="jasey-border-gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#954535" stopOpacity="0.8" />
              <stop offset="1" stopColor="#D97E68" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="jasey-chestnut-light" x1="9" y1="11" x2="17" y2="28" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E59483" />
              <stop offset="1" stopColor="#B85D4D" />
            </linearGradient>
            <linearGradient id="jasey-chestnut-dark" x1="14" y1="11" x2="30" y2="29" gradientUnits="userSpaceOnUse">
              <stop stopColor="#D97E68" />
              <stop offset="1" stopColor="#954535" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Wordmark */}
      {showWordmark && (
        <div className="flex items-baseline tracking-tight">
          <span className={`font-black ${isLight ? 'text-slate-900' : 'text-white'} ${textSizes[size]} transition-colors`}>
            Ja<span className={isLight ? 'text-slate-500 font-extrabold' : 'text-[#D97E68] font-extrabold'}>-</span>Sey
          </span>
          <span className={`ml-1 text-[10px] font-mono uppercase tracking-widest ${isLight ? 'text-slate-500' : 'text-[#C86D58]'} font-bold hidden sm:inline-block`}>
            .dev
          </span>
        </div>
      )}
    </div>
  );
};
