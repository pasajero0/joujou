/* eslint-disable @typescript-eslint/no-explicit-any */

export type OnEventType<T = undefined, R = void> = (event: T) => R;
export type OnEventsType<T extends any[], R = void> = (...events: T) => R;
export type OnEventEmptyType<R = void> = () => R;
export type OnEventOptionalType<T = undefined, R = void> = (event?: T) => R;
