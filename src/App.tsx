import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WebsiteDevelopment from "./pages/WebsiteDevelopment";
import SEOOptimization from "./pages/SEOOptimization";
import WebDevFromScratch from "./pages/WebDevFromScratch";
import ModifyWebsite from "./pages/ModifyWebsite";
import AppDevelopment from "./pages/AppDevelopment";
import Cybersecurity from "./pages/Cybersecurity";
import OurWork from "./pages/OurWork";
import About from "./pages/About";

/* Graphic pages */
import GraphicDesigning from "./pages/GraphicDesigning";
import LogoDesign from "./pages/graphic/LogoDesign";
import PosterAndBusinessCard from "./pages/graphic/PosterAndBusinessCard";
import UIUXDesign from "./pages/graphic/UIUXDesign";

/* AI Agents page */
import AIAgents from "./pages/AIAgents";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/website-development" element={<WebsiteDevelopment />} />
          <Route path="/services/website-development/seo-optimization" element={<SEOOptimization />} />
          <Route path="/services/website-development/web-dev-from-scratch" element={<WebDevFromScratch />} />
          <Route path="/services/website-development/modify-website" element={<ModifyWebsite />} />
          <Route path="/services/app-development" element={<AppDevelopment />} />
          <Route path="/services/cybersecurity" element={<Cybersecurity />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/about" element={<About />} />

          {/* New services */}
          <Route path="/services/ai-agents" element={<AIAgents />} />
          <Route path="/services/graphic-designing" element={<GraphicDesigning />} />

          {/* Graphic subpages */}
          <Route path="/services/graphic-designing/logo-designing" element={<LogoDesign />} />
          <Route path="/services/graphic-designing/poster-businesscard" element={<PosterAndBusinessCard />} />
          <Route path="/services/graphic-designing/ui-ux-designing" element={<UIUXDesign />} />

          {/* CATCH-ALL */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
