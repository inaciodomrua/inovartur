import React, { useState } from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { MessageCircle, CalendarIcon, Umbrella, Sun, Waves } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useIsMobile } from "@/hooks/use-mobile";
import YoutubeBackgroundVideo from "@/components/gallery/YoutubeBackgroundVideo";

const HeroSection = () => {
  const [checkInDate, setCheckInDate] = useState<Date | undefined>(undefined);
  const [checkOutDate, setCheckOutDate] = useState<Date | undefined>(undefined);
  const isMobile = useIsMobile();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppContact = () => {
    if (!checkInDate || !checkOutDate) {
      toast.error("Por favor, selecione as datas de check-in e check-out");
      return;
    }

    const formattedCheckIn = format(checkInDate, "dd/MM/yyyy", { locale: ptBR });
    const formattedCheckOut = format(checkOutDate, "dd/MM/yyyy", { locale: ptBR });
    
    const message = `Olá, vim do site.\nQuero conhecer as hospedagens de vocês para o período de ${formattedCheckIn} até ${formattedCheckOut}`;
    const encodedMessage = encodeURIComponent(message);
    
    const whatsappUrl = `https://wa.me/5561999359552?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* YouTube Background Video with darker blue overlay (using default 70% opacity) */}
      <YoutubeBackgroundVideo videoId="MRGGro0BWFU" />

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 drop-shadow-lg leading-tight">
          Conheça a melhor hospedagem de Porto Seguro
        </h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white mb-2 drop-shadow-md max-w-2xl mx-auto">
          Somos proprietários de quartos no
          <span className="font-bold"> melhor resort do Brasil</span>.
        </p>
        
        <p className="text-sm md:text-lg lg:text-xl text-sunny font-bold mb-3 drop-shadow-md">
          Portobello Park Aquático 🏨 <span className="text-white">#PORTOSEGURO</span>
        </p>
        
        <p className="text-xs md:text-sm text-white mb-6">
          Avaliado por <span className="font-bold">+500</span> hóspedes
        </p>
        
        {/* Date Picker Filter - Mobile Optimized */}
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 sm:p-4 mt-4 sm:mt-6 max-w-md mx-auto">
          <div className={`${isMobile ? 'space-y-3' : 'grid grid-cols-2 gap-4'} mb-3 sm:mb-4`}>
            {/* Check-in Date */}
            <div>
              <label className="block text-white text-xs mb-1 text-left">Check-in</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal bg-white/80 hover:bg-white text-xs sm:text-sm",
                      !checkInDate && "text-gray-500"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    {checkInDate ? (
                      format(checkInDate, "dd 'de' MMM", { locale: ptBR })
                    ) : (
                      <span>Selecionar data</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-white">
                  <Calendar
                    mode="single"
                    selected={checkInDate}
                    onSelect={setCheckInDate}
                    initialFocus
                    locale={ptBR}
                    disabled={(date) => date < new Date()}
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Check-out Date */}
            <div>
              <label className="block text-white text-xs mb-1 text-left">Check-out</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal bg-white/80 hover:bg-white text-xs sm:text-sm",
                      !checkOutDate && "text-gray-500"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    {checkOutDate ? (
                      format(checkOutDate, "dd 'de' MMM", { locale: ptBR })
                    ) : (
                      <span>Selecionar data</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-white">
                  <Calendar
                    mode="single"
                    selected={checkOutDate}
                    onSelect={setCheckOutDate}
                    initialFocus
                    locale={ptBR}
                    disabled={(date) => !checkInDate || date <= checkInDate}
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* WhatsApp Contact Button */}
          <Button 
            onClick={handleWhatsAppContact}
            className={cn(
              "w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 sm:py-3 transition-all duration-300 text-xs sm:text-sm",
              (!checkInDate || !checkOutDate) && "opacity-70 cursor-not-allowed hover:bg-green-500"
            )}
            disabled={!checkInDate || !checkOutDate}
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Fale Conosco
          </Button>
        </div>
      </div>
      
      {/* New Minimalist Beach Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-3 sm:gap-6 mb-2">
            <div className="h-px bg-gradient-to-r from-transparent via-turquoise to-transparent flex-grow max-w-20 sm:max-w-xs"></div>
            <div className="flex gap-2 sm:gap-3 items-center">
              <Sun className="text-sunny w-4 h-4 sm:w-5 sm:h-5" />
              <Umbrella className="text-coral w-5 h-5 sm:w-6 sm:h-6" />
              <Waves className="text-turquoise w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-turquoise to-transparent flex-grow max-w-20 sm:max-w-xs"></div>
          </div>
          <div className="h-4 bg-[#FFECD2]"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
