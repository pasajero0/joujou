import { BoardWrapper, BoardField } from './board.styles';
import { Checker } from './checker/checker';
import { BoardProps } from './board.interface';
import { useBoard } from './board.hook';

export const Board = (props: BoardProps) => {
  const [boardItems, renderBoard] = useBoard(props);

  return (
    <BoardWrapper>
      {boardItems.map(
        renderBoard(({ index, hasChecker, isFieldDark, isCheckerBlack, isCheckerKing, onDrop, onDrag, onDragOver }) => (
          <BoardField key={index} isDark={isFieldDark} onDrop={onDrop} onDragOver={onDragOver}>
            {hasChecker && <Checker isBlack={isCheckerBlack} isKing={isCheckerKing} onDragStart={onDrag} />}
          </BoardField>
        ))
      )}
    </BoardWrapper>
  );
};
