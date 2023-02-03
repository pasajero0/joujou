import { Gallery } from '@component/gallery/gallery';
import { HomeWrapper } from './home.styles';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';

const URL = 'https://picsum.photos/v2/list?page=2&limit=50';

const getData = async () => {
  try {
    const response = await fetch(URL);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

const HomePage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    void getData().then(data => setImages(data));
  }, []);

  return (
    <HomeWrapper>
      <Gallery images={images} />
      <Button variant="outlined">CLICK ME</Button>
    </HomeWrapper>
  );
};

export default HomePage;
