
import React, { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface YoutubeBackgroundVideoProps {
  videoId: string;
  overlayColor?: string;
  mobileFallbackImage?: string;
}

const YoutubeBackgroundVideo = ({ 
  videoId, 
  overlayColor = "bg-deepblue/70",
  mobileFallbackImage
}: YoutubeBackgroundVideoProps) => {
  const isMobile = useIsMobile();
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldUseImage, setShouldUseImage] = useState(false);
  
  // Check if we should use a fallback image based on connection speed
  useEffect(() => {
    // Set loaded state for fade-in effect
    const timer = setTimeout(() => setIsLoaded(true), 300);
    
    // Check connection speed to decide if we should use video on mobile
    if (isMobile && navigator.connection) {
      const connection = navigator.connection as any;
      if (connection.downlink < 1.5 || connection.saveData) {
        setShouldUseImage(true);
      }
    }
    
    return () => clearTimeout(timer);
  }, [isMobile]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      {/* Video Overlay with specified color */}
      <div 
        className={`absolute inset-0 z-10 ${overlayColor} transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} 
        style={{ backgroundColor: 'rgba(5, 79, 119, 0.7)' }}
      />
      
      {/* Fallback Image for mobile with slow connection (if provided) */}
      {isMobile && shouldUseImage && mobileFallbackImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center z-5 transition-opacity duration-700"
          style={{ 
            backgroundImage: `url(${mobileFallbackImage})`,
            opacity: isLoaded ? 1 : 0
          }}
        />
      )}
      
      {/* YouTube iframe with parameters for autoplay, mute, loop, no controls */}
      {(!isMobile || !shouldUseImage) && (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&playlist=${videoId}&disablekb=1&modestbranding=1&playsinline=1${isMobile ? '&vq=medium' : ''}`}
          title="Background Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className={`absolute w-full h-auto md:w-auto md:h-full min-w-full min-h-full transition-opacity duration-700 object-cover top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none ${isLoaded ? 'opacity-85' : 'opacity-0'}`}
          loading="eager"
          style={{ 
            opacity: 0.85,
            aspectRatio: isMobile ? '16/9' : 'auto'
          }}
        />
      )}
      
      {/* Additional overlay to hide YouTube elements */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {/* Top overlay to hide YouTube title */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/30 to-transparent"></div>
        
        {/* Bottom overlay to hide YouTube controls */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent"></div>
        
        {/* Right overlay to hide YouTube logo */}
        <div className="absolute top-0 right-0 w-24 h-12 bg-black/20 backdrop-blur-sm"></div>
      </div>
    </div>
  );
};

export default YoutubeBackgroundVideo;
