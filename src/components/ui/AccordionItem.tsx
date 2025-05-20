import React from 'react';
import { IconChevronDown } from '@tabler/icons-react';

interface AccordionItemProps {
  title: React.ReactNode;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
  iconClassName?: string;
  iconSize?: number;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  isOpen,
  onToggle,
  className = '',
  titleClassName = '',
  contentClassName = '',
  iconClassName = 'text-secondary',
  iconSize = 20,
}) => {
  return (
    <div className={`border-b border-neutral-light ${className}`}>
      <h3>
        <button
          type="button"
          aria-expanded={isOpen}
          className={`flex w-full items-center justify-between py-4 text-left font-semibold text-secondary hover:bg-neutral-lightest/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${titleClassName}`}
          onClick={onToggle}
        >
          <span className="flex-1">{title}</span>
          <IconChevronDown
            size={iconSize}
            className={`transform transition-transform duration-200 ${iconClassName} ${isOpen ? 'rotate-180' : ''}`}
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
