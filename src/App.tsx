import React from 'react';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { themeApp }  from './config/theme/theme';
import { AppRoutes } from './routes/router';

function App() {
  return (
    <ThemeProvider theme={themeApp}>
      <CssBaseline />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
