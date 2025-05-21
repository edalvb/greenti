import React from "react";

interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  mainText: string | React.ReactNode;
  highlightText?: string | React.ReactNode;
  mainTextColorClass?: string;
  highlightTextColorClass?: string;
  wrapperTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  mainText,
  highlightText,
  mainTextColorClass = "text-secondary",
  highlightTextColorClass = "text-primary",
  wrapperTag: Wrapper = "h2",
  className = "",
  ...props
}) => {
  return (
    <Wrapper
      className={`text-3xl md:text-4xl font-bold leading-tight ${mainTextColorClass} ${className}`}
      {...props}
    >
      {mainText}
      {highlightText && (
        <span className={`block ${highlightTextColorClass} font-bold`}>
          {highlightText}
        </span>
      )}
    </Wrapper>
  );
};
