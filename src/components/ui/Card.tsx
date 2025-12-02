// src/components/ui/Card.tsx
import React from "react";
import clsx from "clsx";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

export const Card: React.FC<CardProps> = ({ 
  children, 
  className,
  hover = false,
}) => {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-[color:var(--color-border-subtle)] bg-[color:var(--color-card-bg)] p-4 shadow-sm transition-all duration-300",
        hover && "hover:shadow-lg hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
};

