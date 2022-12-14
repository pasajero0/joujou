import { memo } from 'react';

import { Button, Typography } from '@mui/material';

import { MainWrapperView, MainWrapperBlock } from './page-root.styles';

export const PageRoot = memo(() => (
  <MainWrapperView>
    <Typography variant="h5" component="h1" align="center">
      joujou
    </Typography>
    <MainWrapperBlock>
      <Button variant="outlined">Hello World</Button>
    </MainWrapperBlock>
  </MainWrapperView>
));
