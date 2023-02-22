import { PageEnum } from '@enum/page.enum';

import { MainPagesPage } from './main-pages.page';

const mainPages = new Set([PageEnum.Home, PageEnum.About]);

export const MainPages = () => {
  const name = PageEnum.About; // TODO create hook useCurrentNavigation

  return mainPages.has(name) ? <MainPagesPage name={name} /> : null;
};
