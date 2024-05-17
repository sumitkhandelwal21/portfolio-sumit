import { createTheme } from '@mui/material/styles';

// Light theme
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: 'white',
    },
    text: {
      primary: 'black',
    },
    nav1: {
      background: 'gray-200',
      text:'black'
    },
    nav2: {
      background: 'gray-200',
      text:'black'
    }
  }
});

// Dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default1: 'gradient-to-b from-black to-gray-800',
      default2: 'gradient-to-b from-gray-800 to-black'
    },
    text: {
      primary: 'white',
    },
    nav1: {
      background: 'black',
      text:'white'
    },
    nav2: {
      background: 'gradient-to-b from-black to-gray-800',
      text:'white'
    }
  },
});

export { lightTheme, darkTheme };
