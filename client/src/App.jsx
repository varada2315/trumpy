import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ShaderBackground from './components/ShaderBackground';
import Home from './pages/Home';
import Story from './pages/Story';
import Services from './pages/Services';
import Partnership from './pages/Partnership';

// Helper to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    // Re-trigger scroll reveal animations when route changes
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.reveal-section');
    sections.forEach(section => {
      section.classList.remove('opacity-100', 'translate-y-0');
      section.classList.add('opacity-0', 'translate-y-10');
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col relative bg-transparent">
      {/* Premium Texture Overlay */}
      <div className="fixed inset-0 texture-overlay z-[60] pointer-events-none"></div>
      
      {/* Animated WebGL Shader Background */}
      <ShaderBackground />

      {/* Main Header / Navigation */}
      <Navbar />

      {/* Pages Container */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<Story />} />
          <Route path="/services" element={<Services />} />
          <Route path="/partnership" element={<Partnership />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}
