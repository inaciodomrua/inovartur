
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const LocationSection = () => {
  const attractions = [
    "Passarela do Descobrimento",
    "Centro Histórico",
    "Praia do Mutá",
    "Recife de Fora",
    "Praia de Taperapuan",
    "Parque Nacional Pau Brasil"
  ];
  
  const isMobile = useIsMobile();

  return (
    <section id="location" className="section-container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="fade-in-section reveal-delay-1 order-2 md:order-1">
          <h2 className={`section-title ${isMobile ? 'mx-auto text-center' : ''}`}>Nossa Localização</h2>
          <div className="mb-6 md:mb-8">
            <div className="flex items-start gap-2 mb-2 md:mb-3">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-coral flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-sm md:text-lg text-gray-700">
                <span className="font-medium">Endereço:</span> R. do Telégrafo, 2055 - Taperapuã, Porto Seguro - BA, 45810-000
              </p>
            </div>
            <div className="flex items-center gap-2 mb-2 md:mb-3">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-coral flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <p className="text-sm md:text-lg text-gray-700">
                <span className="font-medium">WhatsApp:</span> (61) 99935-9552
              </p>
            </div>
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-coral flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <p className="text-sm md:text-lg text-gray-700">
                <span className="font-medium">E-mail:</span> contato@inovartur.com.br
              </p>
            </div>
          </div>
          
          <h3 className="text-xl md:text-2xl font-bold text-deepblue mb-3 md:mb-4">Atrações Próximas</h3>
          <p className="text-sm md:text-lg mb-3 md:mb-4 text-gray-700">
            Estamos localizados no coração de Porto Seguro, com fácil acesso às principais atrações turísticas da cidade:
          </p>
          
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 mb-4 md:mb-6">
            {attractions.map((attraction, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="bg-sunny rounded-full p-0.5 md:p-1">
                  <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm md:text-base">{attraction}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-6 md:mt-8">
            <p className="text-sm md:text-lg font-medium text-deepblue mb-2">Distâncias:</p>
            <div className="flex flex-col gap-1 md:gap-2">
              <div className="flex items-center justify-between text-sm md:text-base">
                <span className="text-gray-700">Praia Toa Toa</span>
                <span className="font-medium">1.5km</span>
              </div>
              <div className="flex items-center justify-between text-sm md:text-base">
                <span className="text-gray-700">Praia Axé Moi</span>
                <span className="font-medium">500m</span>
              </div>
              <div className="flex items-center justify-between text-sm md:text-base">
                <span className="text-gray-700">Restaurante Pau Brasil</span>
                <span className="font-medium">2km</span>
              </div>
              <div className="flex items-center justify-between text-sm md:text-base">
                <span className="text-gray-700">Centro Histórico</span>
                <span className="font-medium">6km</span>
              </div>
              <div className="flex items-center justify-between text-sm md:text-base">
                <span className="text-gray-700">Coroa Vermelha</span>
                <span className="font-medium">6km</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="fade-in-section reveal-delay-2 order-1 md:order-2 mb-6 md:mb-0">
          <div className="rounded-2xl overflow-hidden shadow-xl h-[300px] sm:h-[350px] md:h-[450px] relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.341712588136!2d-39.0691983!3d-16.47809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x73689c9e740e53%3A0x8339e1c14f97cf1b!2sR.%20do%20Tel%C3%A9grafo%2C%202055%20-%20Taperapu%C3%A3%2C%20Porto%20Seguro%20-%20BA%2C%2045810-000!5e0!3m2!1spt-BR!2sbr!4v1717557876557!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              className="border-0" 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 bg-white p-2 md:p-3 rounded shadow-md">
              <p className="font-medium text-xs md:text-sm">INOVAR TUR</p>
              <p className="text-[10px] md:text-xs text-gray-600">Porto Seguro - BA</p>
            </div>
          </div>
          
          <div className="mt-4 md:mt-8 grid grid-cols-3 gap-2 md:gap-4">
            <div className="bg-turquoise/10 p-2 md:p-4 rounded-lg text-center">
              <div className="font-bold text-turquoise text-xl md:text-3xl mb-0.5 md:mb-1">5min</div>
              <div className="text-xs md:text-sm text-gray-600">Centro Histórico</div>
            </div>
            <div className="bg-coral/10 p-2 md:p-4 rounded-lg text-center">
              <div className="font-bold text-coral text-xl md:text-3xl mb-0.5 md:mb-1">15min</div>
              <div className="text-xs md:text-sm text-gray-600">Aeroporto</div>
            </div>
            <div className="bg-sunny/10 p-2 md:p-4 rounded-lg text-center">
              <div className="font-bold text-sunny text-xl md:text-3xl mb-0.5 md:mb-1">30min</div>
              <div className="text-xs md:text-sm text-gray-600">Arraial d'Ajuda</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
