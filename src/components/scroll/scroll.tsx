import { MutableRefObject, PropsWithChildren, RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { positionValues, Scrollbars } from 'react-custom-scrollbars';

import { ScrollWrapper } from './scroll.styles';
import { ScrollRefProps } from './scroll-ref.props';
import { shouldBrowsersSmooth, smoothStep } from './scroll-utils';
import { emit } from '@util/event-emitter';
import { EventEmitterEnum } from '@enum/event-emitter.enum';
import { scrollView } from './scrollView/scrollView';

interface ScrollProps {
  height?: number;
  autoHeight?: boolean;
  autoHeightMax?: number | string;
  initialScrollPosition?: number;
  scrollRef?: MutableRefObject<ScrollRefProps | undefined>;
}

interface ScrollbarViewInterface extends Scrollbars {
  view: HTMLDivElement;
}

interface EventTargetInterface<T = undefined> {
  target: T;
}

export const Scroll = ({
  scrollRef,
  height = 0,
  autoHeight,
  autoHeightMax,
  initialScrollPosition = 0,
  children,
}: PropsWithChildren<ScrollProps>) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const scrollbarsRef = useRef() as RefObject<ScrollbarViewInterface>;
  const [scrollPosition, setScrollPosition] = useState(initialScrollPosition);
  const [heightScroll, setSize] = useState(height);

  const setWrapperSize = () => setSize(wrapperRef.current?.getBoundingClientRect().height);

  const handleScroll = (event: any) => {
    setScrollPosition((event as EventTargetInterface<positionValues>).target.scrollTop);
  };

  const handleScrollTo = (position: number) => {
    scrollbarsRef.current?.view.scroll({
      top: position,
      behavior: 'smooth',
    });
  };

  const handleScrollPosition = useCallback(
    (position: number) => {
      if (shouldBrowsersSmooth) {
        smoothStep(scrollPosition, position, handleScrollTo);
      } else {
        handleScrollTo(position);
      }
      setScrollPosition(position);
    },
    [scrollPosition]
  );

  useEffect(setWrapperSize, []);
  // useWindowResize(setWrapperSize);

  useEffect(() => {
    emit(EventEmitterEnum.ScrollPositionUpdate, scrollPosition);

    if (scrollRef) {
      scrollRef.current = {
        scrollPosition,
        setScrollPosition: handleScrollPosition,
      };
    }
  }, [scrollPosition, handleScrollPosition, scrollRef]);

  return (
    <ScrollWrapper ref={wrapperRef}>
      <Scrollbars
        autoHide
        autoHeight={autoHeight}
        autoHeightMax={autoHeightMax}
        universal
        style={{ width: '100%', height: height > 0 ? heightScroll : '100%' }}
        onScroll={handleScroll}
        ref={scrollbarsRef}
        renderThumbVertical={scrollView()}
      >
        {children}
      </Scrollbars>
    </ScrollWrapper>
  );
};
