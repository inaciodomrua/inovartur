
import React from 'react';

interface YoutubeBackgroundVideoProps {
  videoId: string;
  overlayColor?: string;
}

const YoutubeBackgroundVideo = ({ 
  videoId, 
  overlayColor = "bg-turquoise/70" 
}: YoutubeBackgroundVideoProps) => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      {/* Video Overlay with specified color */}
      <div className={`absolute inset-0 z-10 ${overlayColor}`} style={{ backgroundColor: 'rgba(10, 160, 180, 0.7)' }}></div>
      
      {/* YouTube iframe with parameters for autoplay, mute, loop, no controls */}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&playlist=${videoId}&disablekb=1&modestbranding=1`}
        title="Background Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        className="absolute w-[300%] md:w-[150%] h-[300%] md:h-[150%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ opacity: 0.85 }}
      ></iframe>
      
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
