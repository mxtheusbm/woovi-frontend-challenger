import { alpha, createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    allVariants: {
      color: '#4D4D4D'
    },
    fontFamily: [
      'Nunito',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
    h6: {
      fontSize: '1.125rem'
    },
  },
  palette: {
    primary: {
      main: '#03D69D',
    },
    secondary: {
      main: alpha('#133A6F', 0.9),
      dark: alpha('#133A6F', 1),
      light: alpha('#133A6F', 0.8),
      contrastText: '#FFF'
    },
  },
});