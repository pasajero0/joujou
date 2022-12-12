import { createContext, useState } from 'react';
import { noop } from 'lodash';

import { FCCType } from '@type/fc-with-children.type';
import { CurrenciesEnum } from '@enum/currencies.enum';

const initialProps = {
  currency: CurrenciesEnum.EUR,
};

export const ApplicationContext = createContext({
  props: initialProps,
  setProps: noop,
});

export const ApplicationContextProvider: FCCType = ({ children }) => {
  const [props, setProps] = useState(initialProps);

  return <ApplicationContext.Provider value={{ props, setProps }}>{children}</ApplicationContext.Provider>;
};
