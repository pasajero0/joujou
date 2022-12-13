import { Button } from './button';
import { ButtonProps } from './button.props';
import { ButtonTransparentStyle } from './button.style';

export const ButtonTransparent = (props: ButtonProps) => <Button Component={ButtonTransparentStyle} {...props} />;
