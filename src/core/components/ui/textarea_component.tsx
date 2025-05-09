import React from "react";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  containerClassName?: string;
}

export const TextareaComponent = React.forwardRef<
  HTMLTextAreaElement,
  TextareaProps
>(({ className, label, error, containerClassName, name, ...props }, ref) => {
  const generatedId = React.useId();

  const textareaId = name != null ? generatedId : props.id || undefined;

  return (
    <div className={`w-full ${containerClassName || ""}`}>
      {label && (
        <label
          htmlFor={textareaId}
          className="block text-sm font-medium text-neutral-darker mb-1"
        >
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        name={name}
        className={`flex min-h-[80px] w-full rounded-md border border-neutral-light bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-neutral-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
        ref={ref}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
});

TextareaComponent.displayName = "TextareaComponent";
