import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  children: React.ReactNode;
  size?: number | string;
  className?: string;
}

export const IconComponent: React.FC<IconProps> = ({
  children,
  size = 24,
  className = '',
  viewBox = '0 0 24 24',
  fill = 'currentColor',
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={fill}
      className={className}
      {...props}
    >
      {children}
    </svg>
  );
};
