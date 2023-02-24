import { ColorEnum } from '@style/colors.enum';
import styled from 'styled-components';

export const LoginWrapper = styled.div`
  width: 300px;
  box-sizing: border-box;
  padding: 32px;
  border-radius: 8px;
  background: ${ColorEnum.WHITE};
`;

export const BlockWrapper = styled.div`
  :not(:first-child) {
    margin-top: 16px;
  }
`;
