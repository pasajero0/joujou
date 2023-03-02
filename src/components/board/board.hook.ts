import { DragEventHandler, useState } from 'react';

import { OnEventType } from '@type/on-event.type';

import { CheckerEnum } from './board.enum';
import { BoardProps, OnDragProps, OnDropProps } from './board.interface';

const INITIAL_FEN = '.w.w.w.ww.w.w.w..w.w.w.w................b.b.b.b..b.b.b.bb.b.b.b.';
const CHECKER_TYPE = 'CHECKER_TYPE';

export const useBoard = ({
  fen = INITIAL_FEN,
}: BoardProps): [
  CheckerEnum[],
  OnEventType<OnDragProps, DragEventHandler>,
  OnEventType<OnDropProps, DragEventHandler>,
  DragEventHandler
] => {
  const initialBoardItems = fen.split('') as unknown as CheckerEnum[];

  const [boardItems, setBoardItems] = useState(initialBoardItems);

  const onDrag: OnEventType<OnDragProps, DragEventHandler> =
    ({ value, index }) =>
    ({ dataTransfer }) =>
      dataTransfer.setData(CHECKER_TYPE, `${value},${index}`);

  const onDrop: OnEventType<OnDropProps, DragEventHandler> =
    ({ value, index, isDark }) =>
    ({ dataTransfer }) => {
      if (!isDark || value !== CheckerEnum.EMPTY) return;

      const [droppedValue, droppedIndex] = dataTransfer.getData(CHECKER_TYPE).split(',') as unknown as [
        CheckerEnum,
        string
      ];

      setBoardItems(prevFen => {
        const newFen = [...prevFen];
        newFen.splice(Number(droppedIndex), 1, CheckerEnum.EMPTY);
        newFen.splice(index, 1, droppedValue);

        return newFen;
      });
    };

  const onDragOver: DragEventHandler = event => event.preventDefault();

  return [boardItems, onDrag, onDrop, onDragOver];
};
