import React, { InputHTMLAttributes, forwardRef, useId } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  errorClassName?: string;
  radius?: "default" | "cta";
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      label,
      id,
      error,
      containerClassName = "",
      labelClassName = "",
      inputClassName = "",
      errorClassName = "",
      name,
      radius = "cta",
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id || (name ? `${name}-${generatedId}` : generatedId);

    const radiusStyles = {
      default: "rounded-md",
      cta: "rounded-btn-cta",
    };

    const baseInputStyles =
      `flex h-10 w-full border bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`;
    
    const errorStateStyles = error ? "border-red-500 focus-visible:ring-red-500" : "border-neutral-light";

    return (
      <div className={`w-full ${containerClassName}`}>
        {label && (
          <label
            htmlFor={inputId}
            className={`block text-sm font-medium text-neutral-darker mb-1 ${labelClassName}`}
          >
            {label}
          </label>
        )}
        <input
          id={inputId}
          name={name}
          type={type}
          className={`${baseInputStyles} ${radiusStyles[radius]} ${errorStateStyles} ${inputClassName} ${className}`}
          ref={ref}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
        {error && (
          <p 
            id={`${inputId}-error`} 
            className={`mt-1 text-xs text-red-600 ${errorClassName}`}
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";
