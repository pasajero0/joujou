import styled from 'styled-components';

interface PageBlockProps {
  hasEmptyLateralPadding?: boolean;
}

export const Wrapper = styled.div`
  max-width: 1094px;
  width: 100%;
  margin: 0 auto;
`;

export const PageContainerWrapper = styled(Wrapper)`
  padding: 0 0 40px 0;
`;

export const PageBlock = styled.div<PageBlockProps>`
  padding: ${({ hasEmptyLateralPadding = false }) => (hasEmptyLateralPadding ? '32px 0' : '32px')};
`;
