import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from 'src/base/base'; // TODO! fix path
import { ApplicationContext } from '@application/application.context';
import { PageEnum } from '@enum/page.enum';
import { errorHandler } from './auth-hook.helper';
import { AuthMethodsInterface } from './auth-hook.interface';
import { LoginFormValuesInterface } from '@component/forms/login-form/login-form.interface';

export const useAuth = (): [AuthMethodsInterface, boolean, string | null] => {
  const {
    props: { user },
    setProps,
  } = useContext(ApplicationContext);
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const isUserExist = user !== null;

  useEffect(() => {
    if (!isUserExist) return;
    navigate(PageEnum.Profile);
  }, [user]);

  onAuthStateChanged(auth, authData => {
    if (authData !== null) {
      if (isUserExist) return;
      const { uid, email } = authData;
      setProps({ user: { uid, email } });
      return;
    }

    if (!isUserExist) return;
    setProps({ user: null });
  });

  const onLogin = async ({ email, password }: LoginFormValuesInterface) => {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      errorHandler(err, setError);
    } finally {
      setLoading(false);
    }
  };

  const onSignUp = async ({ email, password }: LoginFormValuesInterface) => {
    try {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      errorHandler(err, setError);
    } finally {
      setLoading(false);
    }
  };

  const onSignOut = async () => {
    try {
      setLoading(true);
      await auth.signOut();
    } catch (err) {
      errorHandler(err, setError);
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
