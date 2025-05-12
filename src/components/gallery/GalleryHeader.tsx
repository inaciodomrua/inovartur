
import React from 'react';

const GalleryHeader = () => {
  return (
    <div className="relative">
      {/* New background with ocean-inspired gradient and animated waves */}
      <div className="bg-gradient-to-b from-sky-400 via-blue-500 to-indigo-600 text-white py-16 md:py-24 overflow-hidden">
        {/* Animated wave overlays */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
        </div>
        
        {/* Light particles/bubbles effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/5 w-3 h-3 rounded-full bg-white opacity-50 animate-float-slow"></div>
          <div className="absolute top-2/3 left-1/3 w-2 h-2 rounded-full bg-white opacity-40 animate-float-medium"></div>
          <div className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-white opacity-60 animate-float"></div>
          <div className="absolute bottom-1/3 right-1/3 w-2 h-2 rounded-full bg-white opacity-50 animate-float-fast"></div>
          <div className="absolute top-3/4 left-2/3 w-3 h-3 rounded-full bg-white opacity-30 animate-float-slow"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Increased top padding, especially on mobile */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-md pt-6 md:pt-8">
              Galeria de Fotos
            </h1>
            <p className="text-lg md:text-xl text-blue-50 max-w-2xl mx-auto">
              Explore nossas instalações e acomodações através de nossa galeria de fotos. 
              Conheça o PortoBello Park Aquático e nossos quartos disponíveis.
            </p>
          </div>
        </div>
      </div>
      
      {/* New curved divider with multiple waves */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden transform z-20">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320" 
          className="relative block w-full h-[100px]"
          preserveAspectRatio="none"
        >
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,128L40,138.7C80,149,160,171,240,176C320,181,400,171,480,154.7C560,139,640,117,720,112C800,107,880,117,960,138.7C1040,160,1120,192,1200,186.7C1280,181,1360,139,1400,117.3L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
      
      {/* Add custom styles for the waves */}
      <style>
        {`
        .wave {
          position: absolute;
          width: 100%;
          height: 100px;
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 88.7'%3E%3Cpath d='M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.8h800v-31.8z' fill='%23ffffff' fill-opacity='0.2'/%3E%3C/svg%3E");
          background-size: 1600px 100px;
        }
        
        .wave1 {
          animation: wave 30s linear infinite;
          z-index: 1;
          opacity: 0.3;
          animation-delay: 0s;
          bottom: 0;
        }
        
        .wave2 {
          animation: wave2 15s linear infinite;
          z-index: 2;
          opacity: 0.5;
          animation-delay: -5s;
          bottom: 15px;
        }
        
        .wave3 {
          animation: wave 25s linear infinite;
          z-index: 3;
          opacity: 0.2;
          animation-delay: -2s;
          bottom: 30px;
        }
        
        @keyframes wave {
          0% {
            background-position: 0;
          }
          100% {
            background-position: 1600px;
          }
        }
        
        @keyframes wave2 {
          0% {
            background-position: 1600px;
          }
          100% {
            background-position: 0;
          }
        }
        `}
      </style>
    </div>
  );
};

export default GalleryHeader;
