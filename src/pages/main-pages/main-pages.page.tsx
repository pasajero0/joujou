import { memo, lazy } from 'react';

import { PageEnum } from '@enum/page.enum';
import { PageWrapper } from '@component/page-wrapper/page-wrapper';
import { PageMenuList } from './main-pages.options';

const HomePage = lazy(() => import('./home/home'));
const AboutPage = lazy(() => import('./about/about'));

interface MainPagesPageProps {
  name: PageEnum;
}

// TODO create PageLoader
export const MainPagesPage = memo(({ name }: MainPagesPageProps) => (
  <PageWrapper pageMenuList={PageMenuList}>
    {/* <PageLoader> */}
    {name === PageEnum.Home && <HomePage />}
    {name === PageEnum.About && <AboutPage />}
    {/* </PageLoader> */}
  </PageWrapper>
));
