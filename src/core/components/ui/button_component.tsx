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
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary/90',
    secondary: 'bg-secondary text-white hover:bg-secondary/90',
    outline: 'border border-primary text-primary hover:bg-primary/10',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    link: 'text-primary underline-offset-4 hover:underline',
  };

  const sizeStyles = {
    sm: 'h-9 px-3 py-2 text-sm',
    md: 'h-10 px-4 py-2 text-base',
    lg: 'h-11 px-8 py-2 text-lg',
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
