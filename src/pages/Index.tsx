
import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import GallerySection from '@/components/GallerySection';
import LocationSection from '@/components/LocationSection';
import TestimonialSection from '@/components/TestimonialSection';
import CertificationSection from '@/components/CertificationSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CtaButton from '@/components/CtaButton';

const Index = () => {
  useEffect(() => {
    // Function to handle scroll animations
    const handleScrollAnimation = () => {
      const sections = document.querySelectorAll('.fade-in-section');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      
      sections.forEach(section => {
        observer.observe(section);
      });
    };
    
    handleScrollAnimation();
    
    // Preload images
    const images = [
      '/lovable-uploads/f37f7e5f-57e0-435d-a98f-9a1a7dae46ed.png',
      '/lovable-uploads/903b453b-e880-4f82-826f-498624668fba.png',
      '/lovable-uploads/701c445a-8029-4b1b-93ed-667b09d831be.png'
    ];
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
    
    // Update document title
    document.title = "INOVAR TUR - Agência de Viagens em Porto Seguro | Pacotes e Passeios";
    
    // Cleanup observer
    return () => {
      const sections = document.querySelectorAll('.fade-in-section');
      const observer = new IntersectionObserver(() => {});
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Fixed CTA Button */}
      <CtaButton />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Gallery Section */}
      <GallerySection />
      
      {/* Testimonial Section */}
      <TestimonialSection />
      
      {/* Location Section */}
      <LocationSection />
      
      {/* Certification Section - New section added before Footer */}
      <CertificationSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
