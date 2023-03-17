import { useLocation } from 'react-router';

import { PageEnum } from '@enum/page.enum';

import { AuthPagesPage } from './auth-pages.page';

const authPages = new Set([PageEnum.Login, PageEnum.Signup]);

export const AuthPages = () => {
  const { pathname } = useLocation();
  const shouldRenderAuthPages = authPages.has(pathname as unknown as PageEnum);

  return shouldRenderAuthPages ? <AuthPagesPage /> : null;
};
