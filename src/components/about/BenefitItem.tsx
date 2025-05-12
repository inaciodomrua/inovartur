
import React from 'react';

interface BenefitItemProps {
  color: string;
  text: string;
}

const BenefitItem = ({ color, text }: BenefitItemProps) => {
  // Map of color names to corresponding Tailwind color classes
  const colorMap: Record<string, string> = {
    sunny: "bg-[#f8bb26]",
    turquoise: "bg-[#23bdca]",
    coral: "bg-[#ff7a60]",
    vibrantorange: "bg-[#ff9f40]",
  };

  // Use the color from the map, or fall back to a default
  const bgColorClass = colorMap[color] || `bg-${color}`;
  
  return (
    <div className="bg-white/90 p-3 md:p-4 rounded-lg flex items-center gap-2 md:gap-3 shadow-sm">
      <div className={`${bgColorClass} rounded-full p-1.5 md:p-2 flex items-center justify-center`}>
        <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="font-medium text-sm md:text-base">{text}</span>
    </div>
  );
};

export default BenefitItem;
