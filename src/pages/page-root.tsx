import { memo } from 'react';

import { Typography } from '@mui/material';

import { MainWrapperView, MainWrapperBlock } from './page-root.styles';
import HomePage from './main-pages/home/home';

export const PageRoot = memo(() => (
  <MainWrapperView>
    <Typography variant="h4" component="h1" align="center">
      joujou
    </Typography>
    <MainWrapperBlock>
      <HomePage />
    </MainWrapperBlock>
  </MainWrapperView>
));
