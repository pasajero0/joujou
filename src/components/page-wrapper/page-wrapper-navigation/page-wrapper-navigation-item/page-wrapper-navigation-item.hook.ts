import { OnEventEmptyType } from '@type/on-event.type';
import { useCallback } from 'react';

export const useNavigationItem = (pageName?: string): [boolean, OnEventEmptyType] => {
  // const { navigate } = useRouter(); // TODO add router useRouter
  // const { name } = useCurrentNavigation(); // TODO create hook useCurrentNavigation

  const handleMenuClick = useCallback(() => {
    console.log('item clicked', pageName);
    // navigate(pageName);
  }, [pageName]);

  // const isActive = name === pageName;
  const isActive = false;

  return [isActive, handleMenuClick];
};
