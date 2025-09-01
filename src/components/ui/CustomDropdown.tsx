"use client";

import React, { useEffect, useRef, useState, type ReactNode } from "react";
import { IconChevronDown } from "@tabler/icons-react";

export type DropdownItem = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
};

export type CustomDropdownProps = {
  name?: string;
  icon?: React.ReactNode;
  items?: DropdownItem[] | null;
  className?: string;
  navLinkClasses?: string;
  variant?: "desktop" | "mobile";
  ariaLabel?: string;
  align?: "left" | "right";
  menuClassName?: string;
  onToggle?: (open: boolean) => void;
  children?: ReactNode;
};

export const CustomDropdown: React.FC<CustomDropdownProps> = ({
  name,
  icon,
  items,
  className = "",
  navLinkClasses = "",
  variant = "desktop",
  ariaLabel = "Options",
  align = "right",
  menuClassName = "w-28",
  onToggle,
  children,
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const hasPanel = (!!items && items.length > 0) || !!children;

  const toggle = () => {
    setOpen((v) => {
      const next = !v;
      onToggle?.(next);
      return next;
    });
  };

  useEffect(() => {
    if (variant !== "desktop") return;
    const onClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
        onToggle?.(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [variant, onToggle]);

  const handleItemClick = (cb?: () => void) => {
    try {
      cb?.();
    } finally {
      setOpen(false);
      onToggle?.(false);
    }
  };

  if (variant === "mobile") {
    return (
      <div className={`w-full ${className}`} ref={ref}>
        <button
          onClick={toggle}
          className={`w-full flex items-center justify-between text-secondary hover:text-primary px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-lightest/50`}
          aria-haspopup={hasPanel ? "menu" : undefined}
          aria-expanded={hasPanel ? open : undefined}
        >
          <span
            className={`flex items-center gap-1.5 ${open ? "text-primary" : ""}`}
          >
            {icon}
            {name}
          </span>
          {hasPanel && (
            <IconChevronDown
              size={18}
              className={`ml-2 transition-transform ${open ? "rotate-180 text-primary" : ""}`}
            />
          )}
        </button>
        {open &&
          hasPanel &&
          (children ? (
            <div className="mt-1 ml-9 pr-3" role="menu" aria-label={ariaLabel}>
              {children}
            </div>
          ) : (
            !!items &&
            items.length > 0 && (
              <div
                className="mt-1 ml-9 pr-3"
                role="listbox"
                aria-label={ariaLabel}
              >
                {items.map((item, idx) => (
                  <button
                    key={`${item.label}-${idx}`}
                    onClick={() => handleItemClick(item.onClick)}
                    disabled={item.disabled}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                      item.disabled
                        ? "text-neutral-400"
                        : "text-secondary hover:text-primary hover:bg-neutral-lightest/50"
                    }`}
                    role="option"
                    aria-selected={false}
                  >
                    <span className="inline-flex items-center gap-2">
                      {item.icon}
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            )
          ))}
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} ref={ref}>
      <button
        type="button"
        onClick={toggle}
        className={`flex items-center px-3 py-2 rounded-md text-sm font-semibold tracking-wide transition-colors duration-300 ${navLinkClasses} hover:text-primary`}
        aria-haspopup={hasPanel ? "menu" : undefined}
        aria-expanded={hasPanel ? open : undefined}
      >
        <span className={`${open ? "text-primary" : ""}`}>{icon}</span>
        <span className={`${open ? "text-primary" : ""}`}>{name}</span>
        {hasPanel && (
          <IconChevronDown
            size={16}
            className={`ml-1 transition-transform ${open ? "rotate-180 text-primary" : ""}`}
          />
        )}
      </button>

      {open &&
        hasPanel &&
        (children ? (
          <div
            role="menu"
            aria-label={ariaLabel}
            className={`absolute ${align === "left" ? "left-0" : "right-0"} mt-2 ${menuClassName} origin-top-right rounded-2xl bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-50`}
          >
            {children}
          </div>
        ) : (
          !!items &&
          items.length > 0 && (
            <div
              role="listbox"
              aria-label={ariaLabel}
              className={`absolute ${align === "left" ? "left-0" : "right-0"} mt-2 ${menuClassName} origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-50`}
            >
              {items.map((item, idx) => (
                <button
                  key={`${item.label}-${idx}`}
                  role="option"
                  aria-selected={false}
                  onClick={() => handleItemClick(item.onClick)}
                  disabled={item.disabled}
                  className={`block w-full text-left px-3 py-2 text-sm ${
                    item.disabled
                      ? "text-neutral-400"
                      : "text-secondary hover:text-primary hover:bg-neutral-lightest/50"
                  }`}
                >
                  <span className="inline-flex items-center gap-2 normal-case">
                    {item.icon}
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          )
        ))}
    </div>
  );
};

export default CustomDropdown;
