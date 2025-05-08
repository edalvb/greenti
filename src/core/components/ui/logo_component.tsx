import React from 'react';
import Link from 'next/link';

interface LogoComponentProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  href?: string;
}

export const LogoComponent: React.FC<LogoComponentProps> = ({
  width = 120,
  height = 'auto',
  className = '',
  href = '/',
}) => {
  const logoContent = (
    <span
      className={`font-bold text-3xl text-primary ${className}`}
      style={{ width, height }}
    >
      Green<span className="text-secondary">TI</span>
    </span>
  );

  if (href) {
    return <Link href={href}>{logoContent}</Link>;
  }

  return logoContent;
};
