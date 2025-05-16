"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Card } from "@/components/ui/Card";
import { IconQuote } from "@tabler/icons-react";
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

  const firstTestimonial = testimonials[0];
  if (!firstTestimonial) return null;

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-neutral-lightest">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12 md:mb-16">
          {t("title")}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start mb-16">
          <Card className="bg-white relative shadow-xl" padding="md">
            <IconQuote
              size={48}
              className="text-primary/20 absolute top-6 left-6"
            />
            <p className="text-neutral-darker text-lg md:text-xl italic leading-relaxed mt-16 mb-8">
              {tMockDataTestimonials(
                `${firstTestimonial.quoteKey}.quote` as any,
              )}
            </p>
            <div className="flex items-center">
              {firstTestimonial.authorAvatarUrl && (
                <Image
                  src={firstTestimonial.authorAvatarUrl}
                  alt={firstTestimonial.authorName}
                  width={60}
                  height={60}
                  className="rounded-full mr-4 border-2 border-primary/20"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              )}
              <div>
                <p className="font-semibold text-secondary text-lg">
                  {firstTestimonial.authorName}
                </p>
                <p className="text-sm text-neutral-dark">
                  {tMockDataTestimonials(
                    `${firstTestimonial.quoteKey}.authorTitle` as any,
                  )}
                </p>
              </div>
            </div>
            <div className="mt-8 border-t border-neutral-light pt-6">
              <h4 className="font-semibold text-secondary mb-3 text-md">
                {t("projectSummaryTitle")}
              </h4>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div>
                  <span className="font-medium text-neutral-dark">
                    {t("sector")}:
                  </span>{" "}
                  {tMockDataTestimonials(
                    `${firstTestimonial.quoteKey}.projectSector` as any,
                  )}
                </div>
                <div>
                  <span className="font-medium text-neutral-dark">
                    {t("country")}:
                  </span>{" "}
                  {tMockDataTestimonials(
                    `${firstTestimonial.quoteKey}.projectCountry` as any,
                  )}
                </div>
                <div>
                  <span className="font-medium text-neutral-dark">
                    {t("duration")}:
                  </span>{" "}
                  {tMockDataTestimonials(
                    `${firstTestimonial.quoteKey}.projectDuration` as any,
                  )}
                </div>
              </div>
            </div>
          </Card>

          <div className="bg-secondary p-6 md:p-8 rounded-xl text-white shadow-xl flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
            <div className="relative w-full max-w-[280px] sm:max-w-xs mx-auto lg:mx-0 mb-6 transform transition-transform duration-500 hover:scale-105">
              <Image
                src="/assets/images/app_mockup_coosofan.png"
                alt={t("coosofanAppName") + " app mockup"}
                width={400}
                height={800}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </div>
            <span className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
              {t("coosofanAppTag")}
            </span>
            <h3 className="text-2xl font-bold mb-2 text-white">
              {t("coosofanAppName")}
            </h3>
            <p className="text-neutral-light text-sm leading-relaxed">
              {t("coosofanAppDescription")}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-8 md:gap-x-16 lg:gap-x-20 opacity-80">
          {clientLogosData.map((logo) => (
            <div
              key={logo.altKey}
              className="relative h-8 md:h-10 w-auto max-w-[120px] sm:max-w-[140px] md:max-w-[160px] hover:opacity-100 transition-opacity"
            >
              <Image
                src={logo.src}
                alt={tClientLogos(logo.altKey as any) || logo.altKey}
                fill
                sizes="(max-width: 640px) 120px, (max-width: 768px) 140px, 160px"
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
