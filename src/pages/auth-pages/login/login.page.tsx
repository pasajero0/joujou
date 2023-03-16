import { Form, Formik } from 'formik';

import { Button, Typography } from '@mui/material';

import { Wrapper } from '@page/auth-pages/common.styles';

import { LoginForm } from '@component/forms/login-form/login-form';
import { FormButtonWrapper } from '@component/forms/form-common.styles';
import { LoginFormFormInitial } from '@component/forms/login-form/login-form.initial';
import { LoginFormValuesInterface } from '@component/forms/login-form/login-form.interface';

import { BlockWrapper, LoginWrapper } from './login.styles';
import { LoginFormValidation } from '@component/forms/login-form/login-form.validation';

const LoginPage = () => {
  // eslint-disable-next-line no-console
  const handleSubmit = (values: LoginFormValuesInterface) => console.log('submit', values);

  return (
    <Wrapper>
      <LoginWrapper>
        <BlockWrapper>
          <Typography variant="h5" component="h2" align="center">
            Please enter!
          </Typography>
        </BlockWrapper>
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
              <Button type="submit" fullWidth>
                Login
              </Button>
            </FormButtonWrapper>
          </Form>
        </Formik>
      </LoginWrapper>
    </Wrapper>
  );
};

export default LoginPage;
