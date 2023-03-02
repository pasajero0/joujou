import { DragEventHandler, useState } from 'react';

import { OnEventType } from '@type/on-event.type';

import { CheckerEnum } from './board.enum';
import { BoardProps, BoardRendererProps, OnDragProps, OnDropProps } from './board.interface';

const INITIAL_FEN = '.w.w.w.ww.w.w.w..w.w.w.w................b.b.b.b..b.b.b.bb.b.b.b.';
const CHECKER_TYPE = 'CHECKER_TYPE';

const BLACKS = new Set([CheckerEnum.BLACK, CheckerEnum.BLACK_KING]);
const KINGS = new Set([CheckerEnum.WHITE_KING, CheckerEnum.BLACK_KING]);

export const useBoard = ({
  fen = INITIAL_FEN,
}: BoardProps): [
  CheckerEnum[],
  (callback: OnEventType<BoardRendererProps, JSX.Element>) => (value: CheckerEnum, index: number) => JSX.Element
] => {
  const initialBoardItems = fen.split('') as unknown as CheckerEnum[];

  const [boardItems, setBoardItems] = useState(initialBoardItems);

  const onDrag: OnEventType<OnDragProps, DragEventHandler> =
    ({ value, index }) =>
    ({ dataTransfer }) =>
      dataTransfer.setData(CHECKER_TYPE, `${value},${index}`);

  const onDrop: OnEventType<OnDropProps, DragEventHandler> =
    ({ value, index, isFieldDark }) =>
    ({ dataTransfer }) => {
      if (!isFieldDark || value !== CheckerEnum.EMPTY) return;

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

  const renderBoard = (callback: OnEventType<BoardRendererProps, JSX.Element>) =>
    (() => {
      let isReverse = false;

      return (value: CheckerEnum, index: number) => {
        const isCheckEven = index % 2 === 0;
        const isLastLineField = index % 8 === 0;

        if (isLastLineField) {
          isReverse = !isReverse;
        }

        const isFieldDark = isReverse ? !isCheckEven : isCheckEven;
        const hasChecker = value !== CheckerEnum.EMPTY;
        const isCheckerBlack = BLACKS.has(value);
        const isCheckerKing = KINGS.has(value);

        return callback({
          index,
          isFieldDark,
          hasChecker,
          isCheckerBlack,
          isCheckerKing,
          onDrop: onDrop({ value, index, isFieldDark }),
          onDrag: onDrag({ value, index }),
          onDragOver,
        });
      };
    })();

  return [boardItems, renderBoard];
};
