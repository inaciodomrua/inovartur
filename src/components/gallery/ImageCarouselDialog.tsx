
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem
} from "@/components/ui/carousel";
import { ArrowLeft, ArrowRight, X } from 'lucide-react';

interface ImageItem {
  id: number;
  src: string;
  alt: string;
  description: string;
}

interface ImageCarouselDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  images: ImageItem[];
  startIndex: number;
}

const ImageCarouselDialog = ({ 
  open, 
  onOpenChange, 
  images, 
  startIndex 
}: ImageCarouselDialogProps) => {
  const [carouselApi, setCarouselApi] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  // Set initial slide when dialog opens
  useEffect(() => {
    if (carouselApi && open) {
      setTimeout(() => {
        carouselApi.scrollTo(startIndex);
        setCurrentIndex(startIndex);
      }, 50);
    }
  }, [carouselApi, open, startIndex]);

  // Listen for slide changes
  useEffect(() => {
    if (!carouselApi) return;

    const onSelect = () => {
      setCurrentIndex(carouselApi.selectedScrollSnap());
    };

    carouselApi.on("select", onSelect);
    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi]);

  // Function to handle next slide
  const handleNext = () => {
    if (carouselApi) {
      carouselApi.scrollNext();
    }
  };

  // Function to handle previous slide
  const handlePrev = () => {
    if (carouselApi) {
      carouselApi.scrollPrev();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl w-[95vw] p-0 overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg">
        <button 
          onClick={() => onOpenChange(false)} 
          className="absolute right-4 top-4 z-50 rounded-full bg-black/20 p-2 text-white hover:bg-black/40 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
        
        <Carousel className="w-full" setApi={setCarouselApi}>
          <CarouselContent>
            {images.map((image) => (
              <CarouselItem key={image.id}>
                <div className="flex justify-center items-center h-[80vh] px-6 py-10">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 flex justify-between items-center pointer-events-none">
            <button 
              onClick={handlePrev}
              className="p-2 rounded-full bg-white/10 hover:bg-white/30 text-white transition-colors pointer-events-auto"
              aria-label="Previous image"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={handleNext}
              className="p-2 rounded-full bg-white/10 hover:bg-white/30 text-white transition-colors pointer-events-auto"
              aria-label="Next image"
            >
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>
          
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <p className="text-sm text-white/70">
              {currentIndex + 1} / {images.length}
            </p>
          </div>
        </Carousel>
      </DialogContent>
    </Dialog>
  );
};

export default ImageCarouselDialog;
