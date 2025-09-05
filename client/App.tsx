import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import VirtualTours from "./pages/VirtualTours";
import MapPage from "./pages/Map";
import Archives from "./pages/Archives";
import Calendar from "./pages/Calendar";
import Transport from "./pages/Transport";
import Contact from "./pages/Contact";
import WhereToGo from "./pages/WhereToGo";
import Experiences from "./pages/Experiences";
import PlanTrip from "./pages/PlanTrip";
import Monasteries from "./pages/Monasteries";
import Festivals from "./pages/Festivals";
import Search from "./pages/Search";
import ZeroPoint from "./pages/ZeroPoint";
import Gangtok from "./pages/Gangtok";
import Heritage from "./pages/Heritage";
import Lachung from "./pages/Lachung";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/virtual-tours" element={<VirtualTours />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/archives" element={<Archives />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/transport" element={<Transport />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/where-to-go" element={<WhereToGo />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/plan" element={<PlanTrip />} />
            <Route path="/monasteries" element={<Monasteries />} />
            <Route path="/festivals" element={<Festivals />} />
            <Route path="/search" element={<Search />} />
            <Route path="/zero-point" element={<ZeroPoint />} />
            <Route path="/gangtok" element={<Gangtok />} />
            <Route path="/heritage" element={<Heritage />} />
            <Route path="/lachung" element={<Lachung />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

const container = document.getElementById("root")!;
// Reuse the same root across HMR updates to avoid duplicate createRoot warnings
// @ts-expect-error attach to window for persistence during HMR
window.__FUSION_APP_ROOT__ =
  window.__FUSION_APP_ROOT__ || createRoot(container);
// @ts-expect-error read from window
window.__FUSION_APP_ROOT__.render(<App />);
