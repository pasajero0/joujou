import { ColorEnum } from '@style/colors.enum';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${ColorEnum.WHITE};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
