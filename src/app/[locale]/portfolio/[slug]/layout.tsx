import React from "react";
import { Footer } from "@/features/home/infrastructure/components/layout/Footer";

interface PortfolioLayoutProps {
  children: React.ReactNode;
}

export default function PortfolioLayout({ children }: PortfolioLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-presence-section ">
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
