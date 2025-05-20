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
      <section
        id="testimonials"
        className="py-16 md:py-24 bg-white px-responsive"
      >
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

  const titleParts = {
    prefix: t("testimonialsTitle.prefix"),
    highlight: t("testimonialsTitle.highlight"),
    suffix: t("testimonialsTitle.suffix"),
  };

  const titleDisplay =
    titleParts.prefix && titleParts.highlight && titleParts.suffix ? (
      <>
        {titleParts.prefix}
        <span className="text-primary">{titleParts.highlight}</span>
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
      className="py-16 md:py-24 bg-white px-responsive"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-20 md:mb-24">
          {titleDisplay}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-stretch mb-12">
          <div className="p-6 md:p-8 relative flex flex-col lg:col-span-2">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={currentIndex}
                custom={1}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="flex flex-col"
              >
                <div className="relative mb-6 flex-grow">
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-4 text-8xl md:text-9xl text-neutral-light opacity-50 font-serif select-none pointer-events-none"
                  >
                    “
                  </span>
                  <div className="">
                    <p className="text-secondary text-md md:text-lg italic leading-relaxed py-2 px-16">
                      {tMockDataTestimonials(
                        `${currentTestimonial.testimonialDataKey}.quote` as any,
                      )}
                    </p>
                    <div className="flex flex-col justify-between h-full ml-6 sm:ml-8 md:ml-20 lg:ml-16">
                      <div className="flex items-center mb-6 mt-auto">
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
                          <p className="text-sm text-secondary">
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
                        <div className="grid grid-cols-[max-content_1fr] gap-x-3 gap-y-1 text-sm">
                          <span className="font-medium text-secondary">
                            {tSectorLabel}
                          </span>
                          <span className="font-bold text-secondary uppercase">
                            {tMockDataTestimonials(
                              `${currentTestimonial.testimonialDataKey}.projectSector` as any,
                            )}
                          </span>
                          <span className="font-medium text-secondary">
                            {tCountryLabel}
                          </span>
                          <span className="font-bold text-secondary uppercase">
                            {tMockDataTestimonials(
                              `${currentTestimonial.testimonialDataKey}.projectCountry` as any,
                            )}
                          </span>
                          <span className="font-medium text-secondary">
                            {tDurationLabel}
                          </span>
                          <span className="font-bold text-secondary uppercase">
                            {tMockDataTestimonials(
                              `${currentTestimonial.testimonialDataKey}.projectDuration` as any,
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span
                    aria-hidden="true"
                    className="absolute right-0 top-4 text-8xl md:text-9xl text-neutral-light opacity-50 font-serif select-none pointer-events-none"
                  >
                    ”
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative bg-secondary p-6 md:p-8 rounded-btn-cta text-white shadow-xl flex flex-col justify-center lg:col-span-1 overflow-visible">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={currentIndex}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="w-full h-full flex flex-col items-center"
              >
                <div className="relative overflow-visible w-full max-w-[200px] max-h-[300] h-[230px] sm:h-[250px] md:h-[280px] lg:h-[260px] mb-4 sm:mb-6 flex items-center justify-center">
                  <div className="absolute z-10 -top-16 w-[90%] sm:w-[85%] md:w-[80%] lg:w-[320px] transform transition-transform duration-500 hover:scale-105">
                    <Image
                      src={currentTestimonial.appShowcase.appMockupImageUrl}
                      alt={
                        t(currentTestimonial.appShowcase.appNameKey as any) +
                        " app mockup"
                      }
                      width={300}
                      height={350}
                      className="object-contain drop-shadow-2xl max-h-[350px]"
                      priority={currentIndex === 0}
                    />
                  </div>
                </div>
                <div className="w-full text-center lg:text-left mt-auto pt-4">
                  <span className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
                    {t(currentTestimonial.appShowcase.appTagKey as any)}
                  </span>
                  <h3 className="text-2xl font-bold mb-2 text-primary">
                    {t(currentTestimonial.appShowcase.appNameKey as any)}
                  </h3>
                  <p className="text-neutral-light text-sm leading-relaxed max-w-sm mx-auto lg:mx-0">
                    {t(currentTestimonial.appShowcase.appDescriptionKey as any)}
                  </p>
                </div>
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
      </div>
    </section>
  );
};
