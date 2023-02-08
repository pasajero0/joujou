import { useEffect } from 'react';

import { EventEmitterEnum } from '@enum/event-emitter.enum';
import { OnEventEmptyType, OnEventType } from '@type/on-event.type';

export const emit = <T>(name: EventEmitterEnum, detail?: T) => {
  const event = new CustomEvent(name, { detail });
  window.dispatchEvent(event);
};

export const useOn = (name: EventEmitterEnum, handler: OnEventType<CustomEventInit>) => {
  useEffect(() => {
    window.addEventListener(name, handler);
    return () => window.removeEventListener(name, handler);
  }, [name, handler]);
};

export const useRepeat = (handler: OnEventEmptyType, interval = 30000) => {
  useEffect(() => {
    let timeoutId = setTimeout(function tick() {
      handler();
      timeoutId = setTimeout(tick, interval);
    }, interval);
    return () => clearTimeout(timeoutId);
  }, [handler, interval]);
};
