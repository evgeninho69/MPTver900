// src/components/ui/Button.tsx
import React from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "sm";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}) => {
  const base =
    "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-digital text-white hover:bg-blue-600 focus:ring-digital shadow-lg hover:shadow-xl",
    secondary:
      "bg-heritage text-white hover:bg-[#a86224] focus:ring-heritage shadow-lg hover:shadow-xl",
    ghost:
      "bg-white/70 text-slate-800 border border-slate-200 hover:bg-slate-50 focus:ring-slate-300 backdrop-blur-sm",
  };

  const sizes: Record<ButtonSize, string> = {
    md: "px-5 py-2.5 text-sm",
    sm: "px-3.5 py-1.5 text-xs",
  };

  return (
    <button
      className={clsx(base, variants[variant], sizes[size], className)}
      {...rest}
    >
      {children}
    </button>
  );
};

