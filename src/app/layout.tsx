import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { NavbarComponent } from "@/app/home/components/layout/navbar_component";
import { FooterComponent } from "@/app/home/components/layout/footer_component";
import { HomeProvider } from "@/app/home/presentation/home_context";
import { HomeStore } from "@/app/home/presentation/home_store";
import { APP_NAME, APP_DESCRIPTION } from "@/core/utils/constants";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: `${APP_NAME} - ${APP_DESCRIPTION}`,
  description:
    "Expertos en desarrollo de software a medida, diseño UX/UI y staffing tecnológico para potenciar tu negocio.",
  keywords:
    "desarrollo de software, diseño UX/UI, staffing, outsourcing, greenti, aplicaciones móviles, desarrollo web",
  authors: [{ name: APP_NAME, url: "https://www.greenti.pe" }],
  metadataBase: new URL("https://www.greenti.pe"),
  openGraph: {
    title: `${APP_NAME} - ${APP_DESCRIPTION}`,
    description: "Transformamos ideas en soluciones digitales innovadoras.",
    url: "https://www.greenti.pe",
    siteName: APP_NAME,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `Logo de ${APP_NAME}`,
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${APP_NAME} - ${APP_DESCRIPTION}`,
    description:
      "Soluciones tecnológicas que impulsan el crecimiento de tu empresa.",
    images: ["/assets/icons/twitter.svg"],
  },
  icons: {
    icon: "/assets/images/logo_greenti.svg",
    apple: "/apple-touch-icon.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const homeStore = new HomeStore();
  const initialData = await homeStore.getInitialData();

  return (
    <html lang="es" className={`${poppins.variable}`}>
      <body
        className={`font-sans antialiased bg-neutral-lightest text-neutral-darkest`}
      >
        <HomeProvider initialData={initialData}>
          <NavbarComponent />
          <main className="pt-20">{children}</main>
          <FooterComponent />
        </HomeProvider>
      </body>
    </html>
  );
}
