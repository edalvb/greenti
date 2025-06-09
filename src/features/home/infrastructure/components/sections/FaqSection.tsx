"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { AccordionItem } from "@/components/ui/AccordionItem";
import {
  IHomeRepository,
  HomeRepositorySymbol,
  InitialHomeData,
} from "@/features/home/domain/IHomeRepository";
import { FaqItem as FaqItemModel } from "@/features/home/domain/FaqItem";
import { container } from "@/core/infrastructure/di/inversify.config";
import { Spinner } from "@/components/ui/Spinner";

export const FaqSection: React.FC = () => {
  const t = useTranslations("FaqSection");
  const tMockDataFaq = useTranslations("MockData.faqItems");
  const tGlobal = useTranslations("Global");
  const [activeFaqItemId, setActiveFaqItemId] = useState<
    string | number | null
  >(null);
  const [faqItems, setFaqItems] = useState<FaqItemModel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchFaqItems = async () => {
      try {
        const homeRepository =
          container.get<IHomeRepository>(HomeRepositorySymbol);
        const initialData: InitialHomeData =
          await homeRepository.getInitialHomeData();
        setFaqItems(initialData.faqItems);
        if (initialData.faqItems.length > 0) {
          setActiveFaqItemId(initialData.faqItems[0].id);
        }
      } catch (error) {
        console.error("Error fetching FAQ items:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFaqItems();
  }, []);

  const toggleFaqItem = (id: string | number) => {
    setActiveFaqItemId((prevId) => (prevId === id ? null : id));
  };

  if (isLoading) {
    return (
      <section
        id="faq"
        className="pd-section bg-presence-section px-responsive"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-6xl">
          <Spinner size="lg" />
          <p className="mt-4 text-neutral-darker">{tGlobal("loading")}</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="faq"
      className="pd-section bg-presence-section px-responsive"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              {t("title")}
            </h2>
            <p className="text-neutral-darker text-lg">
              <strong>{t("subtitle.prefix")} </strong>
              <span>{t("subtitle.highlight")}</span>
            </p>
          </div>
          <div className="lg:col-span-2">
            {faqItems.length > 0 ? (
              <div>
                {faqItems.map((item) => (
                  <AccordionItem
                    key={item.id}
                    title={tMockDataFaq(`${item.questionKey}.question` as any)}
                    isOpen={activeFaqItemId === item.id}
                    onToggle={() => toggleFaqItem(item.id)}
                    className="bg-transparent"
                    titleClassName="px-6 py-5 font-semibold text-secondary hover:bg-neutral-lightest/50 text-base md:text-lg"
                    contentClassName="px-6 pb-6 text-neutral-darker text-sm md:text-base"
                    iconClassName="text-secondary"
                  >
                    {tMockDataFaq(`${item.questionKey}.answer` as any)}
                  </AccordionItem>
                ))}
              </div>
            ) : (
              <p className="text-neutral-dark">{t("noFaqsAvailable")}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
