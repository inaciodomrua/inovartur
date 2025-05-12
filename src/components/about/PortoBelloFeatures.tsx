
import React from 'react';
import { Users, Waves, Home } from 'lucide-react';
import FeatureCard from './FeatureCard';
import SectionDivider from './SectionDivider';

interface PortoBelloFeaturesProps {
  onContactClick: () => void;
}

const PortoBelloFeatures = ({ onContactClick }: PortoBelloFeaturesProps) => {
  return (
    <div className="mb-16 md:mb-24 fade-in-section reveal-delay-1">
      <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-coral">PortoBello Park - Porto Seguro</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        <FeatureCard 
          title="Perfeito para Família" 
          description="Piscinas infantis e adultas , além de tobogãs e escorregadores, garantem a diversão."
          icon={Users}
          color="coral"
          onContactClick={onContactClick}
        />
        
        <FeatureCard 
          title="Pertinho da Praia" 
          description="O Portobello Park fica apenas 250m de distância da Praia de Taperapuã e da barraca Axé Moi."
          icon={Waves}
          color="turquoise"
          onContactClick={onContactClick}
        />
        
        <FeatureCard 
          title="Várias opções de Quartos" 
          description="Vai vir com pouca gente ou a família toda? Aqui é um coração de mãe feito para todos."
          icon={Home}
          color="sunny"
          onContactClick={onContactClick}
        />
      </div>
      
      <SectionDivider />
    </div>
  );
};

export default PortoBelloFeatures;
