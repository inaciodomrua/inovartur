
import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { useInView } from 'react-intersection-observer';
import ReviewCard from './ReviewCard';
import { useIsMobile } from '@/hooks/use-mobile';
import { reviewsData } from './reviews-data';

const ReviewsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    slidesToScroll: 1
  });
  const [autoPlayInterval, setAutoPlayInterval] = useState<NodeJS.Timeout | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  
  const isMobile = useIsMobile();

  // Auto-scroll functionality
  useEffect(() => {
    if (emblaApi && inView && !isPaused) {
      // Clear any existing interval
      if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
      }
      
      // Set new interval
      const interval = setInterval(() => {
        emblaApi.scrollNext();
      }, 5000); // Scroll every 5 seconds
      
      setAutoPlayInterval(interval);
      
      // Cleanup on unmount
      return () => {
        if (interval) {
          clearInterval(interval);
        }
      };
    }
  }, [emblaApi, inView, isPaused]);

  // Pause auto-scroll on mouse interaction
  const handleMouseEnter = () => {
    setIsPaused(true);
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
      setAutoPlayInterval(null);
    }
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className="relative mb-12 md:mb-20 fade-in-section" ref={ref}>
      <div className="flex items-center justify-center mb-4 md:mb-6">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/e47a9fc3-24d7-4786-9aa0-dc4ebd772182.png" 
            alt="Google Reviews" 
            className="h-6 md:h-8 mr-2"
          />
          <span className="text-base md:text-lg font-medium">Avaliações no Google</span>
        </div>
      </div>

      <div 
        className="overflow-hidden" 
        ref={emblaRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex">
          {reviewsData.map((review, index) => (
            <div 
              key={index} 
              className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_80%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-2 md:pl-4"
            >
              <ReviewCard {...review} />
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center mt-4 md:mt-6">
        <button 
          onClick={() => emblaApi?.scrollPrev()} 
          className="relative h-7 w-7 md:h-8 md:w-8 rounded-full bg-white border border-gray-200 flex items-center justify-center mx-1 md:mx-2"
          aria-label="Previous slide"
        >
          <svg className="h-3 w-3 md:h-4 md:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={() => emblaApi?.scrollNext()} 
          className="relative h-7 w-7 md:h-8 md:w-8 rounded-full bg-white border border-gray-200 flex items-center justify-center mx-1 md:mx-2"
          aria-label="Next slide"
        >
          <svg className="h-3 w-3 md:h-4 md:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ReviewsCarousel;
