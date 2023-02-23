import { ColorEnum } from '@style/colors.enum';
import styled, { css } from 'styled-components';

interface NavigationItemProps {
  isActive: boolean;
}

const NavigationItemIconWrapperActive = css`
  border-bottom-color: ${ColorEnum.WHITE};
`;

export const NavigationItem = styled.li<NavigationItemProps>`
  display: flex;
  align-items: center;
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;

  :hover {
    ${NavigationItemIconWrapperActive}
  }

  ${({ isActive }) => isActive && NavigationItemIconWrapperActive};
`;
