import React from 'react';
import { IconChevronDown } from '@tabler/icons-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

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
  const prefersReducedMotion = useReducedMotion();
  return (
    <div className={`rounded-btn-cta my-4 bg-[#FAFAFA]`}>
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
            className={`transform transition-transform duration-300 ease-out ${iconClassName} ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { height: 'auto', opacity: 1 },
              collapsed: { height: 0, opacity: 0 },
            }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className={`py-4 text-neutral-darker ${contentClassName}`}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
