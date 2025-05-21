import React from "react";
import { VisualPane } from "./AboutUsSection/VisualPane";
import { ContentPane } from "./AboutUsSection/ContentPane";

interface AboutUsSectionProps {
  className?: string;
}

export const AboutUsSection: React.FC<AboutUsSectionProps> = ({
  className = "",
}) => {
  return (
    <section
      id="about-us"
      className={`py-16 md:py-24 bg-white px-responsive ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <VisualPane className="lg:order-2" />
          <ContentPane className="lg:order-1" />
        </div>
      </div>
    </section>
  );
};
