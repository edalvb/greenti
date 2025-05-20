"use client";

import { useState, useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

interface UseCounterOptions {
  from?: number;
  duration?: number;
  delay?: number;
  once?: boolean;
}

export function useCounter(to: number, options: UseCounterOptions = {}) {
  const { from = 0, duration = 1.5, delay = 0.2, once = true } = options;
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration,
        delay,
        onUpdate(value) {
          setCount(Math.round(value));
        },
      });
      return () => controls.stop();
    } else if (!once) {
      setCount(from);
    }
  }, [to, from, duration, delay, isInView, once]);

  return { count, ref };
}
