import { LoginFormEnum } from './login-form.enum';

export interface LoginFormValuesInterface {
  [LoginFormEnum.Name]: string;
  [LoginFormEnum.Password]: string;
}
