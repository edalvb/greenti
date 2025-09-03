import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { Poppins } from "next/font/google";
import { notFound } from "next/navigation";
import { AppProviders } from "@/core/providers/AppProviders";
import { Navbar } from "@/features/home/infrastructure/components/layout/Navbar";
import "../globals.css";
import { Util } from "@/core/utils/utils";
import { routing } from "@/i18n/routing";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const locale = await Util.getLocale(params);
  setRequestLocale(locale);

  const tGlobal = await getTranslations({ locale, namespace: "Global" });
  const tMetadata = await getTranslations({ locale, namespace: "Metadata" });

  const appName = tGlobal("appName");
  const appDescription = tGlobal("appDescription");
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  return {
    title: {
      template: `%s | ${appName}`,
      default: tMetadata("title", { appName, appDescription }),
    },
    description: tMetadata("description"),
    keywords: tMetadata("keywords")
      .split(",")
      .map((k) => k.trim()),
    authors: [
      {
        name: appName,
        url: baseUrl,
      },
    ],
    metadataBase: new URL(baseUrl),
    openGraph: {
      title: tMetadata("ogTitle", { appName, appDescription }),
      description: tMetadata("ogDescription"),
      url: `./${locale}`,
      siteName: appName,
      images: [
        {
          url: `/assets/images/logo_greenti.svg`,
          width: 1200,
          height: 630,
          alt: `Logo of ${appName}`,
        },
      ],
      locale: locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: tMetadata("twitterTitle", { appName, appDescription }),
      description: tMetadata("twitterDescription"),
      images: [`/assets/images/logo_greenti.svg`],
    },
    icons: {
      icon: "/assets/images/logo_greenti.svg",
      apple: "/apple-touch-icon.png",
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        es: "/es",
        en: "/en",
      },
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#12B759",
  width: "device-width",
  initialScale: 1,
};

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: any;
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const locale = await Util.getLocale(params);

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className="antialiased">
      <body
        className={`${poppins.className} bg-neutral-lightest text-neutral-darkest min-h-screen flex flex-col`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <AppProviders>
            <Navbar />
            {children}
          </AppProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
