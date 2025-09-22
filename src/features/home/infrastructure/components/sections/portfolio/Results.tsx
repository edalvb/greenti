import Image from "next/image";

interface ResultsProps {
  description: string;
  images: string[];
  images_secondary: string[];
}

export const Results = ({
  description,
  images,
  images_secondary,
}: ResultsProps) => (
  <section id="results" className="relative z-[1] mt-16 md:mt-24">
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="text-secondary">El </span>
          <span className="text-primary">resultado</span>
        </h3>
        <p className="text-secondary leading-relaxed whitespace-pre-line">
          {description}
        </p>
      </div>

      {/* Contenedor de imágenes principales, ocupan todo el ancho disponible de la segunda columna */}
      <div className="mt-6 md:mt-0 gap-6">
        {images.map((src, idx) => (
          <div key={idx} className="w-full lg:aspect-[5/3]">
            <Image
              src={src}
              alt={`Resultado ${idx + 1}`}
              fill
              priority={idx === 0}
              sizes="(min-width:1280px) 40vw, (min-width:768px) 50vw, 100vw"
              className="object-contain object-right"
            />
          </div>
        ))}
      </div>
    </div>

    {images_secondary.length > 0 && (
      <div className="mt-12 grid grid-cols-3 md:grid-cols-6 gap-1">
        {images_secondary.map((src, idx) => (
          <div
            key={idx}
            className="relative w-full overflow-hidden rounded-xl aspect-[2/5] md:aspect-[1/2]"
          >
            <Image
              src={src}
              alt={`Resultado secundario ${idx + 1}`}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    )}
  </section>
);
