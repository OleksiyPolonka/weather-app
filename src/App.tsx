import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#999',
    },
    secondary: {
      main: '#cfcfcf',
    },
    text: {
      secondary: '#cfcfcf',
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&$focused $notchedOutline': {
            borderColor: 'red',
          },
        },
        notchedOutline: {
          borderColor: '#cfcfcf',
        },
      },
    },
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);

export default App;
