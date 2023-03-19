import { OnEventEmptyType, OnEventType } from '@type/on-event.type';
import { LoginFormValuesInterface } from '@component/forms/login-form/login-form.interface';

export interface AuthMethodsInterface {
  onLogin: OnEventType<LoginFormValuesInterface, Promise<void>>;
  onSignUp: OnEventType<LoginFormValuesInterface, Promise<void>>;
  onSignOut: OnEventEmptyType<Promise<void>>;
}
