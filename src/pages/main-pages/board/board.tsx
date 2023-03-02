import { CentredContainerWrapper } from '@page/main-pages/common.styles';
import { Board } from '@component/board/board';

const MY_FEN = '.w.w.w....w......W.b.W.............B..........b....b....b.......';

const BoardPage = () => (
  <CentredContainerWrapper>
    <Board fen={MY_FEN} />
  </CentredContainerWrapper>
);

export default BoardPage;
