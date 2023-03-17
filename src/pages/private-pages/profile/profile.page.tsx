import { Button, Typography } from '@mui/material';

import { Wrapper } from '@page/auth-pages/common.styles';

import { BlockWrapper } from './profile.styles';
import { useAuth } from 'src/hooks/auth.hook'; // TODO! add path

const ProfilePage = () => {
  const [{ onSignOut }] = useAuth();

  return (
    <Wrapper>
      <BlockWrapper>
        <Typography variant="h5" component="h2" align="center">
          Profile
        </Typography>
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <Button onClick={onSignOut}>SIGN OUT</Button>
      </BlockWrapper>
    </Wrapper>
  );
};

export default ProfilePage;
