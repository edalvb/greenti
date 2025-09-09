import React from "react";

interface PortfolioLayoutProps {
  children: React.ReactNode;
}

export default function PortfolioLayout({ children }: PortfolioLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col max-w-screen-xl mx-auto px-4 md:px-6">
      <main className="flex-grow">{children}</main>
    </div>
  );
}
