import React from 'react';

interface AccordionItemComponentProps {
  title: React.ReactNode;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
}

const ChevronDownIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.06z" clipRule="evenodd" />
  </svg>
);

export const AccordionItemComponent: React.FC<AccordionItemComponentProps> = ({
  title,
  children,
  isOpen,
  onToggle,
  className = '',
  titleClassName = '',
  contentClassName = '',
}) => {
  return (
    <div className={`border-b border-neutral-light ${className}`}>
      <h3>
        <button
          type="button"
          aria-expanded={isOpen}
          className={`flex w-full items-center justify-between py-4 text-left font-medium text-neutral-darkest hover:bg-neutral-lightest ${titleClassName}`}
          onClick={onToggle}
        >
          <span>{title}</span>
          <ChevronDownIcon
            className={`h-5 w-5 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
      </h3>
      {isOpen && (
        <div className={`py-4 text-neutral-darker ${contentClassName}`}>
          {children}
        </div>
      )}
    </div>
  );
};
