import React, { TextareaHTMLAttributes, forwardRef, useId } from "react";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  containerClassName?: string;
  labelClassName?: string;
  textareaClassName?: string;
  errorClassName?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      label,
      id,
      error,
      containerClassName = "",
      labelClassName = "",
      textareaClassName = "",
      errorClassName = "",
      name,
      rows = 3,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const textareaId = id || (name ? `${name}-${generatedId}` : generatedId);

    const baseTextareaStyles =
      "flex min-h-[80px] w-full rounded-md border bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-neutral-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";
    
    const errorStateStyles = error ? "border-red-500 focus-visible:ring-red-500" : "border-neutral-light";

    return (
      <div className={`w-full ${containerClassName}`}>
        {label && (
          <label
            htmlFor={textareaId}
            className={`block text-sm font-medium text-neutral-darker mb-1 ${labelClassName}`}
          >
            {label}
          </label>
        )}
        <textarea
          id={textareaId}
          name={name}
          rows={rows}
          className={`${baseTextareaStyles} ${errorStateStyles} ${textareaClassName} ${className}`}
          ref={ref}
          aria-invalid={!!error}
          aria-describedby={error ? `${textareaId}-error` : undefined}
          {...props}
        />
        {error && (
          <p 
            id={`${textareaId}-error`} 
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
Textarea.displayName = "Textarea";