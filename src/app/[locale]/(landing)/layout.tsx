import React from "react";
import { Navbar } from "@/features/home/infrastructure/components/layout/Navbar";
import { Footer } from "@/features/home/infrastructure/components/layout/Footer";

interface LandingLayoutProps {
  children: React.ReactNode;
}

export default function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
