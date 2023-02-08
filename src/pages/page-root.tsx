import { memo } from 'react';

import { MainWrapperView } from './page-root.styles';
import HomePage from './main-pages/home/home';

export const PageRoot = memo(() => (
  <MainWrapperView>
    <HomePage />
  </MainWrapperView>
));
