import React, { InputHTMLAttributes, forwardRef, useId } from 'react';
import { IconCheck } from '@tabler/icons-react';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
  error?: string;
  containerClassName?: string;
  labelClassName?: string;
  checkboxClassName?: string;
  errorClassName?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      label,
      id,
      error,
      containerClassName = '',
      labelClassName = '',
      checkboxClassName = '',
      errorClassName = '',
      name,
      checked,
      onChange,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const checkboxId = id || (name ? `${name}-${generatedId}` : generatedId);

    return (
      <div className={`w-full ${containerClassName}`}>
        <div className="flex items-start">
          <div className="relative flex items-center">
            <input
              id={checkboxId}
              name={name}
              type="checkbox"
              ref={ref}
              checked={checked}
              onChange={onChange}
              className={`peer sr-only ${checkboxClassName}`}
              aria-invalid={!!error}
              aria-describedby={error ? `${checkboxId}-error` : undefined}
              {...props}
            />
            <label
              htmlFor={checkboxId}
              className={`flex h-4 w-4 cursor-pointer items-center justify-center rounded border-2 border-neutral-dark bg-white transition-all peer-checked:border-primary peer-checked:bg-primary peer-focus-visible:ring-2 peer-focus-visible:ring-primary peer-focus-visible:ring-offset-2 ${error ? 'border-red-500' : ''}`}
            >
              {checked && <IconCheck size={12} className="text-white" strokeWidth={3} />}
            </label>
          </div>
          {label && (
            <label
              htmlFor={checkboxId}
              className={`ml-2 block text-xs text-neutral-darker cursor-pointer select-none ${labelClassName}`}
            >
              {label}
            </label>
          )}
        </div>
        {error && (
          <p
            id={`${checkboxId}-error`}
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

Checkbox.displayName = 'Checkbox';
