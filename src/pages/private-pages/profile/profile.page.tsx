import { Typography } from '@mui/material';

import { Wrapper } from '@page/auth-pages/common.styles';

import { BlockWrapper } from './profile.styles';
import { useContext } from 'react';
import { ApplicationContext } from '@application/application.context';

const ProfilePage = () => {
  const {
    props: { user },
  } = useContext(ApplicationContext);
  console.log('PROFILE: ', user); // TODO remove

  return (
    <Wrapper>
      <BlockWrapper>
        <Typography variant="h5" component="h2" align="center">
          Profile
        </Typography>
      </BlockWrapper>
    </Wrapper>
  );
};

export default ProfilePage;
