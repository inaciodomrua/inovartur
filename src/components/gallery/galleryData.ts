
import { GalleryDataType } from './types';
import { portoBelloGallery } from './portoBelloGallery';
import { quarto139Gallery } from './quarto139Gallery';
import { quarto124Gallery } from './quarto124Gallery';

export * from './types';
export * from './portoBelloGallery';
export * from './quarto139Gallery';
export * from './quarto124Gallery';

export const galleryData: GalleryDataType = {
  portoBello: portoBelloGallery,
  quarto139: quarto139Gallery,
  quarto124: quarto124Gallery
};
