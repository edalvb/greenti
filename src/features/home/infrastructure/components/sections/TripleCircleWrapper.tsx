"use client";
import React, { useRef, useState, useLayoutEffect } from "react";

/**
 * Wrapper que renderiza los tres bloques (SectorsSection, PresenceSection, WeWorksSection)
 * dentro de un gran círculo de fondo (#FAFAFA) que comienza a mitad del primero
 * y termina a mitad del tercero. Para lograr el efecto visual, el círculo se posiciona
 * absolutamente y se expande cubriendo verticalmente más que el alto total de los hijos.
 */
export const TripleCircleWrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const sectionRefs = useRef<HTMLDivElement[]>([]);
  const [metrics, setMetrics] = useState({ first: 0, last: 0, wrapper: 0 });

  // Asegura refs indexadas
  const enhanceChildren = React.Children.map(children, (child, idx) => {
    if (!React.isValidElement(child)) return child;
    return (
      <div
        ref={(el) => {
          if (el) sectionRefs.current[idx] = el;
        }}
        className="relative"
      >
        {child}
      </div>
    );
  });

  useLayoutEffect(() => {
    if (!wrapperRef.current) return;

    const measure = () => {
      const first = sectionRefs.current[0]?.offsetHeight || 0;
      const last = sectionRefs.current[sectionRefs.current.length - 1]?.offsetHeight || 0;
      const wrapper = wrapperRef.current?.offsetHeight || 0;
      setMetrics({ first, last, wrapper });
    };

    measure();

    const resizeObserver = new ResizeObserver(() => measure());
    resizeObserver.observe(wrapperRef.current);
    sectionRefs.current.forEach((s) => s && resizeObserver.observe(s));
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("resize", measure);
      resizeObserver.disconnect();
    };
  }, [children]);

  const { first, last, wrapper } = metrics;
  // Cálculo: círculo comienza en mitad del primero y termina en mitad del último.
  // Altura útil = wrapper - first/2 - last/2
  const circleHeight = Math.max(0, wrapper - first / 2 - last / 2);
  // Para mantener forma circular, usamos el menor entre ancho disponible y circleHeight (limitado) y centramos.
  // Damos un factor para pantallas anchas.
  const idealDiameter = circleHeight; // circleHeight ya expresa distancia vertical objetivo
  const diameter = idealDiameter; // se puede ajustar luego con factor si se desea más ancho
  const circleTop = first / 2; // offset desde arriba del wrapper

  return (
    <div ref={wrapperRef} className="relative w-full">
      {circleHeight > 0 && (
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 rounded-full bg-[#FAFAFA] transition-all duration-500 ease-out"
          style={{
            top: circleTop,
            width: diameter,
            height: diameter,
            // zIndex por debajo del contenido
            zIndex: 0,
            // Sombra muy suave opcional para recorte visual
            boxShadow: "0 0 40px -10px rgba(0,0,0,0.04)",
          }}
        />
      )}
      {/* Contenido */}
      <div className="relative z-10 space-y-0">{enhanceChildren}</div>
    </div>
  );
};
