import { memo } from 'react';

import { ApplicationContextProvider } from './application.context';
import { RootWrapper } from './application.styles';

const MainApplication = memo(() =>  (
  <>
    <RootWrapper>
      <h1>salut joujou</h1>
    </RootWrapper>
  </>
));

export const Application = () => (
  <ApplicationContextProvider>
    <MainApplication />
  </ApplicationContextProvider>
);
