import React from 'react';
import Link from 'next/link';

interface LogoComponentProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  href?: string;
  isScrolled?: boolean; 
}

export const LogoComponent: React.FC<LogoComponentProps> = ({
  width = 120,
  height = 'auto',
  className = '',
  href = '/',
  isScrolled = false,
}) => {
  const baseGreenColor = isScrolled ? 'text-primary' : 'text-white';
  const baseTiColor = isScrolled ? 'text-secondary' : 'text-white';

  const logoContent = (
    <span
      className={`font-bold text-3xl ${className}`}
      style={{ width, height }}
    >
      <span className={baseGreenColor}>Green</span><span className={baseTiColor}>TI</span>
    </span>
  );

  if (href) {
    return <Link href={href} legacyBehavior><a>{logoContent}</a></Link>;
  }

  return logoContent;
};