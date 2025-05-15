"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { Input } from '@/components/ui/Input';
import { Select, SelectOption } from '@/components/ui/Select';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { ContactFormDto, ContactFormSchema, ContactFormResponseDto } from '@/features/home/application/dto/ContactFormDto';
import { SubmitContactFormUseCase } from '@/features/home/application/SubmitContactFormUseCase';
import { container } from '@/core/infrastructure/di/inversify.config';
import { CONTACT_INFO } from '@/core/utils/constants';
import { IconMail, IconBrandWhatsapp } from '@tabler/icons-react';

export const ContactSection: React.FC = () => {
  const t = useTranslations('ContactSection');
  const tValidation = useTranslations('ValidationErrors');
  const tGlobal = useTranslations('Global');

  const [submitContactFormUseCase] = useState(
    () => container.get(SubmitContactFormUseCase)
  );
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formError, setFormError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof ContactFormDto, string>>>({});

  const countryOptions: SelectOption[] = [
    { value: "PE", label: t('countryOptions.PE') },
    { value: "US", label: t('countryOptions.US') },
    { value: "MX", label: t('countryOptions.MX') },
    { value: "EC", label: t('countryOptions.EC') },
    { value: "PY", label: t('countryOptions.PY') },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormDto>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      countryCode: 'PE',
      acceptTerms: false,
    },
  });

  useEffect(() => {
    const clientSideErrors: Partial<Record<keyof ContactFormDto, string>> = {};
    for (const key in errors) {
      const errorKey = errors[key as keyof ContactFormDto]?.message;
      if (errorKey) {
        clientSideErrors[key as keyof ContactFormDto] = tValidation(errorKey as any);
      }
    }
    setFieldErrors(clientSideErrors);
  }, [errors, tValidation]);

  const onSubmit: SubmitHandler<ContactFormDto> = async (data) => {
    setFormStatus('loading');
    setFormError(null);
    setFieldErrors({});

    const response: ContactFormResponseDto = await submitContactFormUseCase.execute(data);

    if (response.success) {
      setFormStatus('success');
      reset();
      setTimeout(() => setFormStatus('idle'), 5000);
    } else {
      setFormStatus('error');
      const serverErrors: Partial<Record<keyof ContactFormDto, string>> = {};
      let generalError = t(response.messageKey as any) || t('errorMessagePrefix');

      if (response.errors) {
        for (const key in response.errors) {
          const errorKey = response.errors[key as keyof ContactFormDto];
          if (errorKey) {
            if (key === 'form') {
              generalError += (t(errorKey as any) || errorKey);
            } else {
              serverErrors[key as keyof ContactFormDto] = tValidation(errorKey as any) || t(errorKey as any) || errorKey;
            }
          }
        }
      }
      setFormError(generalError === t(response.messageKey as any) || generalError === t('errorMessagePrefix') ? (tValidation('formInvalid')) : generalError);
      setFieldErrors(serverErrors);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
          <div className="bg-neutral-lightest p-8 md:p-10 rounded-lg text-center lg:text-left shadow-md">
            <div className="relative mx-auto lg:mx-0 w-28 h-28 md:w-32 md:h-32 mb-6">
              <Image
                src="/assets/images/contact_avatar_maria.png"
                alt={t('avatarSubtitle')}
                className="rounded-full object-cover border-4 border-white shadow-lg"
                fill
                sizes="(max-width: 768px) 112px, 128px"
              />
              <div className="absolute bottom-0 right-0 bg-primary p-2.5 rounded-full border-2 border-white shadow-sm">
                <IconBrandWhatsapp size={20} className="text-white" />
              </div>
            </div>
            <p className="text-xs bg-primary/10 text-primary font-semibold inline-block px-3 py-1 rounded-full mb-3">
              {t('avatarSubtitle')}
            </p>
            <p className="text-neutral-darker mb-4 text-lg leading-relaxed">
              {t('intro')}
            </p>
            <p className="text-neutral-darker mb-1">
              {t('instruction')}
            </p>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="font-semibold text-primary hover:underline mb-6 block text-lg"
            >
              <IconMail size={18} className="inline mr-1.5 align-text-bottom"/>
              {CONTACT_INFO.email}
            </a>
            <p className="text-sm text-neutral-dark italic">
              {t('availability')}
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-2">
              {t('formTitle')}
            </h2>
            <p className="text-neutral-darker mb-8">
              {t('formSubtitle')}
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <Input
                label={t('labels.fullName')}
                {...register('fullName')}
                placeholder={t('placeholders.fullName')}
                error={fieldErrors.fullName}
                required
              />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <Select
                  label={t('labels.country')}
                  {...register('countryCode')}
                  options={countryOptions}
                  containerClassName="sm:col-span-1"
                  error={fieldErrors.countryCode}
                  required
                />
                <Input
                  label={t('labels.phoneNumber')}
                  type="tel"
                  {...register('phoneNumber')}
                  placeholder={t('placeholders.phoneNumber')}
                  containerClassName="sm:col-span-2"
                  error={fieldErrors.phoneNumber}
                  required
                />
              </div>
              <Input
                label={t('labels.email')}
                type="email"
                {...register('email')}
                placeholder={t('placeholders.email')}
                error={fieldErrors.email}
                required
              />
              <Textarea
                label={t('labels.message')}
                {...register('message')}
                rows={4}
                placeholder={t('placeholders.message')}
                error={fieldErrors.message}
                required
              />
              <div className="flex items-start">
                <input
                  id="acceptTerms"
                  type="checkbox"
                  {...register('acceptTerms')}
                  className="h-4 w-4 text-primary border-neutral-default rounded focus:ring-primary mt-1 cursor-pointer"
                />
                <label
                  htmlFor="acceptTerms"
                  className="ml-2 block text-sm text-neutral-darker cursor-pointer"
                >
                  {t.rich('labels.acceptTerms', { 
                    link: (chunks) => <a href="#politicas" className="font-medium text-primary hover:underline">{t('termsLinkText')}</a>
                   })}
                </label>
              </div>
               {fieldErrors.acceptTerms && <p className="text-xs text-red-600 -mt-4 ml-6">{fieldErrors.acceptTerms}</p>}

              {formStatus === 'error' && formError && (
                <p className="text-sm text-red-600 bg-red-50 p-3 rounded-md">{formError}</p>
              )}
              {formStatus === 'success' && (
                <p className="text-sm text-green-700 bg-green-50 p-3 rounded-md">{t('successMessage')}</p>
              )}
              
              <Button
                type="submit"
                size="lg"
                className="w-full"
                isLoading={formStatus === 'loading'}
                disabled={formStatus === 'loading'}
              >
                {formStatus === 'loading' ? tGlobal('sendingMessage') : tGlobal('sendMessage')}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};