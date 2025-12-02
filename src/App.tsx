// src/App.tsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TitlePage from "./pages/TitlePage";
import DiagnosticsPage from "./pages/DiagnosticsPage";
import ScenariosPage from "./pages/ScenariosPage";
import VisionPage from "./pages/VisionPage";
import MobilityPage from "./pages/MobilityPage";
import DevelopmentPage from "./pages/DevelopmentPage";
import EcologyPage from "./pages/EcologyPage";
import PublicSpacesPage from "./pages/PublicSpacesPage";
import InfrastructurePage from "./pages/InfrastructurePage";
import SocialPage from "./pages/SocialPage";
import IndustryPage from "./pages/IndustryPage";
import TourismPage from "./pages/TourismPage";
import CulturePage from "./pages/CulturePage";
import DigitalizationPage from "./pages/DigitalizationPage";

const App: React.FC = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<TitlePage />} />
        <Route path="/diagnostics" element={<DiagnosticsPage />} />
        <Route path="/scenarios" element={<ScenariosPage />} />
        <Route path="/vision" element={<VisionPage />} />
        <Route path="/mobility" element={<MobilityPage />} />
        <Route path="/development" element={<DevelopmentPage />} />
        <Route path="/ecology" element={<EcologyPage />} />
        <Route path="/public-spaces" element={<PublicSpacesPage />} />
        <Route path="/infrastructure" element={<InfrastructurePage />} />
        <Route path="/social" element={<SocialPage />} />
        <Route path="/industry" element={<IndustryPage />} />
        <Route path="/tourism" element={<TourismPage />} />
        <Route path="/culture" element={<CulturePage />} />
        <Route path="/digitalization" element={<DigitalizationPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

