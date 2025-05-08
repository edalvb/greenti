import React from 'react';
import Image from "next/image";

interface StatItemProps {
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label }) => (
  <div className="text-center">
    <p className="text-4xl font-bold text-primary">{value}</p>
    <p className="text-sm text-neutral-light">{label}</p>
    <div className="w-1/2 h-0.5 bg-primary mx-auto mt-1"></div>
  </div>
);

export const PresenceSectionComponent: React.FC = () => {
  const countries = ['México', 'Ecuador', 'Perú', 'Paraguay', 'USA'];
  const stats = [
    { value: '15+', label: 'Clientes' },
    { value: '15+', label: 'Proyectos' },
    { value: '15+', label: 'Clientes' }, 
  ];

  return (
    <section id="presence" className="py-16 md:py-24 bg-secondary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-secondary rounded-xl p-8 md:p-12 lg:p-16 shadow-xl flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="lg:w-1/2 w-full relative h-64 md:h-96 lg:h-auto lg:min-h-[400px]">
            <Image
              src="/assets/images/world_map.svg"
              alt="Mapa del mundo con presencia de Greenti"
              fill
              sizes="100vw"
              style={{
                objectFit: "contain"
              }} />
          </div>
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nuestra presencia
            </h2>
            <p className="text-neutral-light mb-6">
              Lorem ipsum amet, consectetur adipiscing elit. Suspendis varius enim eros elementum tristique. Duis cursus.
            </p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-10 text-neutral-lightest">
              {countries.map((country) => (
                <li key={country} className="py-1">{country}</li>
              ))}
            </ul>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <StatItem key={index} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
