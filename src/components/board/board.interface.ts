import { CheckerEnum } from './board.enum';

export interface BoardProps {
  fen?: string;
}

export interface OnDragProps {
  value: CheckerEnum;
  index: number;
}

export interface OnDropProps extends OnDragProps {
  isDark: boolean;
}
