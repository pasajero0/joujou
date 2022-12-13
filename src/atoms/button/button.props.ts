import { ButtonHTMLAttributes, ReactNode } from 'react';
// eslint-disable-next-line import/named
import { StyledComponent } from 'styled-components'; // line above temp solution

import { ClickEventType } from '@type/click-event.type';

import { ButtonTypeEnum } from './button-type.enum';

export interface ButtonProps<T extends Record<string, unknown> = Record<string, never>>
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  onClick?: ClickEventType;
  onMouseDown?: ClickEventType;
  title?: string;
  type?: ButtonTypeEnum;
  Component?: StyledComponent<'button', T>;
  isLarge?: boolean;
  isSmall?: boolean;
  isFull?: boolean;
  isDisabled?: boolean;
  isDisabledPointer?: boolean;
  as?: StyledComponent<any, any>;
}
