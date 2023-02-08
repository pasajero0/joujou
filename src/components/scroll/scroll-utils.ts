import { OnEventType } from '@type/on-event.type';

const DURATION = 500;

export const shouldBrowsersSmooth = /^((?!chrome|android).)*safari|msie|trident|edg/i.test(navigator.userAgent);

const easeInOutCubic = (transition: number) =>
  transition < 0.5
    ? 4 * transition * transition * transition
    : (transition - 1) * (2 * transition - 2) * (2 * transition - 2) + 1;

const position = (start: number, end: number, elapsed: number) =>
  elapsed > DURATION ? end : start + (end - start) * easeInOutCubic(elapsed / DURATION);

export const smoothStep = (start: number, end: number, call: OnEventType<number>, currentTime = Date.now()) => {
  const step = () => {
    const elapsed = Date.now() - currentTime;

    call(position(start, end, elapsed));

    if (DURATION > elapsed) {
      requestAnimationFrame(<FrameRequestCallback>step);
    }
  };
  step();
};
