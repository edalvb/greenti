import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  children?: React.ReactNode;
  size?: number | string;
  className?: string;
  title?: string;
}

export const Icon: React.FC<IconProps> = ({
  children,
  size = 24,
  className = '',
  viewBox = '0 0 24 24',
  fill = 'currentColor',
  stroke = 'none',
  strokeWidth = 0,
  title,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={fill}
      stroke={stroke === 'none' && fill !== 'none' ? 'none' : stroke === 'none' ? 'currentColor' : stroke}
      strokeWidth={strokeWidth}
      className={className}
      aria-hidden={title ? undefined : true}
      focusable="false"
      {...props}
    >
      {title && <title>{title}</title>}
      {children}
    </svg>
  );
};