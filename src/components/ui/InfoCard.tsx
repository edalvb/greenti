import React from "react";

interface InfoCardItemProps {
  colorClass: string;
  text: string | React.ReactNode;
}

interface InfoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string | React.ReactNode;
  items: InfoCardItemProps[];
  titleClassName?: string;
  listClassName?: string;
  itemClassName?: string;
  colorIndicatorClassName?: string;
  colorIndicatorSize?: string;
  backgroundColor?: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({
  title,
  items,
  className = "",
  titleClassName = "",
  listClassName = "",
  itemClassName = "",
  colorIndicatorClassName = "",
  colorIndicatorSize = "w-2.5 h-2.5",
  backgroundColor = "bg-neutral-lightest",
  ...props
}) => {
  return (
    <div
      className={`rounded-btn-cta shadow-deep p-6 ${backgroundColor} ${className}`}
      {...props}
    >
      <h3 className={`text-lg font-semibold text-secondary mb-4 ${titleClassName}`}>
        {title}
      </h3>
      <ul className={`space-y-3 ${listClassName}`}>
        {items.map((item, index) => (
          <li key={index} className={`flex items-center ${itemClassName}`}>
            <div
              className={`${colorIndicatorSize} rounded-full flex-shrink-0 mr-3 ${item.colorClass} ${colorIndicatorClassName}`}
            ></div>
            <span className="text-sm text-neutral-darker">
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
