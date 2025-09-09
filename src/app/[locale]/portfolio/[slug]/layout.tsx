import React from "react";

interface PortfolioLayoutProps {
  children: React.ReactNode;
}

export default function PortfolioLayout({ children }: PortfolioLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col px-4 sm:px-6 lg:px-8">
      <main className="flex-grow">{children}</main>
    </div>
  );
}
