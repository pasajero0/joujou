import { MouseEvent as ReactMouseEvent, TouchEvent } from 'react';
import { OnEventType } from './on-event.type';

export type ClickEventArgsType = ReactMouseEvent<HTMLButtonElement, MouseEvent> | TouchEvent<HTMLButtonElement>;

export type ClickEventType = OnEventType<ClickEventArgsType>;
