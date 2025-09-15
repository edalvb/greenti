import React from "react";
import { Footer } from "@/features/home/infrastructure/components/layout/Footer";

interface LandingLayoutProps {
  children: React.ReactNode;
}

export default function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col max-w-screen-xl mx-auto px-4 md:px-6">
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
