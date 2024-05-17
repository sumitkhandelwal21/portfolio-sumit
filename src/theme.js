import { createTheme } from '@mui/material/styles';

// Light theme
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    navbg: '#edf2f7',
    background: {
      default: 'white',
    },
    text: {
      primary: 'black',
    },
    
  }
});

// Dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    navbg: '#000000',
    primary: {
      main: '#90caf9',
    },
    background: {
      default1: 'gradient-to-b from-black to-gray-800',
      default2: 'gradient-to-b from-gray-800 to-black'
    },
    text: {
      primary: 'white',
    },
  },
});

export { lightTheme, darkTheme };
