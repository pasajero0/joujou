/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/naming-convention */

import { ImageListItem, ImageListItemBar } from '@mui/material';
import { ImageInterface } from './gallery.type';

const ID = 'id';

const getPictureSrc = (url: string, id: string, size = 100, hasBlur = false) => {
  const [mainUrl] = url.split(ID) ?? [];
  const blur = hasBlur ? '?blur' : '';

  return `${mainUrl}${ID}/${id}/${size}${blur}` ?? '';
};

export const Picture = ({ id, url, author, download_url: downloadUrl }: ImageInterface) => {
  const src = getPictureSrc(downloadUrl, id, 300, true);

  return (
    <ImageListItem key={id}>
      <img src={src} alt={url} loading="lazy" />
      <ImageListItemBar position="bottom" title={author} />
    </ImageListItem>
  );
};
