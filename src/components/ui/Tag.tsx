// src/components/ui/Tag.tsx
import React from "react";
import clsx from "clsx";

type TagTone = "default" | "water" | "heritage" | "digital";

type TagProps = {
  children: React.ReactNode;
  tone?: TagTone;
  className?: string;
};

export const Tag: React.FC<TagProps> = ({
  children,
  tone = "default",
  className,
}) => {
  const tones: Record<TagTone, string> = {
    default:
      "border-slate-300 text-slate-700 bg-white/70",
    water:
      "border-water text-water bg-teal-50/80",
    heritage:
      "border-heritage text-heritage bg-amber-50/80",
    digital:
      "border-digital text-digital bg-blue-50/80",
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-sm transition-all duration-200 hover:scale-105",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
};

