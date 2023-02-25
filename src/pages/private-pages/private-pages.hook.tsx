import { useNavigate } from 'react-router';
import { useContext, useEffect } from 'react';

import { PageEnum } from '@enum/page.enum';

import { ApplicationContext } from '@application/application.context';

export const usePrivatePage = () => {
  const navigate = useNavigate();
  const {
    props: { user },
  } = useContext(ApplicationContext);

  const isLoggedIn = user !== null;

  useEffect(() => {
    if (!isLoggedIn) {
      navigate(PageEnum.Login);
    }
  }, [user]);
};
