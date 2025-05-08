import React from 'react';

interface CardComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  title?: React.ReactNode;
  footer?: React.ReactNode;
  padding?: 'sm' | 'md' | 'lg' | 'none';
}

export const CardComponent: React.FC<CardComponentProps> = ({
  children,
  className = '',
  title,
  footer,
  padding = 'md',
  ...props
}) => {
  const paddingStyles = {
    sm: 'p-3',
    md: 'p-6',
    lg: 'p-8',
    none: 'p-0'
  };

  return (
    <div
      className={`rounded-lg border bg-white text-neutral-darkest shadow-sm ${paddingStyles[padding]} ${className}`}
      {...props}
    >
      {title && (
        <div className={`mb-4 ${padding === 'none' ? 'px-6 pt-6' : ''}`}>
          {typeof title === 'string' ? <h3 className="text-xl font-semibold leading-none tracking-tight">{title}</h3> : title}
        </div>
      )}
      <div>{children}</div>
      {footer && (
        <div className={`mt-4 ${padding === 'none' ? 'px-6 pb-6' : ''}`}>
          {footer}
        </div>
      )}
    </div>
  );
};
