import { Typography } from '@mui/material';
import { ColorEnum } from '@style/colors.enum';

interface LogoInterface {
  isBlue?: boolean;
}

export const Logo = ({ isBlue = false }: LogoInterface) => (
  <Typography variant="h5" component="h1" align="center" color={isBlue ? ColorEnum.BLUE : ColorEnum.WHITE}>
    joujou
  </Typography>
);
