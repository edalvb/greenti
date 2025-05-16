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

const STATIC_BACKGROUND_PHONE_MOCKUP_URL =
  "/assets/images/phone_mockup_credito_static.png";

export const TestimonialsSection: React.FC = () => {
  const t = useTranslations("TestimonialsSection");
  const tTitlePrefix = t("testimonialsTitle.prefix");
  const tTitleHighlight = t("testimonialsTitle.highlight");
  const tTitleSuffix = t("testimonialsTitle.suffix");

  const tMockDataTestimonials = useTranslations("MockData.testimonials");
  const tClientLogos = useTranslations("ClientLogosSection");
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

  let titleDisplay: React.ReactNode;
  const fullTitleFromT = t("title");
  if (tTitlePrefix && tTitleHighlight && tTitleSuffix) {
    titleDisplay = (
      <>
        {tTitlePrefix}
        <span className="text-primary">{tTitleHighlight}</span>
        {tTitleSuffix}
      </>
    );
  } else if (fullTitleFromT.toLowerCase().includes("clientes")) {
    const parts = fullTitleFromT.split(/(clientes)/i);
    titleDisplay = (
      <>
        {parts[0]}
        <span className="text-primary">{parts[1]}</span>
        {parts[2]}
      </>
    );
  } else {
    titleDisplay = fullTitleFromT;
  }

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-neutral-lightest">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-20 md:mb-24">
          {titleDisplay}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-stretch mb-12">
          {/* Testimonial Content Card (Left - 2/3 width on large screens) */}
          <div className="p-6 md:p-8 relative flex flex-col lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col"
              >
                {/* Quote text with large styled quote marks */}
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
                                                                                                                                                          
                                                                                                                                                                                {/* Author Info */}
                      <div className="flex items-center mb-6 mt-auto">
                        {" "}
                        {/* mt-auto pushes this section down if quote text is short */}
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

                      {/* Project Summary */}
                      <div>
                        <h4 className="font-semibold text-secondary mb-3 text-md">
                          {t("projectSummaryTitle")}
                        </h4>
                        <div className="grid grid-cols-[max-content_1fr] gap-x-3 gap-y-1 text-sm">
                          <span className="font-mmedium text-secondary">
                            {tSectorLabel}
                          </span>
                          <span className="font-bold text-secondary uppercase">
                            {tMockDataTestimonials(
                              `${currentTestimonial.testimonialDataKey}.projectSector` as any,
                            )}
                          </span>

                          <span className="font-mmedium text-secondary">
                            {tCountryLabel}
                          </span>
                          <span className="font-bold text-secondary uppercase">
                            {tMockDataTestimonials(
                              `${currentTestimonial.testimonialDataKey}.projectCountry` as any,
                            )}
                          </span>

                          <span className="font-mmedium text-secondary">
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
                </div>{" "}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* App Showcase Card (Right - 1/3 width on large screens) */}
          <div className="bg-secondary p-6 md:p-8 rounded-xl text-white shadow-xl flex flex-col justify-center lg:col-span-1 overflow-visible">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full flex flex-col items-center overflow-visible"
              >
                {/* Phone Mockups Container */}
                <div className="relative w-full max-w-[350px] sm:max-w-[380px] md:max-w-[420px] h-[250px] sm:h-[200px] md:h-[250px] lg:h-220px] xl:h-[280px] mb-4 sm:mb-6 flex items-center justify-center overflow-visible">
                  {/* Foreground Phone (Dynamic) */}
                  <div className="absolute -top-25 z-10 w-[90%] sm:w-[85%] md:w-[80%] lg:w-[380px] transform transition-transform duration-500 hover:scale-105">
                    <Image
                      src={currentTestimonial.appShowcase.appMockupImageUrl}
                      alt={
                        t(currentTestimonial.appShowcase.appNameKey as any) +
                        " app mockup"
                      }
                      width={640}
                      height={980}
                      className="object-contain drop-shadow-2xl"
                      priority={currentIndex === 0}
                    />
                  </div>
                </div>

                {/* Text Content below phones */}
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
