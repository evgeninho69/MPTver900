// src/components/ui/Typography.tsx
import React from "react";
import clsx from "clsx";

type HeadingProps = {
  as?: "h1" | "h2" | "h3";
  children: React.ReactNode;
  className?: string;
};

export const Heading: React.FC<HeadingProps> = ({
  as = "h2",
  children,
  className,
}) => {
  const Tag = as;
  const base =
    "font-bold tracking-tight text-slate-900 font-display";
  const sizes: Record<"h1" | "h2" | "h3", string> = {
    h1: "text-3xl sm:text-4xl lg:text-5xl",
    h2: "text-2xl sm:text-3xl",
    h3: "text-xl sm:text-2xl",
  };

  return <Tag className={clsx(base, sizes[as], className)}>{children}</Tag>;
};

type BodyProps = {
  children: React.ReactNode;
  className?: string;
};

export const Body: React.FC<BodyProps> = ({ children, className }) => (
  <p className={clsx("text-sm md:text-base leading-relaxed text-slate-700", className)}>
    {children}
  </p>
);

type CaptionProps = {
  children: React.ReactNode;
  className?: string;
};

export const Caption: React.FC<CaptionProps> = ({ children, className }) => (
  <p
    className={clsx(
      "text-xs uppercase tracking-[0.2em] text-slate-500",
      className
    )}
  >
    {children}
  </p>
);

