import { ColorEnum } from '@style/colors.enum';
import styled from 'styled-components';

interface CheckProps {
  isBlack?: boolean;
}

export const CheckerWrapper = styled.div<CheckProps>`
  width: 90%;
  height: 90%;
  border: 2px solid ${ColorEnum.WHITE};
  background: ${({ isBlack = false }) => (isBlack ? ColorEnum.BLACK : ColorEnum.WHITE)};
  color: ${({ isBlack = false }) => (isBlack ? ColorEnum.WHITE : ColorEnum.BLACK)};

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 4px;
  border-radius: 50px;
`;

export const InnerWrapper = styled.p<CheckProps>`
  width: 85%;
  height: 85%;
  font-size: 2rem;
  text-align: center;
  user-select: none;
  border: 2px solid ${({ isBlack = false }) => (isBlack ? ColorEnum.WHITE : ColorEnum.BLACK)};
  border-radius: 50px;
`;
