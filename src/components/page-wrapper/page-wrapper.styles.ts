import { Toolbar } from '@mui/material';
import { ColorEnum } from '@style/colors.enum';
import styled from 'styled-components';

const LOGO_HEIGHT = 32;

export const PageWrapperRoot = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const PageContentWrapper = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const PageNavigationWrapper = styled(Toolbar)`
  max-width: 1094px;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`;
