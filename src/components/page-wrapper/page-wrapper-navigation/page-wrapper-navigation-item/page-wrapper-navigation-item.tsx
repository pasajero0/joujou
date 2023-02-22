import { PageMenuListItemInterface } from '@page/main-pages/main-pages.options';
import { useNavigationItem } from './page-wrapper-navigation-item.hook';
import { NavigationItem, NavigationItemWrapper } from './page-wrapper-navigation-item.styles';
import { ButtonTransparent } from '@atom/button/button-transparent';
import { Typography } from '@mui/material';

export const PageWrapperNavigationItem = ({ title, pageName }: PageMenuListItemInterface) => {
  const [isNavigationItemActive, onNavItemClick] = useNavigationItem(pageName);

  return (
    <NavigationItem>
      <ButtonTransparent onClick={onNavItemClick}>
        <NavigationItemWrapper isActive={isNavigationItemActive}>
          <Typography component="span">{title}</Typography>
        </NavigationItemWrapper>
      </ButtonTransparent>
    </NavigationItem>
  );
};
