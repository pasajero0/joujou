import { OnEventType } from '@type/on-event.type';

export interface ScrollRefProps {
  scrollPosition: number;
  setScrollPosition: OnEventType<number>;
}
