import { PageEnum } from '@enum/page.enum';
import { AccountCircle } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import { useNavigate } from 'react-router';

export const PageWrapperProfile = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => navigate(PageEnum.Login);

  return (
    <Tooltip title="Login" arrow>
      <IconButton size="large" color="inherit" onClick={handleProfileClick}>
        <AccountCircle />
      </IconButton>
    </Tooltip>
  );
};
