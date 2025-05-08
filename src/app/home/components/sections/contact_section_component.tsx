"use client";

import React from "react";
import Image from "next/image";
import { useHomeContext } from "@/app/home/presentation/home_context";
import { HomeController } from "@/app/home/presentation/home_controller";
import { InputComponent } from "@/core/components/ui/input_component";
import {
  SelectComponent,
  SelectOption,
} from "@/core/components/ui/select_component";
import { TextareaComponent } from "@/core/components/ui/textarea_component";
import { ButtonComponent } from "@/core/components/ui/button_component";
import { CONTACT_INFO } from "@/core/utils/constants";

const countryOptions: SelectOption[] = [
  { value: "PE", label: "Perú (PE)" },
  { value: "US", label: "United States (US)" },
  { value: "MX", label: "México (MX)" },
  { value: "EC", label: "Ecuador (EC)" },
  { value: "PY", label: "Paraguay (PY)" },
];

export const ContactSectionComponent: React.FC = () => {
  const { state, dispatch } = useHomeContext();
  const controller = React.useMemo(
    () => new HomeController(dispatch),
    [dispatch],
  );

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;
    const fieldValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    controller.updateContactFormField(
      name as keyof typeof state.contactForm,
      fieldValue,
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    controller.submitContactForm(state.contactForm);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
          <div className="bg-neutral-lightest p-8 md:p-10 rounded-lg text-center lg:text-left">
            <div className="relative mx-auto lg:mx-0 w-24 h-24 md:w-32 md:h-32 mb-6">
              <Image
                src="/assets/images/contact_avatar_maria.png"
                alt="Maria, Responsable de soluciones tecnológicas"
                className="rounded-full object-cover"
                fill
                sizes="100vw" />
              <div className="absolute bottom-0 right-0 bg-primary p-2 rounded-full border-2 border-white">
                <Image
                  src="/assets/icons/whatsapp.svg"
                  alt="WhatsApp Icon"
                  width={20}
                  height={20}
                  className="filter brightness-0 invert"
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
              </div>
            </div>
            <p className="text-sm bg-primary/10 text-primary font-semibold inline-block px-3 py-1 rounded-full mb-2">
              Maria - Responsable de soluciones tecnológicas
            </p>
            <p className="text-neutral-darker mb-4 text-lg">
              Me encantaría hablar contigo sobre tu proyecto o necesidades.
            </p>
            <p className="text-neutral-darker mb-1">
              Completa el formulario o envíanos un email a
            </p>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="font-semibold text-primary hover:underline mb-6 block"
            >
              {CONTACT_INFO.email}
            </a>
            <p className="text-sm text-neutral-dark">
              <strong>Hablamos en menos de 24hs</strong>, o te hacemos un
              descuento del 30% en tu próximo proyecto
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-2">
              ¿Tienes una idea? Nosotros tenemos las habilidades.
            </h2>
            <p className="text-neutral-darker mb-8">
              Rellena nuestro formulario de contacto y nos pondremos en contacto
              ¡contigo!
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <InputComponent
                label="Nombre completo"
                name="fullName"
                value={state.contactForm.fullName}
                onChange={handleInputChange}
                placeholder="Ej: Juan Pérez"
                required
              />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <SelectComponent
                  label="País"
                  name="countryCode"
                  options={countryOptions}
                  value={state.contactForm.countryCode}
                  onChange={handleInputChange}
                  containerClassName="sm:col-span-1"
                  required
                />
                <InputComponent
                  label="Número de teléfono"
                  name="phoneNumber"
                  type="tel"
                  value={state.contactForm.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="Ej: 987654321"
                  containerClassName="sm:col-span-2"
                  required
                />
              </div>
              <InputComponent
                label="Correo electrónico"
                name="email"
                type="email"
                value={state.contactForm.email}
                onChange={handleInputChange}
                placeholder="tu@correo.com"
                required
              />
              <TextareaComponent
                label="Cuéntanos sobre tu proyecto"
                name="message"
                value={state.contactForm.message}
                onChange={handleInputChange}
                rows={4}
                placeholder="Describe brevemente tu idea o necesidad..."
                required
              />
              <div className="flex items-start">
                <input
                  id="acceptTerms"
                  name="acceptTerms"
                  type="checkbox"
                  checked={state.contactForm.acceptTerms}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-primary border-neutral-light rounded focus:ring-primary mt-1"
                  required
                />
                <label
                  htmlFor="acceptTerms"
                  className="ml-2 block text-sm text-neutral-darker"
                >
                  Confirmo que he leído y acepto las{" "}
                  <a
                    href="#politicas"
                    className="font-medium text-primary hover:underline"
                  >
                    políticas de protección de datos personales
                  </a>
                  .
                </label>
              </div>
              {state.contactFormStatus === "error" &&
                state.contactFormError && (
                  <p className="text-sm text-red-600">
                    {state.contactFormError}
                  </p>
                )}
              {state.contactFormStatus === "success" && (
                <p className="text-sm text-green-600">
                  ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo
                  pronto.
                </p>
              )}
              <ButtonComponent
                type="submit"
                size="lg"
                className="w-full"
                disabled={state.contactFormStatus === "loading"}
              >
                {state.contactFormStatus === "loading"
                  ? "Enviando..."
                  : "Enviar mensaje"}
              </ButtonComponent>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
