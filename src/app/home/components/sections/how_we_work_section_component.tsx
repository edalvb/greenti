import React from 'react';

const processStepsData = [
  { title: 'Análisis' },
  { title: 'Diseño' },
  { title: 'Desarrollo' },
  { title: 'Pruebas' },
  { title: 'Despliegue' },
];

export const HowWeWorkSectionComponent: React.FC = () => {
  return (
    <section id="how-we-work" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
          Así es como trabajamos
        </h2>
        <p className="text-lg text-neutral-darker max-w-3xl mx-auto mb-10">
          Con un enfoque en la eficiencia y la calidad, aprovechamos el poder de la metodología Scrum para gestionar nuestros equipos escalables. Al seguir este marco ágil, garantizamos una colaboración fluida, adaptabilidad y entrega oportuna de desarrollos de aplicaciones excepcionales.
        </p>
        <h3 className="text-xl font-semibold text-secondary mb-12 md:mb-16">
          Nuestro proceso implica:
        </h3>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="hidden sm:block absolute top-1/2 left-0 w-full h-0.5 bg-primary/40 transform -translate-y-1/2 z-0"></div>
          <div className="relative flex flex-col sm:flex-row justify-between items-center z-10 space-y-8 sm:space-y-0">
            {processStepsData.map((step, index) => (
              <div key={index} className="flex flex-col items-center w-full sm:w-auto">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm md:text-base">{index + 1}</span>
                </div>
                <p className="mt-3 text-sm md:text-base font-medium text-secondary">{step.title}</p>
                {index < processStepsData.length -1 && <div className="sm:hidden w-0.5 h-8 bg-primary/40 mt-2"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
