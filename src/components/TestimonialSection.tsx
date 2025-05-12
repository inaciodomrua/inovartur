
import React from 'react';
import ReviewsCarousel from './testimonials/ReviewsCarousel';
import CallToAction from './testimonials/CallToAction';
import { useIsMobile } from '@/hooks/use-mobile';

const TestimonialSection = () => {
  const isMobile = useIsMobile();

  const handleWhatsAppContact = () => {
    const whatsappUrl = "https://wa.me/556181815737?text=Ol%C3%A1,%20vim%20do%20site.%0AQuero%20conhecer%20as%20hospedagens%20de%20voc%C3%AAs";
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="testimonials" className="py-12 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`section-title ${isMobile ? 'mx-auto text-center' : ''} mb-8 md:mb-16`}>O Que Dizem Nossos Clientes</h2>
        
        <ReviewsCarousel />
        
        <CallToAction onContactClick={handleWhatsAppContact} />
      </div>
    </section>
  );
};

export default TestimonialSection;
