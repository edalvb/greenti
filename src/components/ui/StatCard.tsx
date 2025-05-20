import React, { ReactNode } from "react";

interface StatCardProps {
  value: string;
  label: string;
  bgColor?: string;
  className?: string;
  icon?: ReactNode;
  valueClassName?: string;
  labelClassName?: string;
  iconWrapperClassName?: string;
  radius?: "default" | "cta" | "full";
}

export const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  bgColor = "bg-primary",
  className = "",
  icon,
  valueClassName = "text-lg font-bold leading-none",
  labelClassName = "text-sm leading-none",
  iconWrapperClassName = "w-10 h-10 mr-3 flex-shrink-0 flex items-center justify-center rounded-full bg-white/20",
  radius = "full",
}) => {
  const radiusStyles = {
    default: "rounded-md",
    cta: "rounded-btn-cta",
    full: "rounded-full",
  };

  return (
  <div
    className={`absolute inline-flex items-center px-3 py-2 md:px-4 md:py-2 text-white shadow-lg ${bgColor} ${radiusStyles[radius]} ${className}`}
  >
    {icon && (
      <div className={iconWrapperClassName}>
        {icon}
      </div>
    )}
    <div className="flex flex-col justify-center items-start">
      <span className={valueClassName}>{value}</span>
      <span className={labelClassName}>{label}</span>
    </div>
  </div>
  );
};
