"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  IconQuote,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IHomeRepository,
  HomeRepositorySymbol,
  InitialHomeData,
} from "@/features/home/domain/IHomeRepository";
import { Testimonial as TestimonialModel } from "@/features/home/domain/Testimonial";
import { container } from "@/core/infrastructure/di/inversify.config";
import { Spinner } from "@/components/ui/Spinner";

const clientLogosData = [
  {
    src: "/assets/images/client_logo_easydrop.svg",
    altKey: "EasyDropLogo",
  },
  {
    src: "/assets/images/client_logo_omarsa.svg",
    altKey: "OmarsaLogo",
  },
  {
    src: "/assets/images/client_logo_coosofan.svg",
    altKey: "CoosofanLogo",
  },
  {
    src: "/assets/images/client_logo_homs.svg",
    altKey: "HomsRentalsLogo",
  },
  {
    src: "/assets/images/client_logo_avesa.svg",
    altKey: "AvesaLogo",
  },
];

export const TestimonialsSection: React.FC = () => {
  const t = useTranslations("TestimonialsSection");
  const tMockDataTestimonials = useTranslations("MockData.testimonials");
  const tClientLogos = useTranslations("ClientLogosSection");
  const tGlobal = useTranslations("Global");

  const [testimonials, setTestimonials] = useState<TestimonialModel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const homeRepository =
          container.get<IHomeRepository>(HomeRepositorySymbol);
        const initialData: InitialHomeData =
          await homeRepository.getInitialHomeData();
        setTestimonials(initialData.testimonials);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  if (isLoading) {
    return (
      <section id="testimonials" className="py-16 md:py-24 bg-neutral-lightest">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Spinner size="lg" />
          <p className="mt-4 text-neutral-darker">{tGlobal("loading")}</p>
        </div>
      </section>
    );
  }

  if (!testimonials.length) {
    return null;
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-neutral-lightest">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12 md:mb-16">
          {t("title")}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch mb-12">
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-xl relative flex flex-col">
            <IconQuote
              size={60}
              className="text-neutral-light absolute top-6 left-6 opacity-50"
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col flex-grow"
              >
                <p className="text-neutral-darker text-md md:text-lg italic leading-relaxed mt-12 mb-6 flex-grow">
                  {tMockDataTestimonials(
                    `${currentTestimonial.testimonialDataKey}.quote` as any,
                  )}
                </p>
                <div className="flex items-center mb-6">
                  {currentTestimonial.authorAvatarUrl && (
                    <Image
                      src={currentTestimonial.authorAvatarUrl}
                      alt={currentTestimonial.authorName}
                      width={50}
                      height={50}
                      className="rounded-full mr-4 border-2 border-primary/20"
                    />
                  )}
                  <div>
                    <p className="font-semibold text-secondary text-md">
                      {currentTestimonial.authorName}
                    </p>
                    <p className="text-sm text-neutral-dark">
                      {tMockDataTestimonials(
                        `${currentTestimonial.testimonialDataKey}.authorTitle` as any,
                      )}
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-secondary mb-3 text-md">
                    {t("projectSummaryTitle")}
                  </h4>
                  <div className="grid grid-cols-3 gap-x-2 gap-y-1 text-sm text-neutral-darker">
                    <div>
                      <span className="font-medium text-neutral-dark">
                        {t("sector")}:
                      </span>{" "}
                      {tMockDataTestimonials(
                        `${currentTestimonial.testimonialDataKey}.projectSector` as any,
                      )}
                    </div>
                    <div>
                      <span className="font-medium text-neutral-dark">
                        {t("country")}:
                      </span>{" "}
                      {tMockDataTestimonials(
                        `${currentTestimonial.testimonialDataKey}.projectCountry` as any,
                      )}
                    </div>
                    <div>
                      <span className="font-medium text-neutral-dark">
                        {t("duration")}:
                      </span>{" "}
                      {tMockDataTestimonials(
                        `${currentTestimonial.testimonialDataKey}.projectDuration` as any,
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="bg-secondary p-6 md:p-8 rounded-xl text-white shadow-xl flex flex-col justify-center items-center lg:items-start text-center lg:text-left overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full flex flex-col items-center justify-center"
              >
                <div className="relative w-full max-w-[220px] sm:max-w-[240px] mx-auto lg:mx-0 mb-6 transform transition-transform duration-500 hover:scale-105">
                  <Image
                    src={currentTestimonial.appShowcase.appMockupImageUrl}
                    alt={
                      t(currentTestimonial.appShowcase.appNameKey as any) +
                      " app mockup"
                    }
                    width={400}
                    height={800}
                    className="max-w-full h-auto object-contain drop-shadow-2xl"
                    priority={currentIndex === 0}
                  />
                </div>
                <span className="self-start inline-block bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
                  {t(currentTestimonial.appShowcase.appTagKey as any)}
                </span>
                <h3 className="self-start text-2xl font-bold mb-2 text-white">
                  {t(currentTestimonial.appShowcase.appNameKey as any)}
                </h3>
                <p className="self-start text-neutral-light text-sm leading-relaxed max-w-sm">
                  {t(currentTestimonial.appShowcase.appDescriptionKey as any)}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {testimonials.length > 1 && (
          <div className="flex justify-center items-center space-x-2 mb-16">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`w-3 h-3 rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${currentIndex === index ? "bg-primary" : "bg-neutral-default hover:bg-neutral-dark"}`}
              />
            ))}
          </div>
        )}

        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-8 md:gap-x-16 lg:gap-x-20 opacity-80">
          {clientLogosData.map((logo) => (
            <div
              key={logo.altKey}
              className="relative h-8 md:h-10 w-[120px] sm:w-[140px] md:w-[160px] hover:opacity-100 transition-opacity"
            >
              <Image
                src={logo.src}
                alt={tClientLogos(logo.altKey as any) || logo.altKey}
                fill
                sizes="(max-width: 640px) 120px, (max-width: 768px) 140px, 160px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
