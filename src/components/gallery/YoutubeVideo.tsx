
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface YoutubeVideoProps {
  videoId: string;
  title?: string;
}

const YoutubeVideo = ({ videoId, title = 'YouTube video player' }: YoutubeVideoProps) => {
  return (
    <div className="youtube-container relative w-full max-w-5xl mx-auto my-8 rounded-xl overflow-hidden shadow-xl">
      <AspectRatio ratio={16 / 9}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&controls=0&showinfo=0&color=white&iv_load_policy=3`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        ></iframe>
        
        {/* Custom overlay for play button and hiding YouTube branding */}
        <div className="youtube-custom-overlay absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
      </AspectRatio>
    </div>
  );
};

export default YoutubeVideo;
