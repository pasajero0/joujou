import { ColorEnum } from '@style/colors.enum';
import styled from 'styled-components';

export const LoaderAnimationWrapper = styled.div`
  max-width: 292px;
  max-height: 80px;
`;

export const PageLoaderWrapper = styled.div`
  background-color: ${ColorEnum.WHISPER};
  min-height: 100%;
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
