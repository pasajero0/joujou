import styled, { css } from 'styled-components';
import { ButtonProps } from './button.props';

export const ButtonStyle = styled.button`
  border: 0;
  outline: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  padding: 0 32px;
  height: 48px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 20px;

  :focus,
  :active {
    outline: none;
  }

  :disabled {
    cursor: default;
  }

  ${({ isFull = false }: ButtonProps) => isFull && 'width: 100%;'}

  ${({ isSmall = false }: ButtonProps) => isSmall && 'height: 40px; padding: 0 24px;'}

  ${({ isLarge = false }: ButtonProps) => isLarge && 'height: 56px; font-size: 16px;'}

  ${({ isDisabledPointer = false }: ButtonProps) =>
    isDisabledPointer &&
    css`
      pointer-events: none;
    `}
`;

export const ButtonTransparentStyle = styled(ButtonStyle)`
  background-color: transparent;
  padding: 0;
  height: 100%;
  border-radius: 0;

  :disabled {
    opacity: 0.4;
  }
`;
