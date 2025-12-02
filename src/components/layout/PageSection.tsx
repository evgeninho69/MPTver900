// src/components/layout/PageSection.tsx
import React from "react";
import clsx from "clsx";

type PageSectionProps = {
  children: React.ReactNode;
  className?: string;
  withBgWhite?: boolean;
  id?: string;
};

export const PageSection: React.FC<PageSectionProps> = ({
  children,
  className,
  withBgWhite = false,
  id,
}) => {
  return (
    <section
      id={id}
      className={clsx(
        "px-6 py-12 md:px-16",
        withBgWhite && "bg-white shadow-inner",
        className
      )}
    >
      <div className="mx-auto max-w-5xl">{children}</div>
    </section>
  );
};

