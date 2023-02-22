import { PageEnum } from '@enum/page.enum';

export interface PageMenuListItemInterface {
  title: string;
  pageName?: PageEnum;
}

export const PageMenuList: PageMenuListItemInterface[] = [
  {
    title: 'Home',
    pageName: PageEnum.Home,
  },
  {
    title: 'About',
    pageName: PageEnum.About,
  },
];
