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
  key: number;
  isFieldDark: boolean;
  isCheckerBlack: boolean;
  isCheckerKing: boolean;
  shouldRenderChecker: boolean;
  onDrop: DragEventHandler;
  onDrag: DragEventHandler;
  onDragOver: DragEventHandler;
}
