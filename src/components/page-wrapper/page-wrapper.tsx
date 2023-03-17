import { AppBar } from '@mui/material';
import { PageContentWrapper, PageNavigationWrapper, PageWrapperRoot } from './page-wrapper.styles';
import { FCCType } from '@type/fc-with-children.type';
import { PageWrapperNavigation } from './page-wrapper-navigation/page-wrapper-navigation';
import { PageMenuListItemInterface } from '@page/main-pages/main-pages.options';
import { PageWrapperProfile } from './page-wrapper-profile/page-wrapper-profile';
import { Logo } from '@atom/logo/logo';

interface PageWrapperInterface {
  pageMenuList?: PageMenuListItemInterface[];
}

export const PageWrapper: FCCType<PageWrapperInterface> = ({ pageMenuList = [], children }) => (
  <PageWrapperRoot>
    <AppBar position="static">
      <PageNavigationWrapper variant="dense">
        <Logo />
        <PageWrapperNavigation pageMenuList={pageMenuList} />
        <PageWrapperProfile />
      </PageNavigationWrapper>
    </AppBar>
    <PageContentWrapper>{children}</PageContentWrapper>
  </PageWrapperRoot>
);
