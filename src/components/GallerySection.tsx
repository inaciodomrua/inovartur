
import React, { useState } from 'react';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { useIsMobile } from '@/hooks/use-mobile';
import { Link } from 'react-router-dom';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const isMobile = useIsMobile();

  const images = [
    {
      src: "/lovable-uploads/27676c57-ba01-403d-a8ca-ade082ea1c34.png",
      alt: "Acomodação com três camas",
      category: "Acomodações"
    },
    {
      src: "/lovable-uploads/eac840f6-78d3-4ad0-abed-e0cdb98c7ece.png",
      alt: "Piscina com toboáguas",
      category: "Piscinas"
    },
    {
      src: "/lovable-uploads/aa5ca0bf-5707-4dcf-a511-ae6245f16359.png",
      alt: "Área de piscina com bar",
      category: "Lazer"
    },
    {
      src: "/lovable-uploads/f7ad72d9-7644-4344-b645-d2ffe78aa4d8.png",
      alt: "Parque aquático infantil",
      category: "Aquaparque"
    },
    {
      src: "/lovable-uploads/56dd7583-9317-4f3e-9f35-f51790766fdc.png",
      alt: "Área de jogos",
      category: "Entretenimento"
    },
    {
      src: "/lovable-uploads/c4c382e4-6fa6-480d-91fc-8f561654ae7b.png",
      alt: "Vista aérea do resort",
      category: "Resort"
    }
  ];
  
  const handleWhatsAppContact = () => {
    const whatsappUrl = "https://wa.me/556181815737?text=Ol%C3%A1,%20vim%20do%20site.%0AQuero%20conhecer%20as%20hospedagens%20de%20voc%C3%AAs";
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="gallery" className="bg-gray-50 py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`section-title text-3xl md:text-5xl lg:text-6xl ${isMobile ? 'mx-auto text-center' : ''} mb-8 md:mb-16`}>Conheça o PortoBello Park</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Link 
                  to="/gallery" 
                  className="group cursor-pointer overflow-hidden rounded-xl shadow-lg relative fade-in-section h-60 md:h-80 block"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 md:p-6">
                    <span className="text-xs md:text-sm font-medium text-coral bg-white/80 px-2 py-0.5 md:px-3 md:py-1 rounded-full inline-block mb-1 md:mb-2 w-fit">
                      {image.category}
                    </span>
                    <h3 className="text-base md:text-xl font-bold text-white">Clique e veja mais fotos</h3>
                  </div>
                </Link>
              </DialogTrigger>
              <DialogContent className="max-w-3xl md:max-w-4xl w-[95vw] md:w-full">
                <DialogHeader>
                  <DialogTitle className="text-lg md:text-xl">{image.alt}</DialogTitle>
                  <DialogDescription className="text-sm">{image.category} - INOVAR TUR</DialogDescription>
                </DialogHeader>
                <div className="mt-2 md:mt-4">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full rounded-lg"
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        <div className="mt-8 md:mt-16 text-center">
          <Link 
            to="/gallery" 
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-full transition-colors duration-300"
          >
            Veja todas as fotos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
