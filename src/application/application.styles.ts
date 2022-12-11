import 'css-reset-and-normalize';
import styled from 'styled-components';

import { Whisper } from '../styles/colors'; // TODO fix ../ 

import '../styles/global.css';

export const RootWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  background-color: ${Whisper};
`;
