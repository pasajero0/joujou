import 'css-reset-and-normalize';
import styled from 'styled-components';

import { Whisper } from '@style/colors';

import '@style/global.css';

export const RootWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  background-color: ${Whisper};
`;
