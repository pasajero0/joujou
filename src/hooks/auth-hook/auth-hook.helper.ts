import type { FirebaseError } from 'firebase/app';

export const errorHandler = (err: unknown, setError: React.Dispatch<React.SetStateAction<string | null>>): void => {
  const { code } = err as FirebaseError;
  const [, message] = code.split('/');
  const capitalizedMessage = message.charAt(0).toUpperCase() + message.slice(1);
  const errorMessage = capitalizedMessage.split('-').join(' ');

  setError(errorMessage);

  console.error(err);
};
