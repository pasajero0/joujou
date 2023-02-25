import { lazy, memo } from 'react';
import { Route, Routes } from 'react-router';

import { PageEnum } from '@enum/page.enum';
import { PageLoader } from '@component/page-loader/page-loader';

import { usePrivatePage } from './private-pages.hook';

const ProfilePage = lazy(() => import('./profile/profile.page'));

export const PrivatePagesPage = memo(() => {
  usePrivatePage();

  return (
    <PageLoader>
      <Routes>
        <Route path={PageEnum.Profile} element={<ProfilePage />} />
      </Routes>
    </PageLoader>
  );
});
