
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import PortoBelloFeatures from './about/PortoBelloFeatures';
import AboutInovarTur from './about/AboutInovarTur';
import CompanyImage from './about/CompanyImage';

const AboutSection = () => {
  const isMobile = useIsMobile();
  
  const handleWhatsAppContact = () => {
    const whatsappUrl = "https://wa.me/556181815737?text=Ol%C3%A1,%20vim%20do%20site.%0AQuero%20conhecer%20as%20hospedagens%20de%20voc%C3%AAs";
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="about" className="section-container bg-gradient-to-b from-white to-[#FFF8E8]">
      {/* Porto Bello Park Features Section */}
      <PortoBelloFeatures onContactClick={handleWhatsAppContact} />

      {/* About INOVAR TUR Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <AboutInovarTur isMobile={isMobile} />
        <CompanyImage />
      </div>
    </section>
  );
};

export default AboutSection;
