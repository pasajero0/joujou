import { Form, Formik } from 'formik';

import { Button, Typography } from '@mui/material';

import { Wrapper } from '@page/auth-pages/common.styles';

import { LoginForm } from '@component/forms/login-form/login-form';
import { FormButtonWrapper } from '@component/forms/form-common.styles';
import { LoginFormFormInitial } from '@component/forms/login-form/login-form.initial';

import { BlockWrapper, LoginWrapper } from './login.styles';
import { LoginFormValidation } from '@component/forms/login-form/login-form.validation';
import { useAuth } from 'src/hooks/auth-hook/auth-hook'; // TODO fix path
import { Link } from 'react-router-dom';
import { PageEnum } from '@enum/page.enum';
import { ColorEnum } from '@style/colors.enum';

interface LoginPageProps {
  isSignUp?: boolean;
}

const LoginPage = ({ isSignUp = false }: LoginPageProps) => {
  const [{ onLogin, onSignUp }, isLoading, error] = useAuth();

  const title = isSignUp ? 'Sign Up' : 'Login';
  const handleSubmit = isSignUp ? onSignUp : onLogin;
  const hasError = error !== undefined;

  return (
    <Wrapper>
      <LoginWrapper>
        <BlockWrapper>
          <Typography variant="h5" component="h2" align="center">
            {title}
          </Typography>
        </BlockWrapper>
        {hasError && (
          <BlockWrapper>
            <Typography component="p" align="center" color={ColorEnum.RED}>
              {error}
            </Typography>
          </BlockWrapper>
        )}
        <Formik
          onSubmit={handleSubmit}
          initialValues={LoginFormFormInitial}
          validationSchema={LoginFormValidation}
          validateOnBlur={false}
          validateOnChange={false}
          enableReinitialize
        >
          <Form>
            <LoginForm />
            <FormButtonWrapper>
              <Button type="submit" disabled={isLoading} fullWidth>
                {isLoading ? 'Loading...' : title}
              </Button>
            </FormButtonWrapper>
          </Form>
        </Formik>
        {!isSignUp && (
          <BlockWrapper>
            <Typography component="p" align="center">
              Do not have an account? <Link to={PageEnum.Signup}>Sign up!</Link>
            </Typography>
          </BlockWrapper>
        )}
      </LoginWrapper>
    </Wrapper>
  );
};

export default LoginPage;
