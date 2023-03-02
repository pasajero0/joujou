import { DragEventHandler } from 'react';
import { CheckerWrapper, InnerWrapper } from './checker.styles';
import { noop } from '@util/noop';

interface CheckerInterface {
  onDragStart: DragEventHandler;
  isBlack?: boolean;
  isKing?: boolean;
}

export const Checker = ({ isBlack = false, isKing = false, onDragStart = noop }: CheckerInterface) => (
  <CheckerWrapper isBlack={isBlack} draggable onDragStart={onDragStart}>
    <InnerWrapper isBlack={isBlack}>{isKing && '♛'}</InnerWrapper>
  </CheckerWrapper>
);
