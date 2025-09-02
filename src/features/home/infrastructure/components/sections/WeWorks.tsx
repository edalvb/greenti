"use client";

import {
  VerticalTimeline,
  VerticalTimelineItem,
} from "@/components/ui/VerticalTimeline";
import { IconCalendar, IconCrown, IconTrophy } from "@tabler/icons-react";
import { MailIcon } from "lucide-react";
import Image from "next/image";

export const WeWorksSection = () => {
  return (
    <section id="we-works" className="pd-section">
      <div className="grid grid-cols-12 container mx-auto gap-20">
        <div className="col-span-6">
          <SideRight />
        </div>

        <div className="col-span-6">
          <SideLeft />
        </div>
      </div>
    </section>
  );
};

const SideRight = () => (
  <div className="col-span-6">
    <h2 className="text-5xl font-bold block">
      <span className="text-secondary">Así es como </span>
      <span className="text-primary block">trabajamos</span>
    </h2>

    <Image
      src="/assets/images/we_works.png"
      alt="Working Process"
      width={500}
      height={500}
      className="mt-8 w-full h-auto"
    />
  </div>
);

const SideLeft = () => {
  const step1: VerticalTimelineItem = {
    icon: <IconCrown size={24} color="#ffffff" stroke={2} />,
    labelStep: "PASO 1",
    title: "Resumen del proyecto",
    concept:
      "Nuestras tarifas por proyecto varían según los requisitos específicos de cada proyecto, así como de factores como la antigüedad del equipo, el tamaño del equipo y la duración del proyecto. Para obtener un presupuesto detallado y personalizado, solicite.",
  };

  const step2: VerticalTimelineItem = {
    icon: <IconCalendar size={24} color="#ffffff" stroke={2} />,
    labelStep: "PASO 2",
    title: "Definición de objetivos",
    concept:
      "En esta etapa, trabajamos contigo para definir los objetivos y metas del proyecto. Esto incluye identificar los resultados deseados, los plazos y los recursos necesarios para llevar a cabo el proyecto de manera efectiva.",
  };

  const step3: VerticalTimelineItem = {
    icon: <IconTrophy size={24} color="#ffffff" stroke={2} />,
    labelStep: "PASO 3",
    title: "Propuesta de solución",
    concept:
      "Una vez que se han definido los objetivos, nuestro equipo elabora una propuesta de solución que incluye un enfoque detallado, un cronograma y un presupuesto estimado. Esta propuesta se presenta al cliente para su revisión y aprobación.",
  };

  return (
    <VerticalTimeline
      step1={step1}
      step2={step2}
      step3={step3}
      labelIWantAdvice="Quiero una asesoría"
      onIWantAdvice={() => console.log("Solicitar asesoría")}
    />
  );
};
