import { ColorEnum } from './colors.enum';
import { createTheme } from '@mui/material/styles';

export const MAIN_THEME = createTheme({
  palette: {
    primary: {
      main: ColorEnum.BLUE,
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});
