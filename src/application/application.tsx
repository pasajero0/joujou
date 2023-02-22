import { memo } from 'react';

import { PageRoot } from '@page/page-root';

import { ApplicationContextProvider } from './application.context';
import { RootWrapper } from './application.styles';
import { ThemeProvider } from '@mui/material';
import { MAIN_THEME } from '@style/theme';
import { BrowserRouter } from 'react-router-dom';

const MainApplication = memo(() => (
  <>
    <RootWrapper>
      <PageRoot />
    </RootWrapper>
  </>
));

export const Application = () => (
  <ApplicationContextProvider>
    <ThemeProvider theme={MAIN_THEME}>
      <BrowserRouter>
        <MainApplication />
      </BrowserRouter>
    </ThemeProvider>
  </ApplicationContextProvider>
);
