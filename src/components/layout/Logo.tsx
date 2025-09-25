import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = {
  sm: 'text-xl',
  md: 'text-2xl',
  lg: 'text-3xl',
} as const;

const Logo: React.FC<LogoProps> = ({ size = 'lg' }) => {
  return (
    <span className={`${sizeMap[size]} text-amber-500 font-extrabold tracking-tight bg-gradient-to-r from-brand to-brand bg-clip-text text-transparent`}>
      TinaMart
    </span>
  );
};

export default Logo;
