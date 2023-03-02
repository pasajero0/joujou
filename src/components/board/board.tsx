import { CheckerEnum } from './board.enum';
import { BoardWrapper, BoardField } from './board.styles';
import { Checker } from './checker/checker';
import { BoardProps } from './board.interface';
import { useBoard } from './board.hook';

const BLACKS = new Set([CheckerEnum.BLACK, CheckerEnum.BLACK_KING]);
const KINGS = new Set([CheckerEnum.WHITE_KING, CheckerEnum.BLACK_KING]);

export const Board = (props: BoardProps) => {
  const [boardItems, handleDrag, handleDrop, handleDragOver] = useBoard(props);
  let isReverse = false;

  return (
    <BoardWrapper>
      {boardItems.map((value: CheckerEnum, index: number) => {
        const isCheckEven = index % 2 === 0;
        const isLastLineField = index % 8 === 0;

        if (isLastLineField) {
          isReverse = !isReverse;
        }

        const isDark = isReverse ? !isCheckEven : isCheckEven;
        const shouldRenderChecker = value !== CheckerEnum.EMPTY;
        const isCheckerBlack = BLACKS.has(value);
        const isCheckerKing = KINGS.has(value);

        return (
          <BoardField
            key={index}
            isDark={isDark}
            onDrop={handleDrop({ value, index, isDark })}
            onDragOver={handleDragOver}
          >
            {shouldRenderChecker && (
              <Checker isBlack={isCheckerBlack} isKing={isCheckerKing} onDragStart={handleDrag({ value, index })} />
            )}
          </BoardField>
        );
      })}
    </BoardWrapper>
  );
};
