import { memo } from 'react';

import { ButtonTypeEnum } from './button-type.enum';
import { ButtonProps } from './button.props';
import { ButtonStyle } from './button.style';

export const Button = memo(
  ({
    title,
    onClick,
    onMouseDown,
    children,
    type = ButtonTypeEnum.Button,
    Component = ButtonStyle,
    isDisabled,
    ...props
  }: ButtonProps) => (
    <Component
      type={props.as === undefined ? type : undefined}
      title={title}
      onClick={onClick}
      onMouseDown={onMouseDown}
      onTouchStart={onMouseDown}
      disabled={isDisabled}
      {...props}
    >
      {children}
    </Component>
  )
);
