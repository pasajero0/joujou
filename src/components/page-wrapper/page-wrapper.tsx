import { Typography } from '@mui/material';
import {
  LogoWrapper,
  PageContentWrapper,
  PageFade,
  PageNavigationWrapper,
  PageWrapperRoot,
} from './page-wrapper.styles';
import { FCCType } from '@type/fc-with-children.type';
import { ColorEnum } from '@style/colors.enum';

export const PageWrapper: FCCType = ({ children }) => {
  return (
    <PageWrapperRoot>
      <PageNavigationWrapper>
        <LogoWrapper>
          <Typography variant="h5" component="h1" align="center" color={ColorEnum.WHITE}>
            joujou
          </Typography>
        </LogoWrapper>
      </PageNavigationWrapper>
      <PageFade />
      <PageContentWrapper>{children}</PageContentWrapper>
    </PageWrapperRoot>
  );
};
