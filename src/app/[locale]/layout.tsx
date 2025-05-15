import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { Poppins } from "next/font/google";
import { notFound } from "next/navigation";
import { AppProviders } from "@/core/providers/AppProviders";
import { routing } from "@/core/config/i18n/routing";
import "../globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  const tGlobal = await getTranslations({ locale, namespace: "Global" });
  const tMetadata = await getTranslations({ locale, namespace: "Metadata" });
  
  const appName = tGlobal("appName");
  const appDescription = tGlobal("appDescription");

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
        url: process.env.NEXT_PUBLIC_BASE_URL || "https://www.greenti.pe",
      },
    ],
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_BASE_URL || "https://www.greenti.pe",
    ),
    openGraph: {
      title: tMetadata("ogTitle", { appName, appDescription }),
      description: tMetadata("ogDescription"),
      url: "./",
      siteName: appName,
      images: [
        {
          url: `${
            process.env.NEXT_PUBLIC_BASE_URL || ""
          }/assets/images/logo_greenti.svg`,
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
      images: [
        `${
          process.env.NEXT_PUBLIC_BASE_URL || ""
        }/assets/images/logo_greenti.svg`,
      ],
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
  params: { locale: string };
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${poppins.variable} antialiased`}>
      <body className="font-sans bg-neutral-lightest text-neutral-darkest min-h-screen flex flex-col">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <AppProviders>{children}</AppProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
