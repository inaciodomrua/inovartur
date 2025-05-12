
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface ImageItem {
  id: number;
  src: string;
  alt: string;
  description: string;
}

interface GalleryItemProps {
  image: ImageItem;
  onClick: (index: number) => void;
  index: number;
}

const GalleryItem = ({ image, onClick, index }: GalleryItemProps) => {
  return (
    <Card 
      className="overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl"
      onClick={() => onClick(index)}
    >
      <CardContent className="p-0">
        <div className="relative">
          <AspectRatio ratio={4/3}>
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
            />
          </AspectRatio>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
            <h3 className="font-medium text-sm">{image.alt}</h3>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GalleryItem;
