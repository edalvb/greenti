"use client";

import { useTranslations } from 'next-intl';
import { Link } from '@/core/config/i18n/navigation';
import { Button } from '@/components/ui/Button';
import { IconAlertTriangle } from '@tabler/icons-react';

export default function NotFoundPage() {
  const t = useTranslations('NotFoundPage');

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-160px)] text-center p-6 bg-neutral-lightest">
      <div className="max-w-md">
        <IconAlertTriangle size={80} className="text-primary mb-6 mx-auto" strokeWidth={1.5}/>
        <h1 className="text-5xl font-extrabold text-primary mb-4">
          404
        </h1>
        <h2 className="text-3xl font-semibold text-secondary mb-6">
          {t('title')}
        </h2>
        <p className="text-lg text-neutral-darker mb-10 leading-relaxed">
          {t('description')}
        </p>
        <Link href="/" passHref>
          <Button variant="primary" size="lg" className="shadow-md hover:shadow-lg transition-shadow">
            {t('homeLink')}
          </Button>
        </Link>
      </div>
    </div>
  );
}