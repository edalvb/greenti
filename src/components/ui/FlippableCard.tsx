import React from 'react';

interface FlippableCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  width?: string;
  height?: string;
  className?: string;
  frontClassName?: string;
  backClassName?: string;
}

export const FlippableCard: React.FC<FlippableCardProps> = ({
  frontContent,
  backContent,
  width = '300px',
  height = '200px',
  className = '',
  frontClassName = 'bg-neutral-lightest text-secondary',
  backClassName = 'bg-secondary text-neutral-lightest',
}) => {
  return (
    <div
      className={`group [perspective:1000px] ${className}`}
      style={{ width, height }}
    >
      <div
        className={`relative h-full w-full rounded-btn-cta shadow-deep transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]`}
      >
        <div
          className={`absolute inset-0 h-full w-full flex flex-col items-center justify-center rounded-btn-cta [backface-visibility:hidden] ${frontClassName}`}
        >
          {frontContent}
        </div>
        <div
          className={`absolute inset-0 h-full w-full flex flex-col items-center justify-center rounded-btn-cta [backface-visibility:hidden] [transform:rotateY(180deg)] ${backClassName}`}
        >
          {backContent}
        </div>
      </div>
    </div>
  );
};