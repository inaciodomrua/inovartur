
import React from 'react';
import { Shield, Plane, Heart, ExternalLink } from 'lucide-react';

const TravelInsuranceSection = () => {
  const handleInsuranceClick = () => {
    window.open('https://portal.sulamericaseguros.com.br/seguroviagem?idLink=CSCHNFA', '_blank');
  };

  return (
    <section className="bg-gradient-to-r from-deepblue/5 to-turquoise/5 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="order-2 md:order-1 fade-in-section">
            <h2 className="text-3xl md:text-4xl font-bold text-deepblue mb-4 md:mb-6">
              Proteja Sua Viagem com Seguro Viagem
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6 border-l-4 border-coral">
              <p className="text-lg mb-4 text-gray-800">
                Viaje com <span className="font-semibold text-coral">tranquilidade e segurança</span>. 
                Oferecemos seguro viagem completo em parceria com a SulAmérica Seguros.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Heart className="text-coral mr-3 h-5 w-5 mt-1" />
                  <span>Cobertura médica e hospitalar completa</span>
                </li>
                <li className="flex items-start">
                  <Plane className="text-coral mr-3 h-5 w-5 mt-1" />
                  <span>Proteção contra cancelamento e atraso de voos</span>
                </li>
                <li className="flex items-start">
                  <Shield className="text-coral mr-3 h-5 w-5 mt-1" />
                  <span>Assistência 24h em português</span>
                </li>
              </ul>
              <button 
                onClick={handleInsuranceClick}
                className="bg-coral hover:bg-vibrantorange text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 font-medium"
              >
                <Shield className="w-5 h-5" />
                Contratar Seguro Viagem
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
            <div className="bg-turquoise/10 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                <span className="font-medium">💡 Dica:</span> O seguro viagem é obrigatório para alguns destinos internacionais 
                e altamente recomendado para viagens nacionais.
              </p>
            </div>
          </div>
          
          {/* Image */}
          <div className="order-1 md:order-2 fade-in-section">
            <div className="relative">
              <div className="absolute -top-3 -right-3 w-20 h-20 bg-turquoise rounded-full flex items-center justify-center opacity-90 shadow-lg z-10">
                <Plane className="w-10 h-10 text-white" />
              </div>
              <img 
                src="/lovable-uploads/9d4de133-da5b-4371-90db-316e9f7c4289.png" 
                alt="Seguro Viagem - Proteção completa para sua viagem" 
                className="rounded-lg shadow-xl border-4 border-white w-full object-cover h-80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelInsuranceSection;
