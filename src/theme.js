import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// Create a theme instance.
const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: '#1149FF',
    },
    secondary: {
      main: '#4B9CDE',
    },
    error: {
      main: red.A400,
    },
    whatsapp: {
        main: '#25D366'
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
