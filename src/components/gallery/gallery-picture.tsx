import { ImageListItem, ImageListItemBar } from '@mui/material';
import { ImageInterface } from './gallery.type';
import { getPictureSrc } from './gallery.helpers';

export const Picture = ({ id, url, author, download_url: downloadUrl }: ImageInterface) => {
  const src = getPictureSrc(downloadUrl, id, 300, true);

  return (
    <ImageListItem key={id}>
      <img src={src} alt={url} loading="lazy" />
      <ImageListItemBar position="bottom" title={author} />
    </ImageListItem>
  );
};
