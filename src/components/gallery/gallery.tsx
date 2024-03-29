import { GalleryProps } from './gallery.type';
import { Picture } from './gallery-picture';
import { ImageList } from '@mui/material';

const COLUMNS = 3;

export const Gallery = ({ images, cols = COLUMNS, gap = COLUMNS * 2, ...rest }: GalleryProps) => (
  <ImageList cols={cols} gap={gap} {...rest}>
    {images?.map(Picture)}
  </ImageList>
);
