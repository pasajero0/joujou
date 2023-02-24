import { Wrapper } from '@page/auth-pages/common.styles';

import { LoginTitleWrapper } from './login.styles';
import { Typography } from '@mui/material';

const LoginPage = () => (
  <Wrapper>
    <LoginTitleWrapper>
      <Typography variant="h5" component="h2" align="center">
        LOGIN
      </Typography>
    </LoginTitleWrapper>
  </Wrapper>
);

export default LoginPage;
