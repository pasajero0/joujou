import { ColorEnum } from '@style/colors.enum';
import styled from 'styled-components';

interface BoardFieldProps {
  isDark?: boolean;
}

const SIZE = 64;

export const BoardWrapper = styled.div`
  display: inline-grid;
  grid-template-columns: auto auto auto auto auto auto auto auto; // TODO refactoring needed
  border: 1px solid;
`;

export const BoardField = styled.div<BoardFieldProps>`
  width: ${SIZE}px;
  height: ${SIZE}px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ isDark = false }) => (isDark ? ColorEnum.WHITE : ColorEnum.BLACK)};
`;
