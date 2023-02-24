import { Gallery } from '@component/gallery/gallery';
import { useLayoutEffect, useState } from 'react';
import { ImageInterface } from '@component/gallery/gallery.type';
import { Scroll } from '@component/scroll/scroll';
import { PageBlock, PageContainerWrapper } from '@page/main-pages/common.styles';

const URL = 'https://picsum.photos/v2/list?page=2&limit=50';

const getData = async () => {
  // TODO change
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

  useLayoutEffect(() => {
    void getData().then(data => setImages(data));
  }, []);

  return (
    <Scroll>
      <PageContainerWrapper>
        <PageBlock>
          <Gallery images={images} />
        </PageBlock>
      </PageContainerWrapper>
    </Scroll>
  );
};

export default HomePage;
