import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Accessibility from "./pages/Accessibility";
import NotFound from "./pages/NotFound";
import PortDrayage from "./pages/PortDrayage";
import MedicalCourier from "./pages/MedicalCourier";
import Notary from "./pages/Notary";
import Blog from "./pages/Blog";
import AreasServed from "./pages/AreasServed";
import Connecticut from "./pages/areas/Connecticut";
import NewYork from "./pages/areas/NewYork";
import NewJersey from "./pages/areas/NewJersey";
import RhodeIsland from "./pages/areas/RhodeIsland";
import CityPage from "./pages/areas/CityPage";
import CaseStudies from "./pages/CaseStudies";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/services/port-drayage" element={<PortDrayage />} />
          <Route path="/services/medical-courier" element={<MedicalCourier />} />
          <Route path="/services/notary" element={<Notary />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/areas-served" element={<AreasServed />} />
          <Route path="/areas-served/connecticut" element={<Connecticut />} />
          <Route path="/areas-served/new-york" element={<NewYork />} />
          <Route path="/areas-served/new-jersey" element={<NewJersey />} />
          <Route path="/areas-served/rhode-island" element={<RhodeIsland />} />
          <Route path="/areas-served/:state/:city" element={<CityPage />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
