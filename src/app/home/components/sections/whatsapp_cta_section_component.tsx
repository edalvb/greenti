import React from 'react';
import Image from "next/image";
import { CONTACT_INFO } from '@/core/utils/constants';

export const WhatsAppCtaSectionComponent: React.FC = () => {
  const whatsappLink = `https://wa.me/${CONTACT_INFO.phone.replace(/[^0-9]/g, '')}?text=Hola%20GreenTI,%20estoy%20interesado%20en%20sus%20servicios.`;

  return (
    <section id="whatsapp-cta" className="py-12 md:py-16 bg-neutral-lightest">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-2">
              Habilitamos nuestro canal de whatsapp
            </h2>
            <p className="text-neutral-darker max-w-xl">
              Estamos aquí para atenderte y asegurarnos de que cada interacción sea tan fácil y personalizada como lo necesitas. 😉 ¡Estamos listos para ayudarte cuando tú lo estés!
            </p>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center space-x-2 shadow-md"
          >
            <Image
              src="/assets/icons/whatsapp.svg"
              alt="WhatsApp Icon"
              width={24}
              height={24}
              className="filter brightness-0 invert"
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
            <span>Chatea con nosotros</span>
          </a>
        </div>
      </div>
    </section>
  );
};
