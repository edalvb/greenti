import React from 'react';

interface ButtonComponentProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  asChild?: boolean;
  children: React.ReactNode;
}

export const ButtonComponent: React.FC<ButtonComponentProps> = ({
  variant = 'primary',
  size = 'md',
  asChild = false,
  className = '',
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-70 disabled:pointer-events-none';

  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary/90 active:bg-accent-dark shadow-md hover:shadow-lg',
    secondary: 'bg-secondary text-white hover:bg-secondary/90 active:bg-neutral-darkest shadow-md hover:shadow-lg',
    outline: 'border-2 border-primary text-primary hover:bg-primary/10 active:bg-primary/20',
    ghost: 'hover:bg-accent/50 hover:text-primary active:bg-accent/70 text-neutral-darkest',
    link: 'text-primary underline-offset-4 hover:underline active:text-accent-dark',
  };

  const sizeStyles = {
    sm: 'h-9 px-4 py-2 text-sm',
    md: 'h-10 px-6 py-2.5 text-base',
    lg: 'h-12 px-8 py-3 text-lg',
    icon: 'h-10 w-10',
  };

  const Comp = asChild ? React.Fragment : 'button';

  return (
    <Comp
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
};