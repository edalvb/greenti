"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { Input } from "@/components/ui/Input";
import { Select, SelectOption } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import {
  ContactFormDto,
  ContactFormSchema,
  ContactFormResponseDto,
} from "@/features/home/application/dto/ContactFormDto";
import { SubmitContactFormUseCase } from "@/features/home/application/SubmitContactFormUseCase";
import { container } from "@/core/infrastructure/di/inversify.config";
import { CONTACT_INFO } from "@/core/utils/constants";
import { IconBrandWhatsapp, IconHandClick } from "@tabler/icons-react";
import { WhatsAppCtaSection } from "./WhatsAppCtaSection";

class SelectOptionCountries implements SelectOption {
  value: string;
  label: string;
  urlImage: string;

  constructor(value: string, label: string, urlImage: string) {
    this.value = value;
    this.label = label;
    this.urlImage = urlImage;
  }
}

export const ContactSection: React.FC = () => {
  const t = useTranslations("ContactSection");
  const tValidation = useTranslations("ValidationErrors");
  const tGlobal = useTranslations("Global");

  const [submitContactFormUseCase] = useState(() =>
    container.get(SubmitContactFormUseCase),
  );
  const [formStatus, setFormStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [formError, setFormError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<
    Partial<Record<keyof ContactFormDto, string>>
  >({});

  const countryOptions: SelectOptionCountries[] = [
    {
      value: "PE",
      label: t("countryOptions.PE"),
      urlImage: "/assets/icons/peru.svg",
    },
    {
      value: "US",
      label: t("countryOptions.US"),
      urlImage: "/assets/icons/usa.svg",
    },
    {
      value: "MX",
      label: t("countryOptions.MX"),
      urlImage: "/assets/icons/mexico.svg",
    },
    {
      value: "EC",
      label: t("countryOptions.EC"),
      urlImage: "/assets/icons/ecuador.svg",
    },
    {
      value: "PY",
      label: t("countryOptions.PY"),
      urlImage: "/assets/icons/paraguay.svg",
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<ContactFormDto>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      countryCode: "PE",
      acceptTerms: false,
    },
  });

  const selectedCountryCode = watch("countryCode");

  useEffect(() => {
    const clientSideErrors: Partial<Record<keyof ContactFormDto, string>> = {};
    for (const key in errors) {
      const errorKey = errors[key as keyof ContactFormDto]?.message;
      if (errorKey) {
        clientSideErrors[key as keyof ContactFormDto] = tValidation(
          errorKey as any,
        );
      }
    }
    setFieldErrors(clientSideErrors);
  }, [errors, tValidation]);

  const onSubmit: SubmitHandler<ContactFormDto> = async (data) => {
    setFormStatus("loading");
    setFormError(null);
    setFieldErrors({});

    const response: ContactFormResponseDto =
      await submitContactFormUseCase.execute(data);

    if (response.success) {
      setFormStatus("success");
      reset();
      setTimeout(() => setFormStatus("idle"), 5000);
    } else {
      setFormStatus("error");
      const serverErrors: Partial<Record<keyof ContactFormDto, string>> = {};
      let generalError =
        t(response.messageKey as any) || t("errorMessagePrefix");

      if (response.errors) {
        const errorsObj = response.errors as any;
        for (const key in errorsObj) {
          const errorKey = errorsObj[key];
          if (errorKey) {
            if (key === "form") {
              generalError += t(errorKey as any) || errorKey;
            } else {
              serverErrors[key as keyof ContactFormDto] =
                tValidation(errorKey as any) || t(errorKey as any) || errorKey;
            }
          }
        }
      }
      setFormError(
        generalError === t(response.messageKey as any) ||
          generalError === t("errorMessagePrefix")
          ? tValidation("formInvalid")
          : generalError,
      );
      setFieldErrors(serverErrors);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-neutral-lightest px-responsive">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 space-y-8">
            <div className="relative">
              <div
                className="absolute bg-white p-3 md:p-4 rounded-3xl shadow-md left-7 top-7"
                style={{ zIndex: 1 }}
              >
                <div className="flex items-center mb-2">
                  <div className="w-2.5 h-2.5 bg-primary rounded-full mr-2"></div>
                  <p className="text-lg font-bold text-secondary">
                    {t("avatarSubtitle").split(" - ")[0]}
                  </p>
                </div>
                <p className="text-sm text-neutral-darker">
                  {t("avatarSubtitle").split(" - ")[1]}
                </p>
              </div>
              <div className="absolute -top-8 -left-4 w-24 h-24 md:w-28 md:h-28 bg-transparent">
                <Image
                  src="/assets/images/contact_avatar_maria.png"
                  alt={t("avatarSubtitle")}
                  className="rounded-3xl object-cover shadow-lg"
                  fill
                  sizes="(max-width: 768px) 96px, 112px"
                />
              </div>
            </div>

            <div className="mt-40">
              <p className="text-secondary mt-4 mb-3 text-sm">{t("intro")}</p>
              <p className="text-secondary mb-1 text-sm">
                {t("instruction")}{" "}
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="font-bold text-secondary hover:underline text-sm inline-flex items-center"
                >
                  {CONTACT_INFO.email}
                </a>
              </p>

              <p className="text-sm text-secondary mt-6">
                <span className="font-bold">{t("availability.prefix")}</span>
                {t("availability.sufix")}
              </p>
            </div>

            <WhatsAppCtaSection />
          </div>

          <div className="lg:col-span-7 bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-2">
              {t("formTitle")}
            </h2>
            <p className="text-neutral-darker mb-8 text-sm">
              {t("formSubtitle")}
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <Input
                placeholder={t("placeholders.fullName")}
                {...register("fullName")}
                error={fieldErrors.fullName}
                inputClassName="bg-neutral-lightest/50 border-neutral-default placeholder-neutral-dark"
                required
              />
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6">
                <div className="sm:col-span-5 relative flex items-center">
                  <Image
                    src={
                      countryOptions.find(
                        (option) => option.value === selectedCountryCode,
                      )?.urlImage || ""
                    }
                    alt={
                      countryOptions.find(
                        (option) => option.value === selectedCountryCode,
                      )?.label || ""
                    }
                    width={20}
                    height={14}
                    className="absolute left-3 pointer-events-none z-10"
                  />

                  <Select
                    options={countryOptions}
                    {...register("countryCode")}
                    error={fieldErrors.countryCode}
                    selectClassName="bg-neutral-lightest/50 border-neutral-default placeholder-neutral-dark w-full pl-10"
                    required
                  />
                </div>
                <Input
                  type="tel"
                  placeholder={t("placeholders.phoneNumber")}
                  {...register("phoneNumber")}
                  containerClassName="sm:col-span-7"
                  inputClassName="bg-neutral-lightest/50 border-neutral-default placeholder-neutral-dark"
                  error={fieldErrors.phoneNumber}
                  required
                />
              </div>
              <Input
                type="email"
                placeholder={t("placeholders.email")}
                {...register("email")}
                inputClassName="bg-neutral-lightest/50 border-neutral-default placeholder-neutral-dark"
                error={fieldErrors.email}
                required
              />
              <Textarea
                rows={4}
                placeholder={t("placeholders.message")}
                {...register("message")}
                textareaClassName="bg-neutral-lightest/50 border-neutral-default placeholder-neutral-dark"
                error={fieldErrors.message}
                required
              />
              <div className="flex items-start">
                <input
                  id="acceptTerms"
                  type="checkbox"
                  {...register("acceptTerms")}
                  className="h-4 w-4 text-primary border-neutral-default rounded focus:ring-primary mt-0.5 cursor-pointer flex-shrink-0"
                />
                <label
                  htmlFor="acceptTerms"
                  className="ml-2 block text-xs text-neutral-darker cursor-pointer"
                >
                  {t.rich("labels.acceptTerms", {
                    link: (chunks) => (
                      <a
                        href="#politicas"
                        className="font-medium text-primary hover:underline"
                      >
                        {chunks}
                      </a>
                    ),
                  })}
                </label>
              </div>
              {fieldErrors.acceptTerms && (
                <p className="text-xs text-red-600 -mt-4 ml-6">
                  {fieldErrors.acceptTerms}
                </p>
              )}

              {formStatus === "error" && formError && (
                <p className="text-sm text-red-600 bg-red-100 p-3 rounded-md">
                  {formError}
                </p>
              )}
              {formStatus === "success" && (
                <p className="text-sm text-green-700 bg-green-100 p-3 rounded-md">
                  {t("successMessage")}
                </p>
              )}

              <Button
                type="submit"
                size="lg"
                className="w-full !rounded-full shadow-md hover:shadow-lg transition-shadow font-semibold"
                isLoading={formStatus === "loading"}
                disabled={formStatus === "loading" || formStatus === "success"}
              >
                {formStatus === "loading"
                  ? tGlobal("sendingMessage")
                  : tGlobal("sendMessage")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ProfileProps {
  name: string;
  role: string;
  imageUrl: string;
  online?: boolean;
}

export const ProfileCard: React.FC<ProfileProps> = ({
  name,
  role,
  imageUrl,
  online = true,
}) => {
  return (
    <div className="profile-card">
      <div className="profile-avatar">
        <img src={imageUrl} alt={name} />
        {online && <span className="status-dot" />}
      </div>
      <div className="profile-info">
        <h3 className="profile-name">{name}</h3>
        <p className="profile-role">{role}</p>
      </div>
    </div>
  );
};
