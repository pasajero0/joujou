import { CheckerEnum } from './board.enum';
import { BoardWrapper, BoardField } from './board.styles';
import { Checker } from './checker/checker';

interface BoardInterface {
  fen?: string;
}

const INITIAL_FEN = '.w.w.w.ww.w.w.w..w.w.w.w................b.b.b.b..b.b.b.bb.b.b.b.';

const CHECKERS = new Set([CheckerEnum.WHITE, CheckerEnum.WHITE_KING, CheckerEnum.BLACK, CheckerEnum.BLACK_KING]);
const BLACKS = new Set([CheckerEnum.BLACK, CheckerEnum.BLACK_KING]);
const KINGS = new Set([CheckerEnum.WHITE_KING, CheckerEnum.BLACK_KING]);

const renderBoard = (() => {
  let isReverse = false;

  return (value: CheckerEnum, index: number) => {
    const isCheckEven = index % 2 === 0;
    const isLineEven = index % 8 === 0;

    if (isLineEven) {
      isReverse = !isReverse;
    }

    const isDark = isReverse ? isCheckEven : !isCheckEven;
    const shouldRenderChecker = CHECKERS.has(value);
    const isCheckerBlack = BLACKS.has(value);
    const isCheckerKing = KINGS.has(value);

    return (
      <BoardField key={index} isDark={isDark}>
        {shouldRenderChecker && <Checker isBlack={isCheckerBlack} isKing={isCheckerKing} />}
      </BoardField>
    );
  };
})();

export const Board = ({ fen = INITIAL_FEN }: BoardInterface) => {
  const fenArray = fen.split('') as unknown as CheckerEnum[];

  return <BoardWrapper>{fenArray.map(renderBoard)}</BoardWrapper>;
};
