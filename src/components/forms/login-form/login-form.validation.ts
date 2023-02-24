import { object } from 'yup';
import { emailValidation, passwordValidation } from '@util/validation';

import { LoginFormEnum } from './login-form.enum';

export const LoginFormValidation = object().shape({
  [LoginFormEnum.Email]: emailValidation(),
  [LoginFormEnum.Password]: passwordValidation(),
});
