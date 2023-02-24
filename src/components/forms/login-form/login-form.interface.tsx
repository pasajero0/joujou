import { LoginFormEnum } from './login-form.enum';

export interface LoginFormValuesInterface {
  [LoginFormEnum.Email]: string;
  [LoginFormEnum.Password]: string;
}
