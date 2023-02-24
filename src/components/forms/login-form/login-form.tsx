import { FormRow, FormWrapper } from '@component/forms/form-common.styles';
import { Input } from '@component/input/input';
import { InputTypeEnum } from '@component/input/input-type.enum';

import { LoginFormEnum } from './login-form.enum';

export const LoginForm = () => (
  <FormWrapper>
    <FormRow>
      <Input name={LoginFormEnum.Email} label="Email" />
    </FormRow>
    <FormRow>
      <Input name={LoginFormEnum.Password} label="Password" type={InputTypeEnum.Password} />
    </FormRow>
  </FormWrapper>
);
