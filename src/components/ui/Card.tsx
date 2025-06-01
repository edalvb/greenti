import React from "react";

interface CardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  children: React.ReactNode;
  title?: React.ReactNode;
  footer?: React.ReactNode;
  padding?: "sm" | "md" | "lg" | "none";
  shadow?: "none" | "sm" | "md" | "lg" | "xl" | "service-card";
  borderColor?: string;
  backgroundColor?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  title,
  footer,
  padding = "md",
  shadow,
  borderColor = "border-neutral-light",
  backgroundColor = "bg-white",
  ...props
}) => {
  const paddingStyles = {
    sm: "p-3 md:p-4",
    md: "p-6 md:p-8",
    lg: "p-8 md:p-10",
    none: "p-0",
  };

  let shadowClass = "shadow-deep";
  if (shadow) {
    switch (shadow) {
      case "none":
        shadowClass = "";
        break;
      case "sm":
        shadowClass = "shadow-sm";
        break;
      case "md":
        shadowClass = "shadow-md";
        break;
      case "lg":
        shadowClass = "shadow-lg";
        break;
      case "xl":
        shadowClass = "shadow-xl";
        break;
      case "service-card":
        shadowClass = "shadow-service-card";
        break;
      default:
        shadowClass = "shadow-deep";
    }
  }

  return (
    <div
      className={`rounded-btn-cta ${shadowClass} ${backgroundColor} ${borderColor} ${paddingStyles[padding]} ${className}`}
      {...props}
    >
      {title && (
        <div
          className={`mb-4 ${padding === "none" ? "px-6 pt-6 md:px-8 md:pt-8" : ""}`}
        >
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
        <div
          className={`mt-4 ${padding === "none" ? "px-6 pb-6 md:px-8 md:pb-8" : ""}`}
        >
          {footer}
        </div>
      )}
    </div>
  );
};