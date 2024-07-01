import React from 'react';
import { createMuiTheme } from './theme/theme';
import { ThemeProvider } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import router from './router';

const App = () => {

  const theme = createMuiTheme()

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App;
