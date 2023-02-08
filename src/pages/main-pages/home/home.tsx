import { Gallery } from '@component/gallery/gallery';
import { HomeWrapper } from './home.styles';
import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { ImageInterface } from '@component/gallery/gallery.type';
import { Scroll } from '@component/scroll/scroll';

const URL = 'https://picsum.photos/v2/list?page=2&limit=50';

const getData = async () => {
  try {
    const response = await fetch(URL);
    return (await (response.json() as unknown)) as ImageInterface[];
  } catch (error) {
    console.error(error);
    return [];
  }
};

const HomePage = () => {
  const [images, setImages] = useState<ImageInterface[]>([]);

  useEffect(() => {
    void getData().then(data => setImages(data));
  }, []);

  return (
    <>
      <Typography variant="h4" component="h1" align="center">
        joujou
      </Typography>
      <HomeWrapper>
        <Scroll>
          <Gallery images={images} />
        </Scroll>
      </HomeWrapper>
    </>
  );
};

export default HomePage;
