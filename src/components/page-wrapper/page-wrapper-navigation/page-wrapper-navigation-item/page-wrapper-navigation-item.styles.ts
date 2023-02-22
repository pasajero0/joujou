import { ColorEnum } from '@style/colors.enum';
import styled, { css } from 'styled-components';

interface NavigationItemProps {
  isActive: boolean;
}

const NavigationItemIconWrapperActive = css`
  border-bottom-color: ${ColorEnum.WHITE};
`;

export const NavigationItem = styled.li`
  :not(:last-child) {
    margin-right: 8px;
  }
`;

export const NavigationItemWrapper = styled.div<NavigationItemProps>`
  height: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  color: ${ColorEnum.WHITE};
  border: 3px solid transparent;

  :hover {
    ${NavigationItemIconWrapperActive}
  }

  ${({ isActive }) => isActive && NavigationItemIconWrapperActive};
`;
