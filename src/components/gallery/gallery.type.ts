/* eslint-disable @typescript-eslint/naming-convention */
import type { ImageListProps } from '@mui/material';

export interface ImageInterface {
  author: string;
  download_url: string;
  height: number;
  id: string;
  url: string;
  width: number;
}

export interface GalleryProps extends Omit<ImageListProps, 'children'> {
  images: ImageInterface[];
}
