import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg" | "icon";
  asChild?: boolean;
  children: React.ReactNode;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  asChild = false,
  className = "",
  children,
  isLoading = false,
  disabled,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-70 disabled:pointer-events-none";

  const variantStyles = {
    primary:
      "bg-primary text-white hover:bg-primary/90 active:bg-accent-dark shadow-md hover:shadow-lg",
    secondary:
      "bg-secondary text-white hover:bg-secondary/90 active:bg-neutral-darkest shadow-md hover:shadow-lg",
    outline:
      "border-2 border-primary text-primary hover:bg-primary/10 active:bg-primary/20",
    ghost:
      "text-secondary hover:bg-neutral-light/50 hover:text-primary active:bg-neutral-light/70",
    link: "text-primary underline-offset-4 hover:underline active:text-accent-dark",
  };

  const sizeStyles = {
    sm: "h-9 px-4 py-2 text-sm",
    md: "h-10 px-6 py-2.5 text-base",
    lg: "h-12 px-8 py-3 text-lg",
    icon: "h-10 w-10 p-0", 
  };

  const Comp = asChild ? "span" : "button";

  return (
    <Comp
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      disabled={disabled || isLoading}
      aria-disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && size === 'icon' && (
        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {isLoading && size !== 'icon' && (
         <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {!isLoading && children}
    </Comp>
  );
};