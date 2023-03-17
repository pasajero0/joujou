import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

import { auth } from 'src/base/base';
import { ApplicationContext } from '@application/application.context';
import { PageEnum } from '@enum/page.enum';
import { LoginFormValuesInterface } from '@component/forms/login-form/login-form.interface';
import { OnEventEmptyType, OnEventType } from '@type/on-event.type';
import type { FirebaseError } from 'firebase/app';

interface AuthMethodsInterface {
  onLogin: OnEventType<LoginFormValuesInterface, Promise<void>>;
  onSignUp: OnEventType<LoginFormValuesInterface, Promise<void>>;
  onSignOut: OnEventEmptyType<Promise<void>>;
}

export const useAuth = (): [AuthMethodsInterface, boolean, string | null] => {
  const {
    props: { user },
    setProps,
  } = useContext(ApplicationContext);
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  onAuthStateChanged(auth, authData => {
    const isUserExist = user !== null;

    if (authData !== null) {
      if (isUserExist) return;
      console.log('LOGED IN: ', authData);
      const { uid, email } = authData;
      setProps({ user: { uid, email } });
      navigate(PageEnum.Profile);

      return;
    }

    if (!isUserExist) return;
    console.log('NO USERS');
    setProps({ user: null });
  });

  const onLogin = async ({ email, password }: LoginFormValuesInterface) => {
    try {
      setLoading(true);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('handleLogin', email, password, userCredential); // TODO remove
    } catch (err) {
      console.error(err);
      const { code } = err as FirebaseError;
      setError(code);
    } finally {
      setLoading(false);
    }
  };

  const onSignUp = async ({ email, password }: LoginFormValuesInterface) => {
    try {
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('handleSignUp', email, password, userCredential); // TODO remove
    } catch (err) {
      console.error(err);
      const { code } = err as FirebaseError;
      setError(code);
    } finally {
      setLoading(false);
    }
  };

  const onSignOut = async () => {
    try {
      setLoading(true);
      await auth.signOut();
    } catch (err) {
      console.error(err);
      const { code } = err as FirebaseError;
      setError(code);
    } finally {
      setLoading(false);
    }
  };

  return [
    {
      onLogin,
      onSignUp,
      onSignOut,
    },
    isLoading,
    error,
  ];
};
