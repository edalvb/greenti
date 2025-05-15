import React from "react";

interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  children: React.ReactNode;
  title?: React.ReactNode;
  footer?: React.ReactNode;
  padding?: "sm" | "md" | "lg" | "none";
  shadow?: "none" | "sm" | "md" | "lg" | "xl";
  borderColor?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  title,
  footer,
  padding = "md",
  shadow = "sm",
  borderColor = "border-neutral-light",
  ...props
}) => {
  const paddingStyles = {
    sm: "p-3 md:p-4",
    md: "p-6 md:p-8",
    lg: "p-8 md:p-10",
    none: "p-0",
  };

  const shadowStyles = {
    none: "shadow-none",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
  };

  return (
    <div
      className={`rounded-lg bg-white text-neutral-darkest ${borderColor} ${paddingStyles[padding]} ${shadowStyles[shadow]} ${className}`}
      {...props}
    >
      {title && (
        <div className={`mb-4 ${padding === "none" ? "px-6 pt-6 md:px-8 md:pt-8" : ""}`}>
          {typeof title === "string" ? (
            <h3 className="text-xl lg:text-2xl font-semibold leading-none tracking-tight text-secondary">
              {title}
            </h3>
          ) : (
            title
          )}
        </div>
      )}
      <div className="text-neutral-darker">{children}</div>
      {footer && (
        <div className={`mt-4 ${padding === "none" ? "px-6 pb-6 md:px-8 md:pb-8" : ""}`}>
          {footer}
        </div>
      )}
    </div>
  );
};