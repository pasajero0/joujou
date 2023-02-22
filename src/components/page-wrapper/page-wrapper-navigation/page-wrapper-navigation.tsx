import { PageMenuListItemInterface } from '@page/main-pages/main-pages.options';
import { PageWrapperNavigationItem } from './page-wrapper-navigation-item/page-wrapper-navigation-item';
import { NavigationList } from './page-wrapper-navigation.styles';

export interface PageWrapperNavigationProps {
  pageMenuList: PageMenuListItemInterface[];
}

const renderDashboardWrapperItem = (option: PageMenuListItemInterface) => (
  <PageWrapperNavigationItem {...option} key={option.pageName ?? option.title} />
);

export const PageWrapperNavigation = ({ pageMenuList }: PageWrapperNavigationProps) => (
  <NavigationList>{pageMenuList.map(renderDashboardWrapperItem)}</NavigationList>
);
