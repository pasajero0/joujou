/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { GalleryWrapper } from './gallery.style';

interface GalleryProps {
  images: any[];
}

export const Gallery = ({ images }: GalleryProps) => (
  <GalleryWrapper>
    {images?.map(({ id, download_url }) => (
      <img key={id} src={download_url} alt="..." loading="lazy" width={100} />
    ))}
  </GalleryWrapper>
);
