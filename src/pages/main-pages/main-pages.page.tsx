import { memo, lazy } from 'react';
import { Routes, Route } from 'react-router';

import { PageEnum } from '@enum/page.enum';
import { PageWrapper } from '@component/page-wrapper/page-wrapper';
import { PageLoader } from '@component/page-loader/page-loader';

import { PageMenuList } from './main-pages.options';

const HomePage = lazy(() => import('./home/home'));
const AboutPage = lazy(() => import('./about/about'));
const BoardPage = lazy(() => import('./board/board'));

export const MainPagesPage = memo(() => (
  <PageWrapper pageMenuList={PageMenuList}>
    <PageLoader>
      <Routes>
        <Route path={PageEnum.Home} element={<HomePage />} />
        <Route path={PageEnum.About} element={<AboutPage />} />
        <Route path={PageEnum.Board} element={<BoardPage />} />
      </Routes>
    </PageLoader>
  </PageWrapper>
));
