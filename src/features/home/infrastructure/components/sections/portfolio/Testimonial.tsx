import { ClientTestimonial } from "@/features/portfolio/domain/Project";
import Image from "next/image";

export const Testimonial = (props: { data: ClientTestimonial }) => {
  return (
    <section className="mt-20">
      <div className="mb-6 max-w-4xl mx-auto relative container p-6 sm:p-8 lg:p-10 rounded-[30px] bg-secondary">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            <span className="text-white">Nuestro </span>
            <span className="text-primary">cliente</span>
          </h3>
        </div>

        <span
          aria-hidden="true"
          className="absolute top-4 text-7xl md:text-8xl text-neutral-light opacity-50 font-serif select-none pointer-events-none"
        >
          “
        </span>
        <div className="text-center">
          <p className="text-lg md:text-xl italic leading-relaxed py-2 px-6 md:px-16 text-white">
            {props.data.quote}
          </p>
          <div className="flex flex-col justify-center h-full items-center">
            <div className="flex items-center mb-6 mt-auto">
              {props.data.avatar_url && (
                <div className="relative mr-4">
                  {/* Círculo blanco detrás del avatar */}
                  <div
                    aria-hidden="true"
                    className="absolute rounded-full shadow-lg"
                  />
                  <Image
                    src={props.data.avatar_url}
                    alt={props.data.author}
                    width={80}
                    height={80}
                    className="relative rounded-full border-2 border-primary/20"
                  />
                </div>
              )}
            </div>
            <div>
              <p className="font-bold text-white text-base md:text-lg leading-snug">
                {props.data.author}
              </p>
              <p className="text-sm md:text-base text-white">
                {props.data.position}
              </p>
            </div>
          </div>
        </div>
        <span
          aria-hidden="true"
          className="absolute right-0 top-4 text-7xl md:text-8xl text-neutral-light opacity-50 font-serif select-none pointer-events-none"
        >
          ”
        </span>
      </div>
    </section>
  );
};
