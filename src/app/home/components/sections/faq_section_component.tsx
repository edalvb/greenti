"use client";

import React from "react";
import { useHomeContext } from "@/app/home/presentation/home_context";
import { HomeController } from "@/app/home/presentation/home_controller";
import { AccordionItemComponent } from "@/core/components/ui/accordion_item_component";

export const FaqSectionComponent: React.FC = () => {
  const { state, dispatch } = useHomeContext();
  const controller = React.useMemo(
    () => new HomeController(dispatch),
    [dispatch],
  );

  return (
    <section id="faq" className="py-16 md:py-24 bg-neutral-lightest">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Preguntas frecuentes
            </h2>
            <p className="text-neutral-darker text-lg">
              ¿Aún tienes dudas? No te preocupes, aquí tienes algunas Preguntas
              Frecuentes que te pueden ayudar.
            </p>
          </div>
          <div className="lg:col-span-2">
            {state.faqItems.length > 0 ? (
              <div className="space-y-0 divide-y divide-neutral-light border-t border-b border-neutral-light">
                {state.faqItems.map((item) => (
                  <AccordionItemComponent
                    key={item.id}
                    title={item.question}
                    isOpen={state.activeFaqItem === item.id}
                    onToggle={() => controller.toggleFaqItem(item.id)}
                    className="bg-white first:rounded-t-lg last:rounded-b-lg shadow-sm"
                    titleClassName="px-6 font-semibold text-secondary hover:bg-neutral-lightest/50"
                    contentClassName="px-6 pb-6 text-neutral-darker"
                  >
                    {item.answer}
                  </AccordionItemComponent>
                ))}
              </div>
            ) : (
              <p className="text-neutral-dark">
                No hay preguntas frecuentes disponibles en este momento.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
