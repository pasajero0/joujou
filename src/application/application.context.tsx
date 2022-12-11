import { createContext, useState } from 'react';
import { noop } from 'lodash';

import { FCC } from '../types/fc-with-children.type'; // TODO fix ../
import { CurrenciesEnum } from '../enums/currencies.enum'; // TODO fix ../

const initialProps = {
    currency: CurrenciesEnum.EUR,
};

export const ApplicationContext = createContext({
    props: initialProps,
    setProps: noop,
});

export const ApplicationContextProvider: FCC = ({ children }) => {
    const [props, setProps] = useState(initialProps);

    return <ApplicationContext.Provider value={{ props, setProps }}>{children}</ApplicationContext.Provider>;
};
