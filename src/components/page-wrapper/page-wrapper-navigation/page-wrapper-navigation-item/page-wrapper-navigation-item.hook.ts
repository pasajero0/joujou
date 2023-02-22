import { OnEventEmptyType } from '@type/on-event.type';
import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router';

export const useNavigationItem = (pageName?: string): [boolean, OnEventEmptyType] => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleMenuClick = useCallback(() => {
    if (pageName === undefined) return;

    navigate(pageName);
  }, [pageName]);

  const isActive = pathname === pageName;

  return [isActive, handleMenuClick];
};
