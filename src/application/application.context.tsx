import { createContext, useState } from 'react';
import { noop } from 'lodash';

import { FCCType } from '@type/fc-with-children.type';

const initialProps = {
  user: null,
};

export const ApplicationContext = createContext({
  props: initialProps,
  setProps: noop,
});

export const ApplicationContextProvider: FCCType = ({ children }) => {
  const [props, setProps] = useState(initialProps);

  return <ApplicationContext.Provider value={{ props, setProps }}>{children}</ApplicationContext.Provider>;
};
