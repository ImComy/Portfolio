import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import ScrollToTop from '@/components/ScrollToTop';
import InteractiveCat from '@/components/InteractiveCat';
import InteractiveDotGrid from '@/components/InteractiveDotGrid';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Pages
import HomePage from '@/pages/HomePage';
import ShowcasePage from '@/pages/ShowcasePage';
import ProjectDetailPage from '@/pages/ProjectDetailPage';
import CertificateDetailPage from '@/pages/CertificateDetailPage';
import AboutPage from '@/pages/AboutPage';
import CVPage from '@/pages/CVPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-foreground relative flex flex-col selection:bg-primary/20 selection:text-primary">
        {/* Interactive Responsive Dot Matrix Canvas */}
        <InteractiveDotGrid />

        {/* Subtle warm ambient lighting */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-primary/10 rounded-full blur-[140px] opacity-70" />
          <div className="absolute top-1/3 -right-40 w-[450px] h-[350px] bg-accent/5 rounded-full blur-[130px] opacity-50" />
        </div>

        {/* Playful Cat Companion */}
        <InteractiveCat />

        {/* Global Floating Navigation */}
        <Navbar />

        {/* Main Content Area */}
        <main className="relative z-10 flex-1 px-4 sm:px-6 pt-6 sm:pt-10 max-w-6xl w-full mx-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/showcase" element={<ShowcasePage />} />
            <Route path="/projects" element={<ShowcasePage />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            <Route path="/certifications/:id" element={<CertificateDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/cv" element={<CVPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        <Toaster />
      </div>
    </BrowserRouter>
  );
}