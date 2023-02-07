import { GalleryWrapper } from './gallery.style';
import { GalleryProps } from './gallery.type';
import { Picture } from './gallery-picture';

const COLUMNS = 3;

export const Gallery = ({ images, cols = COLUMNS, gap = COLUMNS * 2, variant = 'masonry' }: GalleryProps) => (
  <GalleryWrapper cols={cols} gap={gap} variant={variant}>
    {images?.map(Picture)}
  </GalleryWrapper>
);
