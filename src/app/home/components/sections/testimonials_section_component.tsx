"use client";

import React from "react";
import Image from "next/image";
import { useHomeContext } from "@/app/home/presentation/home_context";
import { CardComponent } from "@/core/components/ui/card_component";

const QuoteIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 44 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.3696 33.64L19.5776 0H11.9856L0.497597 33.64H14.3696ZM38.6816 33.64L43.8896 0H36.2976L24.8096 33.64H38.6816Z"
      fill="currentColor"
    />
  </svg>
);

const clientLogos = [
  { src: "/assets/images/client_logo_easydrop.svg", alt: "EasyDrop Logo" },
  { src: "/assets/images/client_logo_omarsa.svg", alt: "Omarsa Logo" },
  { src: "/assets/images/client_logo_coosofan.svg", alt: "Coosofan Logo" },
  { src: "/assets/images/client_logo_homs.svg", alt: "Homs Rentals Logo" },
  { src: "/assets/images/client_logo_avesa.svg", alt: "Avesa Logo" },
];

export const TestimonialsSectionComponent: React.FC = () => {
  const { state } = useHomeContext();
  const firstTestimonial = state.testimonials[0];
  const coosofanApp = {
    name: "Coosofan",
    tag: "Financiero",
    description:
      "Lorem ipsum amet, consectetur adipiscing elit. Suspendis varius enim eros elementum tristique. Duis cursus.",
    imageUrl: "/assets/images/app_mockup_coosofan.png",
  };

  if (!firstTestimonial) return null;

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-neutral-lightest">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12 md:mb-16">
          ¿Qué dicen nuestros clientes?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start mb-16">
          <CardComponent
            className="bg-white p-6 md:p-8 relative"
            padding="none"
          >
            <QuoteIcon className="w-8 h-auto md:w-10 text-primary/30 absolute top-6 left-6" />
            <p className="text-neutral-darker text-lg md:text-xl italic leading-relaxed mt-12 mb-6">
              {firstTestimonial.quote}
            </p>
            <div className="flex items-center">
              {firstTestimonial.authorAvatarUrl && (
                <Image
                  src={firstTestimonial.authorAvatarUrl}
                  alt={firstTestimonial.authorName}
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
              )}
              <div>
                <p className="font-semibold text-secondary">
                  {firstTestimonial.authorName}
                </p>
                <p className="text-sm text-neutral-dark">
                  {firstTestimonial.authorTitle}
                </p>
              </div>
            </div>
            <div className="mt-6 border-t border-neutral-light pt-6">
              <h4 className="font-semibold text-secondary mb-2">
                Resumen del proyecto
              </h4>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div>
                  <span className="font-medium text-neutral-dark">Sector:</span>{" "}
                  {firstTestimonial.projectSummary.sector}
                </div>
                <div>
                  <span className="font-medium text-neutral-dark">País:</span>{" "}
                  {firstTestimonial.projectSummary.country}
                </div>
                <div>
                  <span className="font-medium text-neutral-dark">Tiempo:</span>{" "}
                  {firstTestimonial.projectSummary.duration}
                </div>
              </div>
            </div>
          </CardComponent>

          <div className="bg-secondary p-6 md:p-8 rounded-xl text-white">
            <div className="relative w-full max-w-xs mx-auto lg:max-w-sm mb-6">
              <Image
                src={coosofanApp.imageUrl}
                alt={`${coosofanApp.name} app mockup`}
                width={400}
                height={800}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "contain"
                }} />
            </div>
            <span className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
              {coosofanApp.tag}
            </span>
            <h3 className="text-2xl font-bold mb-2">{coosofanApp.name}</h3>
            <p className="text-neutral-light text-sm leading-relaxed">
              {coosofanApp.description}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 opacity-70">
          {clientLogos.map((logo) => (
            <div
              key={logo.alt}
              className="relative h-8 md:h-10 w-auto max-w-[120px] md:max-w-[150px]"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                sizes="100vw"
                style={{
                  objectFit: "contain"
                }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
