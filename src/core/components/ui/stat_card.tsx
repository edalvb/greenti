import React, { ReactNode } from "react";

interface StatCardProps {
  value: string;
  label: string;
  bgColor?: string;
  className?: string;
  icon?: ReactNode;
}

export const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  bgColor = "#22C55E",
  className = "",
  icon,
}) => (
  <div
    className={`absolute inline-flex items-center rounded-full px-4 py-2 ${className}`}
    style={{ backgroundColor: bgColor }}
  >
    <div className="w-10 h-10 mr-3 flex-shrink-0 flex items-center justify-center">
      {icon ?? <div className="w-full h-full rounded-full bg-white" />}
    </div>
    <div className="flex flex-col justify-center items-center text-white">
      <span className="text-lg font-bold leading-none">{value}</span>
      <span className="text-sm leading-none">{label}</span>
    </div>
  </div>
);
