import { LoginFormEnum } from './login-form.enum';
import { LoginFormValuesInterface } from './login-form.interface';

export const LoginFormFormInitial: LoginFormValuesInterface = {
  [LoginFormEnum.Name]: '',
  [LoginFormEnum.Password]: '',
};
