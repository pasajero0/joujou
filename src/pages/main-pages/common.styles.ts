import styled from 'styled-components';

interface DashboardBlockProps {
  hasEmptyLateralPadding?: boolean;
}

export const PageWrapper = styled.div`
  max-width: 1094px;
  width: 100%;
  margin: 0 auto;
`;

export const PageContainerWrapper = styled(PageWrapper)`
  padding: 0 0 40px 0;
`;

export const CentredContainerWrapper = styled(PageWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

export const PageBlock = styled.div<DashboardBlockProps>`
  padding: ${({ hasEmptyLateralPadding = false }) => (hasEmptyLateralPadding ? '32px 0' : '32px')};
`;
