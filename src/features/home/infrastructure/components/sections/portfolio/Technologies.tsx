import Image from "next/image";

const technologiesFlagByName: Record<string, string> = {
  Flutter: "/assets/images/flutter_logo.png",
  Firebase: "/assets/images/firebase_logo.png",
  Figma: "/assets/images/figma_logo.png",
  Python: "/assets/images/python_logo.png",
  GitHub: "/assets/images/github_logo.png",
};

export const Technologies = (props: { technologies: string[] }) => {
  return (
    <section className="mt-16 md:mt-24 flex flex-col items-center text-center">
      <h3 className="text-2xl md:text-3xl font-bold">
        Se utilizaron las <span className="text-green-600">tecnologías</span>
      </h3>
      <div className="mt-6 flex flex-wrap gap-12">
        {props.technologies.map((tech) => {
          const logo = technologiesFlagByName[tech];
          return (
            <span key={tech} className="inline-flex items-centerpx-4 py-2">
              {logo ? (
                <Image
                  src={logo}
                  alt={`Logo de ${tech}`}
                  loading="lazy"
                  width={100}
                  height={10}
                />
              ) : (
                tech
              )}
            </span>
          );
        })}
      </div>
    </section>
  );
};
