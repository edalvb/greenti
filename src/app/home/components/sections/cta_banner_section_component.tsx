import React from 'react';
import Image from "next/image";
import { ButtonComponent } from '@/core/components/ui/button_component';

export const CtaBannerSectionComponent: React.FC = () => {
  return (
    <section id="cta-banner" className="relative py-20 md:py-32 text-white bg-secondary">
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="/assets/images/faq_background.png"
          alt="Oficina moderna"
          quality={80}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover"
          }} />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
          ¿Estás listo para llevar tu negocio al
          <span className="block text-primary">siguiente nivel?</span>
        </h2>
        <p className="text-lg md:text-xl text-neutral-lightest max-w-2xl mx-auto mb-10">
          Contáctanos hoy mismo y descubre cómo nuestras soluciones de software personalizadas pueden transformar tu empresa.
        </p>
        <ButtonComponent size="lg" variant="primary" className="px-10 py-3 text-lg">
          Hablemos de tu proyecto
        </ButtonComponent>
      </div>
    </section>
  );
};
