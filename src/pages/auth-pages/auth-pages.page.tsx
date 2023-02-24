import { lazy, memo } from 'react';

import { PageEnum } from '@enum/page.enum';
import { PageLoader } from '@component/page-loader/page-loader';
import { Route, Routes } from 'react-router';

const LoginPage = lazy(() => import('./login/login.page'));

export const AuthPagesPage = memo(() => (
  <PageLoader>
    <Routes>
      <Route path={PageEnum.Login} element={<LoginPage />} />
    </Routes>
  </PageLoader>
));
