
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GalleryHeader from '@/components/gallery/GalleryHeader';
import GalleryTabContent from '@/components/gallery/GalleryTabContent';
import ImageCarouselDialog from '@/components/gallery/ImageCarouselDialog';
import YoutubeVideo from '@/components/gallery/YoutubeVideo';
import { galleryData } from '@/components/gallery/galleryData';

const Gallery = () => {
  const [selectedTab, setSelectedTab] = useState('portoBello');
  const [openDialog, setOpenDialog] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to get current gallery based on selected tab
  const getCurrentGallery = () => {
    return galleryData[selectedTab] || [];
  };
  
  // Function to handle image click and open dialog
  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setOpenDialog(true);
  };

  return (
    <>
      <Navbar />
      
      <GalleryHeader />
      
      <div className="container mx-auto px-4 py-12 md:py-16 min-h-screen">
        {/* YouTube Video Section */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Conheça Nosso Resort em Vídeo</h2>
          <YoutubeVideo videoId="MRGGro0BWFU" title="Tour pelo PortoBello Park" />
        </div>
        
        <Tabs defaultValue="portoBello" className="w-full" onValueChange={setSelectedTab}>
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="portoBello" className="text-sm md:text-base">PortoBello Park</TabsTrigger>
            <TabsTrigger value="quarto139" className="text-sm md:text-base">Quarto 139</TabsTrigger>
            <TabsTrigger value="quarto124" className="text-sm md:text-base">Quarto 124</TabsTrigger>
          </TabsList>
          
          <GalleryTabContent 
            tabValue="portoBello" 
            images={galleryData.portoBello}
            onImageClick={handleImageClick}
          />
          
          <GalleryTabContent 
            tabValue="quarto139" 
            images={galleryData.quarto139}
            onImageClick={handleImageClick}
          />
          
          <GalleryTabContent 
            tabValue="quarto124" 
            images={galleryData.quarto124}
            onImageClick={handleImageClick}
          />
        </Tabs>
      </div>
      
      <ImageCarouselDialog 
        open={openDialog}
        onOpenChange={setOpenDialog}
        images={getCurrentGallery()}
        startIndex={currentImageIndex}
      />
      
      <Footer />
    </>
  );
};

export default Gallery;
