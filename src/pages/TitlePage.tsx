// src/pages/TitlePage.tsx
import React from "react";
import { Header } from "../components/layout/Header";
import { HeroSection } from "../components/sections/HeroSection";
import { IdentitySection } from "../components/sections/IdentitySection";
import { StructureSection } from "../components/sections/StructureSection";
import { NewsSection } from "../components/sections/NewsSection";
import { AIAgent } from "../components/ai/AIAgent";

export const TitlePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[color:var(--color-bg)] text-[color:var(--color-text)]">
      <Header />
      <HeroSection />
      <IdentitySection />
      <StructureSection />
      <NewsSection />
      <AIAgent />
    </div>
  );
};

export default TitlePage;

