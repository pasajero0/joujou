import { memo } from 'react';

import { AuthPages } from './auth-pages/auth-pages';
import { MainPages } from './main-pages/main-pages';
import { PrivatePages } from './private-pages/private-pages';

export const PageRoot = memo(() => (
  <>
    <AuthPages />
    <MainPages />
    <PrivatePages />
  </>
));
