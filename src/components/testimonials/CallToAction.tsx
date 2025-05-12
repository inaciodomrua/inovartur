
import React from 'react';

interface CallToActionProps {
  onContactClick: () => void;
}

const CallToAction = ({ onContactClick }: CallToActionProps) => {
  return (
    <div className="mt-12 md:mt-16 bg-gradient-to-r from-coral to-vibrantorange rounded-xl p-6 md:p-10 text-white text-center max-w-4xl mx-auto shadow-xl fade-in-section">
      <h3 className="text-xl md:text-3xl font-bold mb-3 md:mb-4">Venha Viver Essa Experiência!</h3>
      <p className="text-sm md:text-lg mb-4 md:mb-6 max-w-2xl mx-auto">
        Aproveite Porto Seguro da melhor forma possível com nossos serviços de qualidade e atendimento personalizado. 
      </p>
      <button 
        className="bg-white text-coral hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-medium py-2 px-6 md:py-3 md:px-8 rounded-full shadow-lg text-sm md:text-base"
        onClick={onContactClick}
      >
        Fale Conosco
      </button>
    </div>
  );
};

export default CallToAction;
