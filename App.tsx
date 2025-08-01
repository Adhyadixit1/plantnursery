import { useState, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FeaturedPlantsSection from './components/FeaturedPlantsSection';
import PlantFeaturesSection from './components/PlantFeaturesSection';
import FlowersSection from './components/FlowersSection';
import TestimonialsSection from './components/TestimonialsSection';
import PlantCatalogSection from './components/PlantCatalogSection';
import ContactSection from './components/ContactSection';
import Navigation from './components/Navigation';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  // Throttle scroll events for better performance
  const throttleScrollHandler = useCallback(() => {
    let ticking = false;
    
    const updateScrollY = () => {
      setScrollY(window.scrollY);
      ticking = false;
    };

    return () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollY);
        ticking = true;
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = throttleScrollHandler();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [throttleScrollHandler]);

  useEffect(() => {
    // Enhanced smooth scroll with CSS
    const style = document.createElement('style');
    style.textContent = `
      html {
        scroll-behavior: smooth;
        scroll-padding-top: 80px;
      }
      
      * {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      /* Optimize scrolling performance */
      body {
        overscroll-behavior: none;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      <Navigation />
      <FloatingWhatsApp />
      
      {/* Remove the outer motion wrapper to reduce animation layers */}
      <main>
        <HeroSection scrollY={scrollY} />
        <AboutSection />
        <FeaturedPlantsSection />
        <PlantFeaturesSection />
        <FlowersSection />
        <TestimonialsSection />
        <PlantCatalogSection />
        <ContactSection />
      </main>
    </div>
  );
}