"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import {
  IHomeRepository,
  HomeRepositorySymbol,
  InitialHomeData,
} from "@/features/home/domain/IHomeRepository";
import { Testimonial as TestimonialModel } from "@/features/home/domain/Testimonial";
import { container } from "@/core/infrastructure/di/inversify.config";
import { Spinner } from "@/components/ui/Spinner";

export const TestimonialsSection: React.FC = () => {
  const t = useTranslations("TestimonialsSection");
  const tMockDataTestimonials = useTranslations("MockData.testimonials");
  const tGlobal = useTranslations("Global");

  const tSectorLabel = t("sector");
  const tCountryLabel = t("country");
  const tDurationLabel = t("duration");

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

  useEffect(() => {
    if (testimonials.length <= 1) return;
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(intervalId);
  }, [testimonials.length]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  if (isLoading) {
    return (
      <section id="testimonials" className="pd-section bg-white px-responsive pt-10">
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

  // Forzar mostrar solo el rol (antes de la coma), p. ej. "Fundador" en vez de "Fundador, ProWallet"
  const authorTitleFull = tMockDataTestimonials(
    `${currentTestimonial.testimonialDataKey}.authorTitle` as any,
  ) as string;
  const authorTitleOnly = (authorTitleFull || "").split(",")[0]?.trim();

  const titleParts = {
    prefix: t("testimonialsTitle.prefix"),
    highlight: t("testimonialsTitle.highlight"),
    suffix: t("testimonialsTitle.suffix"),
  };

  const titleDisplay =
    titleParts.prefix && titleParts.highlight && titleParts.suffix ? (
      <>
        {titleParts.prefix}
        <span className="text-[#12B759]">{titleParts.highlight}</span>
        {titleParts.suffix}
      </>
    ) : (
      t("title")
    );

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  return (
    <section
      id="testimonials"
      className="pd-section bg-white px-responsive overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <h2 className="text-4xl md:text-6xl font-bold text-[#002140] text-center mb-16 md:mb-20 leading-tight">
          {titleDisplay}
        </h2>

        <div className="mb-12 flex justify-center w-full">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentIndex}
              custom={1}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6 max-w-4xl mx-auto relative">
                <span
                  aria-hidden="true"
                  className="absolute top-4 text-7xl md:text-8xl text-neutral-light opacity-50 font-serif select-none pointer-events-none"
                >
                  “
                </span>
                <div className="text-center">
                  <p className="text-[#002140] text-lg md:text-xl italic leading-relaxed py-2 px-6 md:px-16">
                    {tMockDataTestimonials(
                      `${currentTestimonial.testimonialDataKey}.quote` as any,
                    )}
                  </p>
                  <div className="flex flex-col justify-center h-full items-center">
                    <div className="flex items-center mb-6 mt-auto">
                      {currentTestimonial.authorAvatarUrl && (
                        <div className="relative mr-4">
                          {/* Círculo blanco detrás del avatar */}
                          <div
                            aria-hidden="true"
                            className="absolute rounded-full shadow-lg"
                          />
                          <Image
                            src={currentTestimonial.authorAvatarUrl}
                            alt={currentTestimonial.authorName}
                            width={80}
                            height={80}
                            className="relative rounded-full border-2 border-primary/20"
                          />
                        </div>
                      )}
                    </div>
                    <div>
                      <p className="font-bold text-[#002140] text-base md:text-lg leading-snug">
                        {currentTestimonial.authorName}
                      </p>
                      <p className="text-sm md:text-base text-[#002140]/90">
                        {authorTitleOnly}
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
            </motion.div>
          </AnimatePresence>
        </div>

        {testimonials.length > 1 && (
          <div className="flex justify-center items-center space-x-4 mb-16">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={currentIndex === index}
                className={`w-6 h-6 rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#12B759] focus-visible:ring-offset-2 ${currentIndex === index ? "bg-[#12B759]" : "bg-[#E7F0EF] hover:bg-[#dbe7e5]"}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
