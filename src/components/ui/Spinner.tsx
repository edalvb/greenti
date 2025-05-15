import React from "react";

interface SpinnerProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
  color?: string;
  ariaLabel?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = "md",
  className = "",
  color = "currentColor",
  ariaLabel = "Loading",
}) => {
  const sizeClasses = {
    xs: "h-3 w-3",
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
    xl: "h-12 w-12",
  };

  return (
    <svg
      className={`animate-spin ${sizeClasses[size]} ${className}`}
      style={{ color }}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      role="status"
      aria-live="polite"
      aria-label={ariaLabel}
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
};