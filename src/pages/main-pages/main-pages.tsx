import { PageEnum } from '@enum/page.enum';

import { MainPagesPage } from './main-pages.page';
import { useLocation } from 'react-router';

const mainPages = new Set([PageEnum.Home, PageEnum.About]);

export const MainPages = () => {
  const { pathname } = useLocation();
  const shouldRenderMainPages = mainPages.has(pathname as unknown as PageEnum);

  return shouldRenderMainPages ? <MainPagesPage /> : null;
};
