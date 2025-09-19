import React from "react";
import { Button } from "./Button";

export interface VerticalTimelineItem {
  icon?: React.ReactNode;
  labelStep?: React.ReactNode;
  title?: React.ReactNode;
  concept?: React.ReactNode;
}

interface VerticalTimelineProps {
  step1: VerticalTimelineItem;
  step2: VerticalTimelineItem;
  step3: VerticalTimelineItem;
  onIWantAdvice?: () => void;
  labelIWantAdvice?: string;
}

// Timeline vertical responsive con Tailwind
export const VerticalTimeline = (prop: VerticalTimelineProps) => {
  const steps: VerticalTimelineItem[] = [prop.step1, prop.step2, prop.step3];

  return (
    <div className="w-full">
      <div className="relative">
        {/* Línea vertical continua detrás de los pasos */}
        <div
          className="pointer-events-none absolute left-7 sm:left-8 top-7 sm:top-8 bottom-6 border-l-2 border-dashed border-[#E6E6F1]"
          aria-hidden="true"
        />

        <div className="flex flex-col gap-8 sm:gap-10">
          {steps.map((step, idx) => (
            <div key={idx} className="relative pl-16 sm:pl-20">
              {/* Icono */}
              <div className="absolute left-0 top-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#12B759] flex items-center justify-center overflow-hidden">
                <div className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center">
                  {step.icon}
                </div>
              </div>

              {/* Contenido */}
              <div className="pt-1">
                {step.labelStep && (
                  <div className="text-[#002140] text-sm sm:text-base font-medium">
                    {step.labelStep}
                  </div>
                )}
                {step.title && (
                  <div className="text-[#002140] text-xl sm:text-2xl md:text-3xl font-bold mt-1">
                    {step.title}
                  </div>
                )}
                {step.concept && (
                  <div className="text-[#002140] text-base sm:text-lg font-medium mt-3 max-w-prose">
                    {step.concept}
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Pie con línea horizontal conectada y botón */}
          <div className="relative pl-16 sm:pl-20 h-12 flex items-center">
            <div
              className="pointer-events-none absolute left-7 sm:left-8 top-1/2 -translate-y-1/2 w-14 border-t-2 border-dashed border-[#E6E6F1]"
              aria-hidden="true"
            />
            <Button onClick={prop.onIWantAdvice} className="text-white ml-4">
              {prop.labelIWantAdvice}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
