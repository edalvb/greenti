import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  containerClassName?: string;
}

export const InputComponent = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, containerClassName, name, ...props }, ref) => {
    const inputId = name || React.useId();
    return (
      <div className={`w-full ${containerClassName || ''}`}>
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-neutral-darker mb-1"
          >
            {label}
          </label>
        )}
        <input
          id={inputId}
          name={name}
          type={type}
          className={`flex h-10 w-full rounded-md border border-neutral-light bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="mt-1 text-xs text-red-600">{error}</p>
        )}
      </div>
    );
  }
);

InputComponent.displayName = 'InputComponent';
