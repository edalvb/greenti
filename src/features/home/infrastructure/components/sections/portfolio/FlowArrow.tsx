"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

// Dibuja una flecha verde punteada enlazando Challenge -> Solution -> (debajo de Results, encima de Technologies) -> Testimonial
// Estrategia:
// - Calcula puntos clave leyendo boundingClientRect de elementos identificados por IDs dentro de main#project-main
// - Genera un path SVG con líneas y curvas suaves entre segmentos dominantes H/V
// - Usa z-index y pointer-events-none para no interferir con interacción

function getEl<T extends HTMLElement>(selector: string): T | null {
  return document.querySelector(selector) as T | null;
}

function useRects() {
  const [rects, setRects] = useState<{
    main: DOMRect | null;
    sectionChallenge: DOMRect | null;
    pChallenge: DOMRect | null;
    sectionSolution: DOMRect | null;
    sectionResults: DOMRect | null;
    sectionTechnologies: DOMRect | null;
    sectionTestimonial: DOMRect | null;
    testimonialCard: DOMRect | null;
    testimonialTitle: DOMRect | null;
  }>({
    main: null,
    sectionChallenge: null,
    pChallenge: null,
    sectionSolution: null,
    sectionResults: null,
    sectionTechnologies: null,
    sectionTestimonial: null,
    testimonialCard: null,
    testimonialTitle: null,
  });

  const measure = () => {
    const main = getEl<HTMLElement>("main#project-main");
    const sectionChallenge = getEl<HTMLElement>("#challenge");
    const pChallenge = getEl<HTMLElement>(
      "#challenge p.text-secondary.leading-relaxed"
    );
    const sectionSolution = getEl<HTMLElement>("#solution");
    const sectionResults = getEl<HTMLElement>("#results");
    const sectionTechnologies = getEl<HTMLElement>("#technologies");
    const sectionTestimonial = getEl<HTMLElement>("#testimonial");
    const testimonialCardEl = getEl<HTMLElement>("#testimonial .container") || getEl<HTMLElement>("#testimonial > div");
    const testimonialTitleEl = getEl<HTMLElement>("#testimonial h3");

    setRects({
      main: main ? main.getBoundingClientRect() : null,
      sectionChallenge: sectionChallenge ? sectionChallenge.getBoundingClientRect() : null,
      pChallenge: pChallenge ? pChallenge.getBoundingClientRect() : null,
      sectionSolution: sectionSolution
        ? sectionSolution.getBoundingClientRect()
        : null,
      sectionResults: sectionResults ? sectionResults.getBoundingClientRect() : null,
      sectionTechnologies: sectionTechnologies
        ? sectionTechnologies.getBoundingClientRect()
        : null,
      sectionTestimonial: sectionTestimonial
        ? sectionTestimonial.getBoundingClientRect()
        : null,
      testimonialCard: testimonialCardEl ? testimonialCardEl.getBoundingClientRect() : null,
      testimonialTitle: testimonialTitleEl ? testimonialTitleEl.getBoundingClientRect() : null,
    });
  };

  useEffect(() => {
    measure();
    const ro = new ResizeObserver(() => measure());
    const main = getEl<HTMLElement>("main#project-main");
    if (main) ro.observe(main);
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", measure, { passive: true });
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", measure);
    };
  }, []);

  return rects;
}

function toLocal(point: { x: number; y: number }, container: DOMRect) {
  return { x: point.x - container.left, y: point.y - container.top };
}

function pathCmd(points: { x: number; y: number }[]) {
  if (!points.length) return "";
  const d: string[] = ["M", points[0].x.toFixed(1), points[0].y.toFixed(1)];
  for (let i = 1; i < points.length; i++) {
    d.push("L", points[i].x.toFixed(1), points[i].y.toFixed(1));
  }
  return d.join(" ");
}

export function FlowArrow() {
  const rects = useRects();

  const svgData = useMemo(() => {
    const { main, sectionChallenge, pChallenge, sectionSolution, sectionResults, sectionTechnologies, sectionTestimonial, testimonialCard, testimonialTitle } = rects;
    if (!main || !sectionChallenge || !pChallenge || !sectionSolution || !sectionResults || !sectionTechnologies || !sectionTestimonial || !testimonialCard) {
      return null;
    }

    // Puntos clave siguiendo el recorrido solicitado
    // 1) Origen: parte izquierda del <p> en Challenge, pero desplazamos un poco más a la IZQUIERDA del Challenge
    const origin = toLocal({ x: pChallenge.left, y: pChallenge.top + pChallenge.height / 2 }, main);
    const challengeLeftX = sectionChallenge.left - main.left; // borde izquierdo de Challenge relativo al main
    const originLeft = { x: Math.max(challengeLeftX - 24, 8), y: origin.y }; // mover 24px más a la izquierda del Challenge

    // 2) Descenso inicial: baja en línea recta, asegurando que quede POR DEBAJO de Solution
    const belowSolutionY = sectionSolution.bottom - main.top + 20;
    const down1 = { x: originLeft.x, y: Math.max(originLeft.y + 40, belowSolutionY) };

  // 3) Cruce horizontal: hacia la DERECHA hasta el extremo del contenedor
  const rightEdge = main.width - 16; // padding visual
  const cross = { x: rightEdge, y: down1.y };

    // 4) Descenso vertical desde ahí
    // Bajamos hasta DEBAJO de Results (unos px extra)
  const belowResultsY = sectionResults.bottom - main.top + 20; // 20px por debajo
  const down2 = { x: rightEdge, y: belowResultsY };

  // Alinear al lado central del widget Results después de bajar
  const resultsCenterX = sectionResults.left - main.left + sectionResults.width / 2;
  const toCenterAtBelow = { x: resultsCenterX, y: belowResultsY };

    // 5) Retorno hacia la izquierda por DEBAJO de Results y por ENCIMA de Technologies
  const aboveTechnologiesY = sectionTechnologies.top - main.top - 20; // 20px por encima de Technologies
    const leftEdge = 16; // padding visual
    // Asegurar que el tramo H vaya entre ambos (si hay solape, usa belowResultsY)
    const midY = belowResultsY <= aboveTechnologiesY
      ? (belowResultsY + aboveTechnologiesY) / 2
      : belowResultsY;
    // Subir/bajar al nivel intermedio en el centro de Results para que el tramo a la izquierda quede recto
    const riseToMid = { x: resultsCenterX, y: midY };
    const leftRun = { x: leftEdge, y: midY };

    // 6) Trayecto final: baja un poco más y luego hacia la derecha hasta Testimonial
    // Punto final: mitad vertical del card de Testimonial, a su costado izquierdo
    const endY = testimonialCard.top - main.top + testimonialCard.height / 2 + 130;
    const endX = testimonialCard.left - main.left - 40; // 40px dentro para que la punta toque el borde
    const down3 = { x: leftRun.x, y: endY };
    const toTestimonial = { x: endX, y: endY };

  // Añadimos un pequeño tramo horizontal inicial (origin -> originLeft) para alejar la línea del texto
    const points = [
      origin,
      originLeft,
      down1,
      cross,
      down2,
      toCenterAtBelow,
      riseToMid,
      leftRun,
      down3,
      toTestimonial,
    ];

    return {
      width: main.width,
      height: Math.max(main.height, toTestimonial.y + 50),
      d: pathCmd(points),
    };
  }, [rects]);

  if (!svgData) return null;

  return (
    <div
      className="pointer-events-none absolute inset-0 z-[5]"
      aria-hidden="true"
    >
      <svg
        width={svgData.width}
        height={svgData.height}
        viewBox={`0 0 ${svgData.width} ${svgData.height}`}
        className="block"
      >
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L6,3 z" fill="#16a34a" />
          </marker>
          <style>
            {`
              @keyframes drawline {
                from { stroke-dashoffset: var(--dash-total, 1000); }
                to { stroke-dashoffset: 0; }
              }
            `}
          </style>
        </defs>
        <path
          d={svgData.d}
          fill="none"
          stroke="#16a34a"
          strokeWidth={3}
          strokeDasharray="6 6"
          strokeLinecap="round"
          strokeLinejoin="round"
          markerEnd="url(#arrowhead)"
          style={{
            // Efecto de dibujo: usa un dash total grande y anima el offset
            strokeDasharray: "6 6",
            strokeDashoffset: 1000,
            animation: "drawline 1.8s ease-out forwards",
          }}
        />
      </svg>
    </div>
  );
}
