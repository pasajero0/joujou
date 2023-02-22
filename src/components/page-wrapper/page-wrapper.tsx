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
import { PageWrapperNavigation } from './page-wrapper-navigation/page-wrapper-navigation';
import { PageMenuListItemInterface } from '@page/main-pages/main-pages.options';

interface PageWrapperInterface {
  pageMenuList?: PageMenuListItemInterface[];
}

export const PageWrapper: FCCType<PageWrapperInterface> = ({ pageMenuList = [], children }) => {
  return (
    <PageWrapperRoot>
      <PageNavigationWrapper>
        <LogoWrapper>
          <Typography variant="h5" component="h1" align="center" color={ColorEnum.WHITE}>
            joujou
          </Typography>
        </LogoWrapper>
        <PageWrapperNavigation pageMenuList={pageMenuList} />
      </PageNavigationWrapper>
      <PageFade />
      <PageContentWrapper>{children}</PageContentWrapper>
    </PageWrapperRoot>
  );
};
