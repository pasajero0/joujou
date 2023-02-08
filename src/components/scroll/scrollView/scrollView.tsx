import { HTMLAttributes } from 'react';

import { ScrollView } from './scrollView.styles';

export const scrollView = () => (props: HTMLAttributes<HTMLDivElement>) => <ScrollView {...props} />;
