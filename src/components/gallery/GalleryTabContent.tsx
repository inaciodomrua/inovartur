
import React from 'react';
import { TabsContent } from '@/components/ui/tabs';
import GalleryItem from './GalleryItem';

interface ImageItem {
  id: number;
  src: string;
  alt: string;
  description: string;
}

interface GalleryTabContentProps {
  tabValue: string;
  images: ImageItem[];
  onImageClick: (index: number) => void;
}

const GalleryTabContent = ({ tabValue, images, onImageClick }: GalleryTabContentProps) => {
  return (
    <TabsContent value={tabValue} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <GalleryItem 
            key={image.id}
            image={image}
            index={index}
            onClick={onImageClick}
          />
        ))}
      </div>
    </TabsContent>
  );
};

export default GalleryTabContent;
