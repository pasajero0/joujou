import { memo } from 'react';

import { AuthPages } from './auth-pages/auth-pages';
import { MainPages } from './main-pages/main-pages';

export const PageRoot = memo(() => (
  <>
    <AuthPages />
    <MainPages />
  </>
));
