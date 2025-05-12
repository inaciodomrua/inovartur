
export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  description: string;
}

export interface GalleryDataType {
  [key: string]: GalleryImage[];
}
