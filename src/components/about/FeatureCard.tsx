
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  onContactClick: () => void;
}

const FeatureCard = ({ title, description, icon: Icon, color, onContactClick }: FeatureCardProps) => {
  // Map of color names to corresponding Tailwind color classes
  const colorMap: Record<string, string> = {
    sunny: "bg-[#f8bb26]",
    turquoise: "bg-[#23bdca]",
    coral: "bg-[#ff7a60]",
    vibrantorange: "bg-[#ff9f40]",
  };

  // Use the color from the map, or fall back to a default
  const bgColorClass = colorMap[color] || `bg-${color}`;
  
  const handleWhatsAppContact = () => {
    const whatsappUrl = "https://wa.me/5561999359552?text=Ol%C3%A1,%20vim%20do%20site.%0AQuero%20conhecer%20as%20hospedagens%20de%20voc%C3%AAs";
    window.open(whatsappUrl, '_blank');
  };
  
  return (
    <div className={`rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-${color}/20 to-${color}/5 p-6`}>
      <div className="flex justify-center mb-4 md:mb-6">
        <div className={`${bgColorClass} rounded-full p-3 md:p-4 flex items-center justify-center`}>
          <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
        </div>
      </div>
      <h4 className="text-lg md:text-xl font-bold text-center mb-2 md:mb-3">{title}</h4>
      <p className="text-center text-gray-700 text-sm md:text-base">
        {description}
      </p>
      <div className="mt-4 md:mt-6 flex justify-center">
        <button 
          className="bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-md flex items-center gap-1 transition-all text-xs md:text-sm"
          onClick={handleWhatsAppContact}
        >
          <MessageCircle className="w-3 h-3 md:w-4 md:h-4" />
          <span>FAZER UM ORÇAMENTO</span>
        </button>
      </div>
    </div>
  );
};

export default FeatureCard;
