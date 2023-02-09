import { ColorEnum } from '@style/colors.enum';
import styled from 'styled-components';

const PAGE_NAV_PADDING = 16;
const FADE_HIGHT = 24;
const LOGO_HEIGHT = 32;

export const PageWrapperRoot = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const PageContentWrapper = styled.div`
  width: 100%;
  flex: 1;
  padding-top: 4px;
  display: flex;
  flex-direction: column;
`;

export const PageFade = styled.div`
  position: absolute;
  top: ${LOGO_HEIGHT + PAGE_NAV_PADDING * 2}px;
  width: 100%;
  height: ${FADE_HIGHT}px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 10%,
    rgba(255, 255, 255, 0.5) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  z-index: 1;
`;

export const LogoWrapper = styled.div`
  width: 80px;
  height: ${LOGO_HEIGHT}px;
  margin-right: 8px;
`;

export const PageNavigationWrapper = styled.nav`
  position: relative;
  padding: ${PAGE_NAV_PADDING}px;
  background-color: ${ColorEnum.BLUE};
  border-radius: 0 0 8px 8px;
  overflow: hidden;
  display: flex;
`;
