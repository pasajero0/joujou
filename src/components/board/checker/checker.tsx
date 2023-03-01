import { CheckerWrapper, InnerWrapper } from './checker.styles';

interface CheckerInterface {
  isBlack?: boolean;
  isKing?: boolean;
}

export const Checker = ({ isBlack = false, isKing = false }: CheckerInterface) => (
  <CheckerWrapper isBlack={isBlack}>
    <InnerWrapper isBlack={isBlack}>{isKing && '♛'}</InnerWrapper>
  </CheckerWrapper>
);
