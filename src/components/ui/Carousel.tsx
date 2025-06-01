"use client"

import React, { useEffect, useRef, useState, useCallback } from 'react';

interface CarouselProps {
  items: React.ReactNode[];
  itemWidth?: number;
  gap?: number;
  speed?: number;
  className?: string;
  itemClassName?: string;
}

export const Carousel: React.FC<CarouselProps> = ({
  items,
  itemWidth = 240, 
  gap = 80, 
  speed = 30,
  className = '',
  itemClassName = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const animationFrameId = useRef<number | null>(null);
  const scrollPosition = useRef(0);

  const fullItemWidth = itemWidth + gap;
  const duplicatedItems = items.length > 0 ? [...items, ...items] : [];

  const animateScroll = useCallback(() => {
    if (contentRef.current && !isHovering && items.length > 0) {
      scrollPosition.current += speed / 60;
      if (scrollPosition.current >= items.length * fullItemWidth) {
        scrollPosition.current = 0;
      }
      contentRef.current.style.transform = `translateX(-${scrollPosition.current}px)`;
    }
    animationFrameId.current = requestAnimationFrame(animateScroll);
  }, [isHovering, items.length, fullItemWidth, speed]);

  useEffect(() => {
    if (items.length === 0) return;

    animationFrameId.current = requestAnimationFrame(animateScroll);
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [animateScroll, items.length]);

  if (items.length === 0) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden w-full ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        ref={contentRef}
        className="flex whitespace-nowrap transition-transform duration-100 ease-linear"
        style={{ gap: `${gap}px` }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={`carousel-item-${index}`}
            className={`flex-shrink-0 ${itemClassName}`}
            style={{ width: `${itemWidth}px` }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};