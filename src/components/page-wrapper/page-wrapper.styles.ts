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

export const LogoWrapper = styled.div`
  width: 80px;
  height: ${LOGO_HEIGHT}px;
  margin-right: 8px;
`;

export const PageNavigationWrapper = styled.nav`
  background-color: ${ColorEnum.BLUE};
  border-radius: 0 0 8px 8px;
  overflow: hidden;
`;

export const PageNavigation = styled.nav`
  display: flex;
  padding: 16px 32px;
  max-width: 1094px;
  width: 100%;
  margin: 0 auto;
`;
