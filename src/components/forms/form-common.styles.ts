import styled from 'styled-components';

export const FormWrapper = styled.div`
  width: 100%;
  margin-top: 24px;
`;

export const FormRow = styled.div`
  width: 100%;

  :not(:first-child) {
    margin-top: 16px;
  }
`;

export const FormHalfRow = styled(FormRow)`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr 1fr;
`;

export const FormButtonWrapper = styled.div`
  width: 100%;
  margin-top: 40px;
`;
