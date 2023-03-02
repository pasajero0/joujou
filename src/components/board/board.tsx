import { BoardWrapper, BoardField } from './board.styles';
import { Checker } from './checker/checker';
import { BoardProps } from './board.interface';
import { useBoard } from './board.hook';

export const Board = (props: BoardProps) => {
  const [boardItems, renderBoard] = useBoard(props);

  return (
    <BoardWrapper>
      {boardItems.map(
        renderBoard(
          ({ key, shouldRenderChecker, isFieldDark, isCheckerBlack, isCheckerKing, onDrop, onDrag, onDragOver }) => {
            return (
              <BoardField key={key} isDark={isFieldDark} onDrop={onDrop} onDragOver={onDragOver}>
                {shouldRenderChecker && (
                  <Checker isBlack={isCheckerBlack} isKing={isCheckerKing} onDragStart={onDrag} />
                )}
              </BoardField>
            );
          }
        )
      )}
    </BoardWrapper>
  );
};
