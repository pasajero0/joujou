import { useLocation } from 'react-router';

import { PageEnum } from '@enum/page.enum';

import { PrivatePagesPage } from './private-pages.page';

const privatePages = new Set([PageEnum.Profile]);

export const PrivatePages = () => {
  const { pathname } = useLocation();

  const shouldRenderPrivatePages = privatePages.has(pathname as unknown as PageEnum);

  return shouldRenderPrivatePages ? <PrivatePagesPage /> : null;
};
