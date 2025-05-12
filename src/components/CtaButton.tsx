
import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const CtaButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const showButtonThreshold = 300;
      
      setIsVisible(scrollY > showButtonThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleWhatsAppContact = () => {
    const whatsappUrl = "https://wa.me/556181815737?text=Ol%C3%A1,%20vim%20do%20site.%0AQuero%20conhecer%20as%20hospedagens%20de%20voc%C3%AAs";
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppContact}
      className={`fixed z-50 bottom-6 right-6 bg-coral hover:bg-vibrantorange text-white py-3 px-6 rounded-full shadow-lg flex items-center justify-center gap-2 md:px-8 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      aria-hidden={!isVisible}
    >
      <MessageCircle size={20} />
      <span>Fale Conosco</span>
    </button>
  );
};

export default CtaButton;
