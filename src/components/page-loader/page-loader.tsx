import { memo, Suspense } from 'react';

import { LoaderAnimationWrapper, PageLoaderWrapper } from './page-loader.styles';
import { FCCType } from '@type/fc-with-children.type';
import { CircularProgress } from '@mui/material';

export const ViewPageLoader = memo(() => (
  <PageLoaderWrapper>
    <LoaderAnimationWrapper>
      <CircularProgress />
    </LoaderAnimationWrapper>
  </PageLoaderWrapper>
));

export const PageLoader: FCCType = ({ children }) => <Suspense fallback={<ViewPageLoader />}>{children}</Suspense>;
