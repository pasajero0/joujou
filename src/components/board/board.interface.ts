import { DragEventHandler } from 'react';
import { CheckerEnum } from './board.enum';

export interface BoardProps {
  fen?: string;
}

export interface OnDragProps {
  value: CheckerEnum;
  index: number;
}

export interface OnDropProps extends OnDragProps {
  isFieldDark: boolean;
}

export interface BoardRendererProps {
  index: number;
  hasChecker: boolean;
  isFieldDark: boolean;
  isCheckerBlack: boolean;
  isCheckerKing: boolean;
  onDrop: DragEventHandler;
  onDrag: DragEventHandler;
  onDragOver: DragEventHandler;
}
