"use client";

import { useRef } from "react";
import { useScroll, useTransform, MotionValue } from "framer-motion";

interface UseParallaxOutput {
  ref: React.RefObject<HTMLDivElement | null>;
  y: MotionValue<string>;
}

export function useParallax(speedFactor: number = 0.1): UseParallaxOutput {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);

  return { ref, y };
}
