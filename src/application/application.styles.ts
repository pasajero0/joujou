import 'css-reset-and-normalize';
import styled from 'styled-components';

import { ColorEnum } from '@style/colors.enum';

import '@style/global.css';

export const RootWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  background-color: ${ColorEnum.WHISPER};
`;
