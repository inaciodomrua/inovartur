
import React from 'react';

const Star = ({ className }: { className: string }) => (
  <svg 
    className={className}
    viewBox="0 0 24 24" 
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);

const CompanyImage = () => {
  return (
    <div className="relative fade-in-section reveal-delay-2 order-1 md:order-2 mb-8 md:mb-0">
      <div className="rounded-2xl overflow-hidden shadow-xl">
        <div className="relative">
          <img 
            src="/lovable-uploads/3cc5871e-d8e5-4735-9c1e-6e42273b12c7.png" 
            alt="PortoBello Park - Vista Aérea" 
            className="w-full h-[300px] md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deepblue/70 to-turquoise/30 flex items-center justify-center">
            <div className="w-1/2 md:w-2/5 p-4 flex items-center justify-center">
              <img 
                src="/lovable-uploads/8620f06c-0844-44b1-8beb-b3c7467f69b2.png" 
                alt="INOVAR TUR Logo" 
                className="w-full h-auto filter drop-shadow-lg animate-pulse"
                style={{animation: "pulse 3s infinite"}}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 bg-white p-3 md:p-4 rounded-lg shadow-lg">
        <p className="text-xs md:text-sm font-semibold text-deepblue">Avaliação dos clientes</p>
        <div className="flex items-center mt-1">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <span className="ml-2 text-xs md:text-sm font-medium">5.0/5.0</span>
        </div>
      </div>
    </div>
  );
};

export default CompanyImage;
