import React, { SelectHTMLAttributes, forwardRef, useId } from "react";

export interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: SelectOption[];
  placeholder?: string;
  containerClassName?: string;
  labelClassName?: string;
  selectClassName?: string;
  errorClassName?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      label,
      id,
      error,
      options,
      placeholder,
      containerClassName = "",
      labelClassName = "",
      selectClassName = "",
      errorClassName = "",
      name,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const selectId = id || (name ? `${name}-${generatedId}` : generatedId);

    const baseSelectStyles =
      "flex h-10 w-full items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-neutral-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1";
    
    const errorStateStyles = error ? "border-red-500 focus-visible:ring-red-500" : "border-neutral-light";

    return (
      <div className={`w-full ${containerClassName}`}>
        {label && (
          <label
            htmlFor={selectId}
            className={`block text-sm font-medium text-neutral-darker mb-1 ${labelClassName}`}
          >
            {label}
          </label>
        )}
        <select
          id={selectId}
          name={name}
          className={`${baseSelectStyles} ${errorStateStyles} ${selectClassName} ${className}`}
          ref={ref}
          aria-invalid={!!error}
          aria-describedby={error ? `${selectId}-error` : undefined}
          {...props}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <p 
            id={`${selectId}-error`} 
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
Select.displayName = "Select";