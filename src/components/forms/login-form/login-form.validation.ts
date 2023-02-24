import { object } from 'yup';
import { nameValidation, passwordValidation } from '@util/validation';

import { LoginFormEnum } from './login-form.enum';

export const LoginFormValidation = object().shape({
  [LoginFormEnum.Name]: nameValidation(),
  [LoginFormEnum.Password]: passwordValidation(),
});
