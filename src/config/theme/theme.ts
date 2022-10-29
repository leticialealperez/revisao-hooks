import { createTheme } from '@mui/material';
import { ptBR } from '@mui/material/locale';

const themeApp = createTheme({
  palette: {
    primary: {
      main: '#2b385b',
    },
    secondary: {
      main: '#e16e0e',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@global': {
          'html, body': {
            WebKitFontSmoothing: 'auto',
            backgroundColor: '#fff',
            color: '#2b385b',
          },
        },
      },
    },
    MuiFab: {
        styleOverrides: {
            root: {
                position: 'fixed',
                right: '20px',
                bottom: '20px',
            }
        }
    }
  }, 
}, ptBR);

export { themeApp };
