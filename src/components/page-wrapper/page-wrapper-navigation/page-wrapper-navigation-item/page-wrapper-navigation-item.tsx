import { PageMenuListItemInterface } from '@page/main-pages/main-pages.options';
import { useNavigationItem } from './page-wrapper-navigation-item.hook';
import { NavigationItem } from './page-wrapper-navigation-item.styles';
import { Button, Typography } from '@mui/material';
import { ColorEnum } from '@style/colors.enum';

export const PageWrapperNavigationItem = ({ title, pageName }: PageMenuListItemInterface) => {
  const [isNavigationItemActive, onNavItemClick] = useNavigationItem(pageName);

  return (
    <NavigationItem isActive={isNavigationItemActive}>
      <Button variant="text" size="small" onClick={onNavItemClick}>
        <Typography component="span" color={ColorEnum.WHITE}>
          {title}
        </Typography>
      </Button>
    </NavigationItem>
  );
};
