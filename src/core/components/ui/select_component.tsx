import React from 'react';

export interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: SelectOption[];
  placeholder?: string;
  containerClassName?: string;
}

export const SelectComponent = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, options, placeholder, containerClassName, name, ...props }, ref) => {
    const selectId = name || React.useId();
    return (
      <div className={`w-full ${containerClassName || ''}`}>
        {label && (
          <label
            htmlFor={selectId}
            className="block text-sm font-medium text-neutral-darker mb-1"
          >
            {label}
          </label>
        )}
        <select
          id={selectId}
          name={name}
          className={`flex h-10 w-full items-center justify-between rounded-md border border-neutral-light bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-neutral-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 ${className}`}
          ref={ref}
          {...props}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((option) => (
            <option key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="mt-1 text-xs text-red-600">{error}</p>
        )}
      </div>
    );
  }
);

SelectComponent.displayName = 'SelectComponent';
